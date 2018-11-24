import React, { memo } from "react";
import { Query } from "react-apollo";
import { FIND_PAGE } from "../../graphql/queries";
import styled from "styled-components";
import { Link } from "@reach/router";

function EditPage(props: any) {
  return (
    <Query query={FIND_PAGE} variables={{ slug: props.slug }}>
      {({ data, error, loading }) => {
        if (loading || error || !data || !data.findPage) return null;
        return (
          <div>
            <Link to="/">Back</Link>
            <h2>Edit Page</h2>
            <PageCard>
              <h4>{data.findPage.name}</h4>
              <p>{data.findPage.slug}</p>
            </PageCard>
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

export default memo(EditPage);
