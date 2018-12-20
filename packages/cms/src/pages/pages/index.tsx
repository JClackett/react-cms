import React, { memo } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { useQuery } from "react-apollo-hooks";

import styled from "../../application/theme";
import { FindPagesQuery, FindPagesQuery_pages } from "../../graphql/types";
import { FIND_PAGES } from "../../graphql/page/queries";
import { ApolloQueryResult } from "apollo-boost";

import Grid from "../../components/Grid";
import Card from "../../components/Card";

function Pages() {
	const { data, errors }: ApolloQueryResult<FindPagesQuery> = useQuery(
		FIND_PAGES,
		{
			fetchPolicy: "cache-and-network",
			suspend: false,
		},
	);
	if (errors || !data || !data.pages) return null;
	return (
		<Wrapper>
			<h2>Pages</h2>
			<Grid>
				{data.pages.map((page: FindPagesQuery_pages | null) => {
					if (!page) return null;
					return (
						<Link to={page.id} key={page.id}>
							<Card>
								<PageName>{page.name}</PageName>
								<p>{page.slug}</p>
							</Card>
						</Link>
					);
				})}
			</Grid>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
`;

const PageName = styled.h4`
	margin: 0;
	color: ${p => p.theme.colorPrimary};
`;

export default memo<RouteComponentProps>(Pages);
