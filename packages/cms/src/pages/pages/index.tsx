import React, { memo } from "react";
import { Query } from "react-apollo";

import { Card } from "antd";
import { Link } from "@reach/router";
import { useQuery } from "react-apollo-hooks";

import { FindPagesQuery, FindPagesQuery_pages } from "../../graphql/types";
import { FIND_PAGES } from "../../graphql/page/queries";
import { ApolloQueryResult } from "apollo-boost";

function Pages({  }: { path: string }) {
  const { data, errors }: ApolloQueryResult<FindPagesQuery> = useQuery(
    FIND_PAGES
  );
  if (errors || !data.pages) return null;
  const { pages } = data;
  return (
    <div>
      <h2>Pages</h2>
      {pages &&
        pages.map((page: FindPagesQuery_pages | null) => (
          <Card key={page!.slug} title={name} style={{ width: 300 }}>
            <Link to={page!.slug} key={page!.slug}>
              <p>{page!.slug}</p>
            </Link>
          </Card>
        ))}
    </div>
  );
}

export default memo(Pages);
