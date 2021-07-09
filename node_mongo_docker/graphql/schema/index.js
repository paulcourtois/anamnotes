const { buildSchema } = require('graphql');

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