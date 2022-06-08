const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    biteSites: [BiteSite]
  }

  type BiteSite {
    _id: ID
    facebook: String
    instagram: String
    tikTok: String
    snapchat: String
    youTube: String
    twitter: String
    whatsApp: String
    linkedIn: String
    pinterest: String
    soundCloud: String
    appleMusic: String
    spotify: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    
    login(
      email: String!
      password: String!
    ): Auth

    saveBiteSite(
      facebook: String
      instagram: String
      tikTok: String
      snapchat: String
      youTube: String
      twitter: String
      whatsApp: String
      linkedIn: String
      pinterest: String
      soundCloud: String
      appleMusic: String
      spotify: String
    ): User

    removeBiteSite(
      _id: ID!
    ): User
  }
`;

module.exports = typeDefs;
