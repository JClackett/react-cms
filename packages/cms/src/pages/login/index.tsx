import React, { memo } from "react";
import { Mutation } from "react-apollo";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { LOGIN, ME } from "../../graphql/queries";
import { LoginVariables, Login } from "../../graphql/types";

function LoginPage(): any {
  return (
    <StyledLogin>
      <Mutation<Login, LoginVariables>
        mutation={LOGIN}
        update={(cache, { data }) => {
          cache.writeQuery({
            query: ME,
            data: { me: data!.login }
          });
        }}
      >
        {login => (
          <LoginForm
            handleLogin={(user: any) => login({ variables: { ...user } })}
          />
        )}
      </Mutation>
    </StyledLogin>
  );
}

export default memo(LoginPage);

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  outline: 0;
`;
