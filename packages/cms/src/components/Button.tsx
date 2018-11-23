import React, { SFC } from "react";
import styled from "styled-components";

const Button: SFC<any> = props => {
  return (
    <StyledButton
      type="submit"
      primary={props.primary}
      onClick={props.onClick}
      {...props}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled<any>("button")`
  outline: 0;
  cursor: pointer;
  font-family: inherit;
  min-width: 180px;
  font-size: 1.2rem;
  border: 0;
  color: ${props =>
    props.primary ? props.theme.colorBackground : props.theme.colorPrimary};
  background-color: ${props =>
    props.primary ? props.theme.colorPrimary : "transparent"};
  border: 2px solid ${props => props.theme.colorPrimary};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.paddingSmall};
`;
