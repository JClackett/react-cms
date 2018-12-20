import React, { memo, useState } from "react";
import { useMutation } from "react-apollo-hooks";

import Block from "./Block";

import {
	FindPageQuery_page_collections,
	UpdateCollectionVariables,
	DeleteCollectionVariables,
	UpdateCollection,
	DeleteCollection,
	FindPageQuery_page_collections_blocks,
} from "../../../graphql/types";

import {
	UPDATE_COLLECTION,
	DELETE_COLLECTION,
} from "../../../graphql/collection/queries";
import styled from "../../../application/theme";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

function Collection({
	collection,
}: {
	collection: FindPageQuery_page_collections;
}) {
	const [name, setName] = useState(collection.name);
	const updateCollection = useMutation<
		UpdateCollection,
		UpdateCollectionVariables
	>(UPDATE_COLLECTION);
	const deleteCollection = useMutation<
		DeleteCollection,
		DeleteCollectionVariables
	>(DELETE_COLLECTION);

	return (
		<Card>
			<CollectionName
				onChange={e => setName(e.target.value)}
				onBlur={() =>
					updateCollection({ variables: { id: collection.id, name } })
				}
				value={name}
			/>
			{collection.blocks &&
				collection.blocks.map(
					(block: FindPageQuery_page_collections_blocks | null) => {
						if (!block) return null;
						return <Block key={block.id} block={block} />;
					},
				)}

			<Divider />

			<Button variant="primary">add</Button>
			<Button>delete</Button>
		</Card>
	);
}

const Divider = styled.div`
	margin: ${p => p.theme.paddingSmall};
`;

const CollectionName = styled.input`
	outline: 0;
	font-size: 1rem;
	width: 100%;
	border: 1px solid #fff;
	padding: ${p => p.theme.paddingSmall};
	border-radius: ${p => p.theme.borderRadius};
	margin-bottom: ${p => p.theme.paddingSmall};
	&:hover,
	&:focus {
		border: 1px solid #eee;
	}
`;

export default memo(Collection);
