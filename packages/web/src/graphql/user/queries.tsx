import { gql } from "apollo-boost";

export const ME = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

export const LOGIN = gql`
  mutation Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      id
      name
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const REGISTER = gql`
  mutation Register($name: String!, $password: String!) {
    register(name: $name, password: $password) {
      id
      name
    }
  }
`;
