import React, { memo, useState } from "react";
import { Col, Card, Button, Icon, Divider, Row, Popconfirm } from "antd";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";

import Block from "./Block";

import {
  FindPageQuery_page_collections,
  UpdateCollectionVariables,
  DeleteCollectionVariables,
  UpdateCollection,
  DeleteCollection
} from "../../../graphql/types";
import { FIND_PAGE } from "../../../graphql/page/queries";

import {
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from "../../../graphql/collection/queries";

function Collection({
  collection
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
    <Col
      xs={{
        span: 12
      }}
      md={{
        span: 8
      }}
    >
      <Card
        title={
          <CollectionName
            onChange={e => setName(e.target.value)}
            onBlur={() =>
              updateCollection({ variables: { id: collection.id, name } })
            }
            value={name}
          />
        }
      >
        {collection.blocks &&
          collection.blocks.map((block: any) => (
            <Block key={block.id} block={block} />
          ))}

        <Divider />
        <Row type="flex" justify="space-between">
          <Button type="primary" ghost>
            <Icon type="plus" />
          </Button>
          <Popconfirm
            title="Are you sure delete this collection?"
            onConfirm={() =>
              deleteCollection({ variables: { id: collection.id } })
            }
            okText="Yes"
            cancelText="No"
          >
            <a href="#">
              <Button type="danger" ghost>
                <Icon type="delete" />
              </Button>
            </a>
          </Popconfirm>
        </Row>
      </Card>
    </Col>
  );
}

const CollectionName = styled.input`
  outline: 0;
  border: 0;
`;

export default memo(Collection);
