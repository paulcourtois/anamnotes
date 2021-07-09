// Création du serveur express
const express = require('express')
const app = express()
const port = 80;

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

// Test, serveur fonctionne
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Running a graphQL API server at http://localhost:8000/graphql`)
});