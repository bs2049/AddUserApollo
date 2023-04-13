import gql from "graphql-tag";
export const typeDefs = gql`
  # Schema definitions go here

  type Query {
    users: [User]
    user(id:ID!): User!
  }

  type Error {
    message:String
    path:String
  }

  type BaseResponse {
    success:String
    Errors:[Error]
   }

  type User {
  id: ID!
  firstName: String!
  lastName: String!
  street: String!
  city: String!
    state: String!
    zip: Int!
}

input UserInput {
  firstName: String!
  lastName: String!
  street: String!
  city: String!
    state: String!
    zip: Int!
}

type Mutation {
  addUser(input: UserInput!): BaseResponse
 }
`;

