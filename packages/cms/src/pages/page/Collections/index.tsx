import React, { memo, useState } from "react";
import { FindPageQuery_page_collections } from "../../../graphql/types";

import NewCollection from "./NewCollection";
import Collection from "./Collection";
import Button from "../../../components/Button";
import Grid from "../../../components/Grid";
import styled from "../../../application/theme";

function Collections({
	collections,
	pageId,
}: {
	collections: (FindPageQuery_page_collections | null)[] | null;
	pageId: string;
}) {
	const [newModalOpen, setNewModalOpen] = useState(false);
	return (
		<CollectionsWrapper>
			<CollectionsHeader>
				<h2>Collections</h2>
				<Button variant="primary" onClick={() => setNewModalOpen(true)}>
					New
				</Button>
			</CollectionsHeader>
			<Grid>
				{collections &&
					collections.map(
						(collection: FindPageQuery_page_collections | null) => {
							if (!collection) return null;
							return <Collection key={collection.id} collection={collection} />;
						},
					)}
			</Grid>
			{/* <Modal
				title="New collection"
				visible={newModalOpen}
				style={{ top: 20 }}
				onCancel={() => setNewModalOpen(false)}
			>
				<NewCollection pageId={pageId} />
			</Modal> */}
		</CollectionsWrapper>
	);
}

const CollectionsWrapper = styled.div``;
const CollectionsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default memo(Collections);
