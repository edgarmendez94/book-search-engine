const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me:[User]!
  }

  input BookInput {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  
    saveBook(bookData: BookInput): User
  
    removeBook(bookId:ID!):User
  }

`;

module.exports = typeDefs;



