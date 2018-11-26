import React, { useContext, memo } from "react";
import { AppContext } from "../application/context";
import Login from "../components/Login";

function Auth(props: any) {
  const { user } = useContext(AppContext);
  return user ? props.children : <Login />;
}

export default memo(Auth);
