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

// ====================================================
// GraphQL query operation: ListPages
// ====================================================

export interface ListPages_listPages {
  __typename: "Page";
  id: string;
  name: string;
  slug: string;
}

export interface ListPages {
  listPages: (ListPages_listPages | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindPage
// ====================================================

export interface FindPage_findPage_collections_blocks {
  __typename: "Block";
  id: string;
  type: string;
}

export interface FindPage_findPage_collections {
  __typename: "Collection";
  id: string;
  name: string;
  blocks: (FindPage_findPage_collections_blocks | null)[] | null;
}

export interface FindPage_findPage {
  __typename: "Page";
  id: string;
  name: string;
  slug: string;
  collections: (FindPage_findPage_collections | null)[] | null;
}

export interface FindPage {
  findPage: FindPage_findPage | null;
}

export interface FindPageVariables {
  slug: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
