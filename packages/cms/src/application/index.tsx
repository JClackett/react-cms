import React, { memo, Suspense } from "react";
import { Query } from "react-apollo";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";
import { useApolloClient } from "react-apollo-hooks";
import { Spin, Icon, Layout } from "antd";
import { theme } from "./themes";
import { AppContext } from "./context";

import Home from "../pages/home";
import Pages from "../pages/pages";
import Collections from "../pages/collections";
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
                <Layout>
                  <Layout.Sider theme="light">
                    <Sidebar />
                  </Layout.Sider>
                  <Layout.Content style={{ padding: theme.paddingMedium }}>
                    <Suspense
                      maxDuration={1000}
                      fallback={
                        <Icon type="loading" style={{ fontSize: 30 }} spin />
                      }
                    >
                      <Router>
                        <Home path="/" />
                        <Pages path="/pages" />
                        <Collections path="/collections" />
                        <SiteSettings path="/settings" />
                        <EditPage path="/:slug" />
                      </Router>
                    </Suspense>
                  </Layout.Content>
                </Layout>
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
