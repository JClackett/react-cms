import React, { memo } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./themes";
import { AppContext } from "./context";

import Login from "../pages/login";
import Home from "../pages/home";
import EditPage from "../pages/editPage";

interface AppI {
  client: any;
}
function Application(props: AppI) {
  const handleLogout = () => {
    props.client.resetStore();
  };

  return (
    <Query query={ME}>
      {({ loading, data, error }) => {
        const user = data && data.me;
        return (
          <AppContext.Provider
            value={{
              user,
              handleLogout
            }}
          >
            <ThemeProvider theme={theme}>
              <Wrapper>
                <Router>
                  <Home path="/" />
                  <Login path="/login" />
                  <EditPage path="/:slug" />
                </Router>
              </Wrapper>
            </ThemeProvider>
          </AppContext.Provider>
        );
      }}
    </Query>
  );
}

export default memo(Application);

const ME = gql`
  query Me {
    me {
      id
      name
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 ${props => props.theme.paddingLarge};
  padding-bottom: ${props => props.theme.paddingLarge};
  background-color: ${props => props.theme.colorBackground};
  position: relative;
`;
