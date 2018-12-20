import React, { memo, useState } from "react";
import { useMutation } from "react-apollo-hooks";

import { UPDATE_BLOCK } from "../../../graphql/block/queries";
import { FindPageQuery_page_collections_blocks } from "../../../graphql/types";
import Card from "../../../components/Card";
import styled from "../../../application/theme";

function Block({ block }: { block: FindPageQuery_page_collections_blocks }) {
	const [content, setContent] = useState(block.content);
	const updateBlock = useMutation(UPDATE_BLOCK);
	return (
		<Card>
			<BlockLabel>{block.type}</BlockLabel>
			<BlockContent
				onChange={e => setContent(e.target.value)}
				onBlur={() => updateBlock({ variables: { id: block.id, content } })}
				value={content!}
			/>
		</Card>
	);
}

const BlockLabel = styled.p`
	font-size: 1rem;
	font-weight: bold;
	color: #888;
	font-variant: small-caps;
	margin: 0;
	padding: 0 10px;
`;

const BlockContent = styled.input`
	padding: 10px;
	width: 100%;
	outline: 0;
	border: 1px solid #fff;
	border-radius: ${p => p.theme.borderRadius};
	&:hover,
	&:focus {
		border: 1px solid #eee;
	}
`;
export default memo(Block);
