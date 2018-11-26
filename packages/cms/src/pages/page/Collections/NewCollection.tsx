import React, { memo, useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { Input } from "antd";
import { CREATE_COLLECTION } from "../../../graphql/collection/queries";
import {
  CreateCollectionVariables,
  CreateCollection
} from "../../../graphql/types";

function NewCollection({ pageId }: { pageId: string }) {
  const [name, setName] = useState("");
  const createCollection = useMutation<
    CreateCollection,
    CreateCollectionVariables
  >(CREATE_COLLECTION);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createCollection({ variables: { page: pageId, name } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        placeholder="Name"
        size="large"
        value={name}
        onChange={e => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />
    </form>
  );
}

export default memo(NewCollection);
