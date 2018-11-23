import React, { memo, useContext } from "react";
import { Mutation } from "react-apollo";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { LOGIN, REGISTER, ME } from "../../graphql/queries";
import { AppContext } from "../../application/context";
import {
  LoginVariables,
  Login,
  RegisterVariables,
  Register
} from "../../graphql/types";
import { Redirect } from "@reach/router";

function LoginPage(): any {
  const { user } = useContext(AppContext);
  return !user ? (
    <AuthBoard>
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
    </AuthBoard>
  ) : (
    <Redirect to="/" noThrow />
  );
}

export default LoginPage;

const AuthBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  padding: ${props => props.theme.paddingLarge};
  background-color: ${props => props.theme.colorBoard};
  border-radius: ${props => props.theme.borderRadius};
`;
