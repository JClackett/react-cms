import React, { memo } from "react";
import { Menu as AntMenu, Icon } from "antd";

function Menu() {
  return (
    <AntMenu mode="inline" style={{ width: 200, border: 0 }}>
      <AntMenu.Item key="newPage">
        <Icon type="copy" />
        Pages
      </AntMenu.Item>

      <AntMenu.Item key="collections">
        <Icon type="appstore" />
        Collections
      </AntMenu.Item>

      <AntMenu.Item key="siteSettings">
        <Icon type="setting" />
        Site Settings
      </AntMenu.Item>
    </AntMenu>
  );
}

export default memo(Menu);
