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
    articles:[Article!]
  }

  type Mutation {
    createArticle(article:ArticleInput): Article
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)