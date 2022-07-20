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

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: 
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(authors: String!, description: String!, title: , bookid: , image: , link: )

    removeBook(bookId):User
  }
`;

module.exports = typeDefs;
