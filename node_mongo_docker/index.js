// Création du serveur express + websocket
const express = require('express')
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');

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
mongoose.connect('mongodb://mongodb:27017/local', { useNewUrlParser: true, useUnifiedTopology: true });
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




server.listen(port, () => {
  console.log(`Running a graphQL API server at http://localhost:8000/graphql`)
});