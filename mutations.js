import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation Mutation($input: UserInput!) {
  addUser(input: $input) {
    success
    Errors {
      message
      path
    }
  }
}
`;