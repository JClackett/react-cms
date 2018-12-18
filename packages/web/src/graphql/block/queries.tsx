import { gql } from "apollo-boost";

export const UPDATE_BLOCK = gql`
  mutation UpdateBlock($id: String!, $content: String!) {
    updateBlock(id: $id, content: $content)
  }
`;
