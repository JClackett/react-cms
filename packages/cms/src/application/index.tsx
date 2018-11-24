import React, { memo } from "react";
import { Query } from "react-apollo";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";
import { useApolloClient } from "react-apollo-hooks";
import { Spin, Icon } from "antd";
import { theme } from "./themes";
import { AppContext } from "./context";

import Home from "../pages/home";
import EditPage from "../pages/editPage";
import SiteSettings from "../pages/siteSettings";

import Sidebar from "../components/Sidebar";
import Auth from "../components/Auth";
import { ME } from "../graphql/queries";

function Application(props: any) {
  const client: any = useApolloClient();
  const handleLogout = () => {
    client.resetStore();
  };
  return (
    <Query query={ME}>
      {({ loading, data, error }) => {
        if (loading)
          return (
            <Loader>
              <Spin
                indicator={
                  <Icon type="loading" style={{ fontSize: 30 }} spin />
                }
              />
            </Loader>
          );
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
              <Auth>
                <Wrapper>
                  <Sidebar />
                  <Content>
                    <Router>
                      <Home path="/" />
                      <SiteSettings path="/settings" />
                      <EditPage path="/:slug" />
                    </Router>
                  </Content>
                </Wrapper>
              </Auth>
            </ThemeProvider>
          </AppContext.Provider>
        );
      }}
    </Query>
  );
}

export default memo(Application);

const Loader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: calc(100vw - 250px);
  min-height: 100vh;
  padding: 0 ${props => props.theme.paddingLarge};
  padding-bottom: ${props => props.theme.paddingLarge};
  background-color: ${props => props.theme.colorBackground};
  position: relative;
`;
