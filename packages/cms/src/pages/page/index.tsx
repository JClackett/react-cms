import React, { memo, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useQuery, useMutation } from "react-apollo-hooks";
import { ApolloQueryResult } from "apollo-boost";

import styled from "../../application/theme";

import Collections from "./Collections";
import {
	FindPageQuery,
	UpdatePage,
	UpdatePageVariables,
} from "../../graphql/types";
import { FIND_PAGE, UPDATE_PAGE } from "../../graphql/page/queries";

interface PageProps extends RouteComponentProps {
	id?: string;
}
function Page({ id }: PageProps) {
	const { data, errors }: ApolloQueryResult<FindPageQuery> = useQuery(
		FIND_PAGE,
		{
			variables: { id },
		},
	);
	if (errors || !data || !data.page) return null;
	const { page } = data;
	const [name, setName] = useState(page.name);
	const updatePage = useMutation<UpdatePage, UpdatePageVariables>(UPDATE_PAGE);
	return (
		<PageWrapper>
			<PageHeader
				onChange={e => setName(e.target.value)}
				onBlur={() => updatePage({ variables: { id: page.id, name } })}
				value={name}
			/>
			<Collections collections={page.collections} pageId={page.id} />
		</PageWrapper>
	);
}

const PageWrapper = styled.div``;

const PageHeader = styled.input`
	outline: 0;
	font-size: 2rem;
	background-color: transparent;
	border: 1px solid transparent;
	padding: ${p => p.theme.paddingSmall};
	border-radius: ${p => p.theme.borderRadius};
	margin-bottom: ${p => p.theme.paddingSmall};
	&:hover,
	&:focus {
		border: 1px solid #ddd;
	}
`;

export default memo(Page);
