const { buildSchema } = require('graphql');

// Le schéma définit la forme de notre data dans graphQL, ici on aura qu'un seul type de datas: les messages. On veut pouvoir tous les récupérer (query) et en ajouter (mutation).

module.exports = buildSchema(`

  type Message {
    _id: ID!
    content: String!
    author: String!
    createdAt: String!
  }

  input MessageInput {
    content: String!
    author: String!
  }

  type Query{
    messages:[Message!]
  }

  type Mutation {
    createMessage(message:MessageInput): Message
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)