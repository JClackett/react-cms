import React, { memo } from "react";
import { Link } from "@reach/router";
import { Query } from "react-apollo";

import Collections from "./Collections";
import { FindPageQuery, FindPageQueryVariables } from "../../graphql/types";
import { FIND_PAGE } from "../../graphql/page/queries";

function Page({ slug }: { slug?: string; path: string }) {
  return (
    <Query<FindPageQuery, FindPageQueryVariables>
      query={FIND_PAGE}
      variables={{ slug: slug! }}
    >
      {({ data, error }) => {
        if (error || !data || !data.page) return <div>ooops</div>;
        const { page } = data;
        return (
          <div>
            <Link to="/">Back</Link>
            <h2>{page.name}</h2>
            <Collections collections={page.collections} pageId={page.id} />
          </div>
        );
      }}
    </Query>
  );
}

export default memo(Page);
