import React, { memo } from "react";
import { Query } from "react-apollo";
import { LIST_PAGES } from "../../graphql/queries";
import { ListPages } from "../../graphql/types";

import { Card } from "antd";
import { Link } from "@reach/router";

function Home(_: any) {
  return (
    <Query<ListPages> query={LIST_PAGES}>
      {({ data, error, loading }) => {
        if (loading || error || !data || !data.listPages) return null;
        return (
          <div>
            <h2>Home</h2>
            {data.listPages.map(({ slug, name }: any) => (
              <Card key={slug} title={name} style={{ width: 300 }}>
                <Link to={`/${slug}`} key={slug}>
                  <p>{slug}</p>
                </Link>
              </Card>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default memo(Home);
