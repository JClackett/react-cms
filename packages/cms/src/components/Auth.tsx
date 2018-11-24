import React, { useContext, memo } from "react";
import { AppContext } from "../application/context";
import LoginPage from "../pages/login";

function Auth(props: any) {
  const { user } = useContext(AppContext);
  return user ? props.children : <LoginPage />;
}

export default memo(Auth);
