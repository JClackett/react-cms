import React, { useState, memo } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { LoginVariables } from "../../graphql/types";
import { Form } from "antd";

interface UserProps {
  handleLogin: (user: LoginVariables) => void;
}

function LoginForm(props: UserProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !password) return;
    const user = { name, password };
    try {
      await props.handleLogin(user);
    } catch (error) {
      setError(error.graphQLErrors);
    }
  };

  return (
    <StyledForm>
      <Header>Login</Header>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={e => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <Seperator />
        <Button text="submit" type="primary" />
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

const Seperator = styled.div`
  margin: ${props => props.theme.paddingMedium};
`;

const Input = styled.input`
  width: 100%;
  margin: 0;
  font-family: inherit;
  outline: none;
  font-size: 1rem;
  border: 2px solid black;
  margin-bottom: ${props => props.theme.paddingMedium};
  background-color: ${props => props.theme.colorBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.paddingMedium};

  &::placeholder {
    font-size: 1rem;
  }
`;

const Error = styled.p`
  width: 100%;
  color: ${props => props.theme.colorAccent};
`;
