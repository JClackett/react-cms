import React, { SFC, memo } from "react";
import { Button as AntButton } from "antd";

const Button: SFC<any> = props => {
  return (
    <AntButton {...props} block htmlType="submit">
      {props.text}
    </AntButton>
  );
};

export default memo(Button);
