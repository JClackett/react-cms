import React, { SFC, memo, ButtonHTMLAttributes } from "react";
import styled from "../../application/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string | "primary";
	full?: boolean;
}

const Button: SFC<ButtonProps> = props => {
	return <StyledButton type="submit" {...props} />;
};

export default memo(Button);

const StyledButton = styled("button")<{ variant?: string; full?: boolean }>`
	outline: 0;
	cursor: pointer;
	font-family: inherit;
	min-width: 180px;
	font-size: 1rem;
	border: 0;
	${p => p.full && "width: 100%"};
	color: ${p => (p.variant === "primary" ? "#fff" : p.theme.colorText)};
	background-color: ${p =>
		p.variant === "primary" ? p.theme.colorPrimary : "transparent"};
	border-radius: ${p => p.theme.borderRadius};
	border: 1px solid
		${p => (p.variant === "primary" ? p.theme.colorPrimary : p.theme.colorText)};
	padding: ${p => p.theme.paddingExtraSmall};
`;
