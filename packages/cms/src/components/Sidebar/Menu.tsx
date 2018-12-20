import React, { memo } from "react";
import { Link } from "@reach/router";
import styled from "../../application/theme";

function Menu() {
	return (
		<StyledMenu>
			<StyledLink>
				<Link to="/">Dashboard</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/pages">Pages</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/settings">Site Settings</Link>
			</StyledLink>
		</StyledMenu>
	);
}

export default memo(Menu);

const StyledMenu = styled.div`
	width: 200px;
	display: flex;
	flex-direction: column;
`;

const StyledLink = styled.div`
	padding: ${p => p.theme.paddingSmall};
`;
