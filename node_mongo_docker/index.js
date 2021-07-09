// Création du serveur express + websocket
const express = require('express')
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');

const axios = require('axios');

const app = express()
const server = Server(app);
const io = socket(server);
const port = 80;

// Config express
app.use(bodyParser.json());
app.use((request,response, next) =>{
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Connexion à la DB
const mongoose = require('mongoose');
const dbURL = 'mongodb://mongodb:27017/local'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function(){
  console.log('Connected')
});

// On monte l'API GraphQL
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

// Test, serveur fonctionne
// app.get('/', (req, res) => {
//   res.send('Hello Anamnotes!')
// });

/*
* Socket.io
*/

io.on('connection', (ws)=>{
  console.log('>>> socket.io - connected')

  // axios vers graphQL pour charger les messages depuis la BDD à la connexion de l'utilisateur afin de les afficher dans son client
  let messagesSaved;
  axios({
    url: dbURL,
    method: 'post',
    data: {
      query: `
      {
        messages {
          content
          author
          createdAt
        }
      }
      `
    }
  }).then((result)=>{
    messagesSaved = result.data
    io.emit('load_messages', messagesSaved)
  })

  ws.on('send_message', (messageData) => {
    // axios vers graphQL pour enregistrer le message dans la BDD
    let newMessage;
    axios({
      url: dbURL,
      method: 'post',
      data: {
        query: `
        mutation {
          createMessage(message:
            {content: ${messageData.content}, author: ${messageData.author}}) {
              content,
              author,
              createdAt
            }
        }
        `
      }
    }).then((result)=>{
      console.log(result);
      newMessage = result.data;
    })
    io.emit('send_message', newMessage);
  })
})


server.listen(port, () => {
  console.log(`Running a graphQL API server at http://localhost:8000/graphql`)
});