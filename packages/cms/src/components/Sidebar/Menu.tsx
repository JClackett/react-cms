import React, { memo } from "react";
import { Menu as AntMenu, Icon } from "antd";
import { Link } from "@reach/router";

function Menu() {
  return (
    <AntMenu mode="inline" style={{ width: 200, border: 0 }}>
      <AntMenu.Item key="pages">
        <Link to="/pages">
          <Icon type="copy" />
          Pages
        </Link>
      </AntMenu.Item>

      <AntMenu.Item key="collections">
        <Link to="/collections">
          <Icon type="appstore" />
          Collections
        </Link>
      </AntMenu.Item>

      <AntMenu.Item key="settings">
        <Link to="/settings">
          <Icon type="setting" />
          Site Settings
        </Link>
      </AntMenu.Item>
    </AntMenu>
  );
}

export default memo(Menu);
