import React, { memo } from "react";
import { Query } from "react-apollo";
import { LIST_PAGES } from "../../graphql/queries";
import { Card } from "antd";
import { Link } from "@reach/router";

function SiteSettings(_: any) {
  return (
    <Query query={LIST_PAGES}>
      {({ data, error, loading }) => {
        if (loading || error || !data || !data.listPages) return null;
        return (
          <div>
            <h2>Site settings</h2>
            {data.listPages.map((page: any) => (
              <Card key={page.slug} title={page.name} style={{ width: 300 }}>
                <Link to={`/${page.slug}`} key={page.slug}>
                  <p>{page.slug}</p>
                </Link>
              </Card>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default memo(SiteSettings);
