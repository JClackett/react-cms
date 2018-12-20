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
	query FindPageQuery($id: String!) {
		page(id: $id) {
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

export const UPDATE_PAGE = gql`
	mutation UpdatePage($id: String!, $name: String!) {
		updatePage(id: $id, name: $name)
	}
`;
