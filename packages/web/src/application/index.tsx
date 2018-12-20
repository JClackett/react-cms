import React, { memo, Suspense } from "react";
import { useQuery } from "react-apollo-hooks";
import { Router, RouteComponentProps } from "@reach/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

import { FIND_PAGES } from "../graphql/page/queries";
import { FindPagesQuery, FindPagesQuery_pages } from "../graphql/types";
import { ApolloQueryResult } from "apollo-boost";

function Application() {
	const {
		data: { pages },
		errors,
		loading,
	}: ApolloQueryResult<FindPagesQuery> = useQuery(FIND_PAGES, {
		suspend: false,
	});
	if (loading) return <p>loading...</p>;
	if (errors || !pages) return <p>oops, error</p>;
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={"loading"}>
				<Router>
					{pages.map((page: FindPagesQuery_pages | null) => {
						if (!page) return null;
						return <Page key={page.id} path={page.slug} page={page} />;
					})}
				</Router>
			</Suspense>
		</ThemeProvider>
	);
}

interface PageProps extends RouteComponentProps {
	page: FindPagesQuery_pages;
}
function Page(props: PageProps) {
	return <div>{props.page.name}</div>;
}

export default memo(Application);
