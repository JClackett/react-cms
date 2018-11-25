import React, { useState, memo } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { LoginVariables } from "../../graphql/types";
import { Form, Input, Icon } from "antd";

interface UserProps {
  handleLogin: (user: LoginVariables) => void;
}

function LoginForm(props: UserProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !password) return;
    const user = { name, password };
    try {
      await props.handleLogin(user);
    } catch (error) {
      setError(error.graphQLErrors);
      setLoading(false);
    }
  };

  return (
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
  );
}
export default memo(LoginForm);

const StyledForm = styled.div`
  width: 100%;
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
