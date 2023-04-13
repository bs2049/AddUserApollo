import {gql} from '@apollo/client';

export const GET_USERS = gql`
query Users {
    users {
      id
      firstName
      lastName
      state
      street
      zip
      city
    }
  }
`;

export const GET_USER = gql`
query User($userId: ID!) {
  user(id: $userId) {
    city
    firstName
    id
    lastName
    state
    street
    zip
  }
}

`;
  


