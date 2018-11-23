import React, { useContext } from "react";
import { AppContext } from "../application/context";
import { navigate } from "@reach/router";
import { Mutation } from "react-apollo";

import Button from "./Button";
import { LOGOUT } from "../graphql/queries";

function Sidebar() {
  const context = useContext(AppContext);
  return (
    <div>
      {context.user && (
        <Mutation mutation={LOGOUT} onCompleted={context.handleLogout}>
          {logout => (
            <Button
              onClick={() => logout().then(() => navigate("/"))}
              text="logout"
            />
          )}
        </Mutation>
      )}
    </div>
  );
}

export default Sidebar;
