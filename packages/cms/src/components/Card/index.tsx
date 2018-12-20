import styled from "../../application/theme";

const Card = styled.div`
	padding: ${p => p.theme.paddingSmall};
	background-color: #fff;
	border-radius: ${p => p.theme.borderRadius};
	box-shadow: 1px 1px 7px 0px rgba(100, 100, 100, 0.2);
`;

export default Card;
