import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(name: String!, password: String!): User
    login(name: String!, password: String!): User
    me: User
    logout: Boolean
    updateUser(name: String): User
  }
`;
