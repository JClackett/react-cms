import React, { memo, useContext } from "react";
import { AppContext } from "../../application/context";
import { navigate } from "@reach/router";
import { useMutation } from "react-apollo-hooks";
import styled from "styled-components";

import Button from "../Button";
import { LOGOUT } from "../../graphql/queries";
import Menu from "./Menu";
import Sider from "antd/lib/layout/Sider";

function Sidebar() {
  const context = useContext(AppContext);
  const logout = useMutation(LOGOUT);

  return (
    <StyledSidebar>
      <Menu />
      {context.user && (
        <Button
          onClick={() =>
            logout().then(() => {
              navigate("/");
              context.handleLogout();
            })
          }
          text="logout"
        />
      )}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 10px;
  height: 100vh;
`;

export default memo(Sidebar);
