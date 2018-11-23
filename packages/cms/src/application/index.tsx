import React, { memo } from "react";
import { Query } from "react-apollo";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./themes";
import { AppContext } from "./context";

import Login from "../pages/login";
import Home from "../pages/home";
import EditPage from "../pages/editPage";
import Sidebar from "../components/Sidebar";
import Auth from "../components/Auth";
import { ME } from "../graphql/queries";

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
        if (loading) return <div>loading...</div>;
        if (error) return <div>oops!</div>;
        const user = data && data.me;
        return (
          <AppContext.Provider
            value={{
              user,
              handleLogout
            }}
          >
            <ThemeProvider theme={theme}>
              <div>
                <Sidebar />
                <Wrapper>
                  <Auth>
                    <Router>
                      <Home path="/" />
                      <EditPage path="/:slug" />
                    </Router>
                  </Auth>
                </Wrapper>
              </div>
            </ThemeProvider>
          </AppContext.Provider>
        );
      }}
    </Query>
  );
}

export default memo(Application);

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 ${props => props.theme.paddingLarge};
  padding-bottom: ${props => props.theme.paddingLarge};
  background-color: ${props => props.theme.colorBackground};
  position: relative;
`;
