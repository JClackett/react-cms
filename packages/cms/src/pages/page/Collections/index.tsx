import React, { memo, useState } from "react";
import { Button, Icon, Modal, Row } from "antd";
import { FindPageQuery_page_collections } from "../../../graphql/types";

import NewCollection from "./NewCollection";
import Collection from "./Collection";

function Collections({
  collections,
  pageId
}: {
  collections: (FindPageQuery_page_collections | null)[] | null;
  pageId: string;
}) {
  const [newModalOpen, setNewModalOpen] = useState(false);
  return (
    <div>
      <Row type="flex" justify="space-between">
        <h2>Collections</h2>
        <Button type="primary" onClick={() => setNewModalOpen(true)}>
          <Icon type="plus" />
          New
        </Button>
      </Row>
      <Row type="flex" justify="start" gutter={24}>
        {collections &&
          collections.map(
            (collection: FindPageQuery_page_collections | null) => (
              <Collection key={collection!.id} collection={collection!} />
            )
          )}
      </Row>
      <Modal
        title="New collection"
        visible={newModalOpen}
        style={{ top: 20 }}
        onCancel={() => setNewModalOpen(false)}
      >
        <NewCollection pageId={pageId} />
      </Modal>
    </div>
  );
}

export default memo(Collections);
