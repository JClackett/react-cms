import React, { memo, useState } from "react";
import { Query } from "react-apollo";
import { LIST_COLLECTIONS } from "../../graphql/queries";
import { ListCollections } from "../../graphql/types";

import { Card, Button, Icon, Modal } from "antd";
import NewCollection from "./NewCollection";
import { useQuery } from "react-apollo-hooks";

function Collections(_: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const { data, errors } = useQuery(LIST_COLLECTIONS);
  return (
    <div>
      <h2>Collections</h2>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        <Icon type="plus" />
        New
      </Button>
      <div>
        {errors && <p>Oops!</p>}
        {data.listCollections.map(({ id, name }: any) => (
          <Card key={id} title={name} style={{ width: 300 }} />
        ))}
      </div>
      <Modal
        title="New collection"
        visible={modalOpen}
        style={{ top: 20 }}
        onCancel={() => setModalOpen(false)}
      >
        <NewCollection />
      </Modal>
    </div>
  );
}

export default memo(Collections);
