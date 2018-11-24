import React, { SFC, memo } from "react";
import { Button as AntButton } from "antd";

const Button: SFC<any> = props => {
  return (
    <AntButton
      onClick={props.onClick}
      type={props.type}
      block
      htmlType="submit"
    >
      {props.text}
    </AntButton>
  );
};

export default memo(Button);
