import React, { memo, useContext } from "react";
import { AppContext } from "../../application/context";
import { navigate } from "@reach/router";
import { useMutation } from "react-apollo-hooks";

import styled from "../../application/theme";
import Button from "../Button";
import Menu from "./Menu";
import { LOGOUT } from "../../graphql/user/queries";

function Sidebar() {
	const context = useContext(AppContext);
	const logout = useMutation(LOGOUT);

	return (
		<StyledSidebar>
			<Menu />
			{context.user && (
				<Button
					onClick={() =>
						logout().then(() => {
							navigate("/");
							context.handleLogout();
						})
					}
				>
					Logout
				</Button>
			)}
		</StyledSidebar>
	);
}

const StyledSidebar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding: 40px 10px;
	height: 100vh;
	z-index: 1;
`;

export default memo(Sidebar);
