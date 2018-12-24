import React, { SFC } from "react";
import styled from "../../application/theme";

interface ButtonProps {
	variant?: "default" | "primary" | "warning";
	full?: boolean;
	onClick?: () => void;
}

const Button: SFC<ButtonProps> = props => {
	return <StyledButton type="submit" {...props} />;
};

Button.defaultProps = {
	variant: "default",
	full: false,
	onClick: () => {},
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
	outline: 0;
	cursor: pointer;
	font-family: inherit;
	min-width: 180px;
	font-size: 1rem;
	border: 0;
	transition: all 0.3s;
	margin: ${p => p.theme.paddingExtraSmall};
	padding: ${p => p.theme.paddingExtraSmall};
	border-radius: ${p => p.theme.borderRadius};
	width: ${p => (p.full ? "100%" : "auto")};
	${p => getVariant(p)[p.variant!]};
	&:hover {
		opacity: 0.9;
	}
`;

const getVariant = (props: any) => ({
	default: variantStyle("transparent", props.theme.colorText),
	primary: variantStyle(props.theme.colorPrimary, "white"),
	warning: variantStyle(props.theme.colorRed, "white"),
});

function variantStyle(bg: any, color: any) {
	return `
		background: ${bg};
		box-shadow: inset 0 0 0 1px ${color};
		color: ${color};
	`;
}
