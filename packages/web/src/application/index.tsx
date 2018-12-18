import React, { memo, Suspense } from "react";
import { Query } from "react-apollo";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "styled-components";
import { Icon, Layout } from "antd";
import { theme } from "./themes";

import { FIND_PAGES } from "../graphql/page/queries";
import { FindPagesQuery, FindPagesQuery_pages } from "../graphql/types";

function Application() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Layout.Content style={{ padding: theme.paddingMedium }}>
          <Suspense
            fallback={<Icon type="loading" style={{ fontSize: 30 }} spin />}
          >
            <Query<FindPagesQuery> query={FIND_PAGES}>
              {({ loading, data, error }) => {
                if (loading || error || !data || !data.pages) return null;
                return (
                  <Router>
                    {data.pages.map((page: FindPagesQuery_pages | null) => {
                      if (!page) return null;
                      return (
                        <Page key={page.id} path={page.slug} page={page} />
                      );
                    })}
                  </Router>
                );
              }}
            </Query>
          </Suspense>
        </Layout.Content>
      </Layout>
    </ThemeProvider>
  );
}

function Page(props: any) {
  return <div>{props.page.name}</div>;
}

export default memo(Application);
