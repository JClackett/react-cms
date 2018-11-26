import { gql } from "apollo-boost";

export const CREATE_COLLECTION = gql`
  mutation CreateCollection($name: String!, $page: String!) {
    createCollection(name: $name, page: $page) {
      name
    }
  }
`;

export const UPDATE_COLLECTION = gql`
  mutation UpdateCollection($id: String!, $name: String!) {
    updateCollection(id: $id, name: $name)
  }
`;

export const DELETE_COLLECTION = gql`
  mutation DeleteCollection($id: String!) {
    deleteCollection(id: $id)
  }
`;
