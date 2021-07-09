// Création du serveur express
const express = require('express')
const app = express()
const port = 80;

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/myNewDb', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function(){
  console.log('Connected')
})
// On monte l'API GraphQL
const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');

// let schema = buildSchema(`
//   type Query {
//     message(content: String!, authorName: String!): String
//   }
// `);

// var root = {
//   message: (args) =>{
//     let output = args.content
//     return output;
//   }
// }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }))

app.listen(port, () => {
  console.log(`Running a graphQL API server at http://localhost:8000/graphql`)
})