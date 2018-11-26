import React, { memo, useState } from "react";
import { useMutation } from "react-apollo-hooks";
import styled from "styled-components";
import { Card } from "antd";
import { UPDATE_BLOCK } from "../../../graphql/block/queries";
import { FindPageQuery_page_collections_blocks } from "../../../graphql/types";

function Block({ block }: { block: FindPageQuery_page_collections_blocks }) {
  const [content, setContent] = useState(block.content);
  const updateBlock = useMutation(UPDATE_BLOCK);
  return (
    <Card bodyStyle={{ padding: "5px 10px" }}>
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
  font-size: 0.8rem;
  font-weight: bold;
  color: #444;
  font-variant: small-caps;
  margin: 0;
  padding: 0 10px;
`;

const BlockContent = styled.input`
  padding: 10px;
  outline: 0;
  border: 0;
`;
export default memo(Block);
