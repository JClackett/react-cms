import { gql } from "apollo-boost";

export const FIND_PAGES = gql`
  query FindPagesQuery {
    pages {
      id
      name
      slug
    }
  }
`;

export const FIND_PAGE = gql`
  query FindPageQuery($slug: String!) {
    page(slug: $slug) {
      id
      name
      slug
      collections {
        id
        name
        blocks {
          id
          type
          content
        }
      }
    }
  }
`;
