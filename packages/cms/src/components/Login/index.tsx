import React, { memo, useState } from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import { Form, Input, Icon } from "antd";

import Button from "../../components/Button";
import { LOGIN, ME } from "../../graphql/user/queries";

function LoginPage(): any {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const login = useMutation(LOGIN, {
    update: (cache, { data }) => {
      cache.writeQuery({
        query: ME,
        data: { me: data!.login }
      });
    }
  });

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !password) return;
    const user = { name, password };
    try {
      await login({ variables: { ...user } });
    } catch (error) {
      setError(error.graphQLErrors);
      setLoading(false);
    }
  };

  return (
    <StyledLogin>
      <StyledForm>
        <Header>Login</Header>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Name"
            size="large"
            value={name}
            style={{ height: "auto" }}
            onChange={e => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <Spacer />
          <Input
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
            size="large"
            value={password}
            onChange={e => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <Spacer />
          <Button text="Submit" type="primary" size="large" loading={loading} />
          {error &&
            error.map(({ message }: any, i: number) => (
              <Error key={i}>{message}</Error>
            ))}
        </Form>
      </StyledForm>
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
  padding-bottom: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  outline: 0;
`;

const StyledForm = styled.div`
  width: 100%;
  padding: ${props => props.theme.paddingSmall};
  max-width: 400px;
`;

const Header = styled.h2`
  margin-top: 0;
`;

const Spacer = styled.div`
  margin: ${props => props.theme.paddingMedium};
`;

const Error = styled.p`
  width: 100%;
  color: ${props => props.theme.colorAccent};
`;
