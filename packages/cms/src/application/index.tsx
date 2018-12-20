import React, { memo, Suspense } from "react";
import { Router } from "@reach/router";
import styled, { ThemeProvider } from "./theme";
import { useApolloClient, useQuery } from "react-apollo-hooks";
import { theme } from "./theme";
import { AppContext } from "./context";

import { ME } from "../graphql/user/queries";

import Home from "../pages/home";
import Page from "../pages/page";
import Pages from "../pages/pages";
import SiteSettings from "../pages/siteSettings";

import Sidebar from "../components/Sidebar";
import Auth from "../components/Auth";
import Spinner from "../components/Spinner";

function Application() {
	const client = useApolloClient();
	const {
		data: { me },
		errors,
		loading,
	} = useQuery(ME, { suspend: false });
	const handleLogout = () => {
		client!.resetStore();
	};
	if (loading)
		return (
			<LoadingScreen>
				<Spinner>loading...</Spinner>
			</LoadingScreen>
		);
	if (errors) return <p>oops, error</p>;
	return (
		<AppContext.Provider
			value={{
				user: me,
				handleLogout,
			}}
		>
			<ThemeProvider theme={theme}>
				<Auth>
					<Wrapper>
						<Sidebar />
						<Content>
							<Suspense fallback={<p>loading</p>}>
								<Router>
									<Home path="/" />
									<Pages path="/pages" />
									<Page path="/pages/:id" />
									<SiteSettings path="/settings" />
								</Router>
							</Suspense>
						</Content>
					</Wrapper>
				</Auth>
			</ThemeProvider>
		</AppContext.Provider>
	);
}

export default memo(Application);

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
`;

const Content = styled.div`
	height: 100vh;
	width: 100%;
	padding: ${p => p.theme.paddingMedium};
	background-color: ${p => p.theme.colorBackground};
`;
const LoadingScreen = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;
