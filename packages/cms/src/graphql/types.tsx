/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBlock
// ====================================================

export interface UpdateBlock {
  updateBlock: boolean | null;
}

export interface UpdateBlockVariables {
  id: string;
  content: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCollection
// ====================================================

export interface CreateCollection_createCollection {
  __typename: "Collection";
  name: string;
}

export interface CreateCollection {
  createCollection: CreateCollection_createCollection | null;
}

export interface CreateCollectionVariables {
  name: string;
  page: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateCollection
// ====================================================

export interface UpdateCollection {
  updateCollection: boolean | null;
}

export interface UpdateCollectionVariables {
  id: string;
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCollection
// ====================================================

export interface DeleteCollection {
  deleteCollection: boolean | null;
}

export interface DeleteCollectionVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindPagesQuery
// ====================================================

export interface FindPagesQuery_pages {
  __typename: "Page";
  id: string;
  name: string;
  slug: string;
}

export interface FindPagesQuery {
  pages: (FindPagesQuery_pages | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindPageQuery
// ====================================================

export interface FindPageQuery_page_collections_blocks {
  __typename: "Block";
  id: string;
  type: string;
  content: string | null;
}

export interface FindPageQuery_page_collections {
  __typename: "Collection";
  id: string;
  name: string;
  blocks: (FindPageQuery_page_collections_blocks | null)[] | null;
}

export interface FindPageQuery_page {
  __typename: "Page";
  id: string;
  name: string;
  slug: string;
  collections: (FindPageQuery_page_collections | null)[] | null;
}

export interface FindPageQuery {
  page: FindPageQuery_page | null;
}

export interface FindPageQueryVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  __typename: "User";
  id: string;
  name: string;
}

export interface Me {
  me: Me_me | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "User";
  id: string;
  name: string;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  name: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Logout
// ====================================================

export interface Logout {
  logout: boolean | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "User";
  id: string;
  name: string;
}

export interface Register {
  register: Register_register | null;
}

export interface RegisterVariables {
  name: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
