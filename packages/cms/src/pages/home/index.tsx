import React, { memo } from "react";
import { Query } from "react-apollo";
import { LIST_PAGES } from "../../graphql/queries";
import styled from "styled-components";
import { Link } from "@reach/router";

function Home(): any {
  return (
    <Query query={LIST_PAGES}>
      {({ data, error, loading }) => {
        if (loading || error || !data || !data.listPages) return null;
        return (
          <div>
            <h2>Home</h2>
            {data.listPages.map((page: any) => (
              <Link to={`/${page.slug}`}>
                <PageCard key={page.slug}>
                  <h4>{page.name}</h4>
                  <p>{page.slug}</p>
                </PageCard>
              </Link>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

const PageCard = styled.div`
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  margin: 40px;
`;

export default Home;
