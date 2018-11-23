import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createGlobalStyle } from "styled-components";

import * as serviceWorker from "./serviceWorker";

import Application from "./application";

const uri =
  process.env.NODE_ENV == "production"
    ? "https://some-url.com"
    : "http://localhost:5000/graphql";

const client = new ApolloClient({
  uri,
  credentials: "include"
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Avenir", Consolas, Inconsolata, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Application client={client} />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
