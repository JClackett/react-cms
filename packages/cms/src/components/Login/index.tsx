import React, { memo, useState } from "react";
import { useMutation } from "react-apollo-hooks";
import styled from "../../application/theme";
import Button from "../../components/Button";
import { LOGIN, ME } from "../../graphql/user/queries";
import { Login } from "../../graphql/types";

function LoginForm(): any {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState([]);

	const login = useMutation(LOGIN, {
		update: (cache, { data }) => {
			const { login } = data as Login;
			cache.writeQuery({
				query: ME,
				data: { me: login },
			});
		},
	});

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);
		const user = { name, password };
		try {
			await login({ variables: { ...user } });
		} catch (error) {
			setError(error.graphQLErrors);
			setLoading(false);
		}
	};

	return (
		<LoginWrapper>
			<Form onSubmit={handleSubmit}>
				<Header>Login</Header>
				<Input
					name="name"
					type="text"
					placeholder="Name"
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
					placeholder="Password"
					value={password}
					onChange={e => {
						e.preventDefault();
						setPassword(e.target.value);
					}}
				/>
				<Spacer />
				<Button full variant="primary">
					{loading ? "Loading..." : "Submit"}
				</Button>
				{error &&
					error.map(({ message }: any, i: number) => (
						<Error key={i}>{message}</Error>
					))}
			</Form>
		</LoginWrapper>
	);
}

export default memo(LoginForm);

const LoginWrapper = styled.div`
	background-color: ${p => p.theme.colorBackground};
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
	outline: 0;
`;

const Form = styled.form`
	width: 100%;
	background-color: #fff;
	padding: ${props => props.theme.paddingMedium};
	border-radius: ${p => p.theme.borderRadius};
	max-width: 400px;
`;

const Input = styled.input`
	margin: 0;
	padding: 0;
	outline: none;
	position: relative;
	width: 100%;
	font-family: inherit;
	font-size: 1rem;
	border: 1px solid #ccc;
	transition: all 0.3s;
	padding: ${p => p.theme.paddingSmall};
	border-radius: ${p => p.theme.borderRadius};
	&:focus {
		border: 1px solid ${p => p.theme.colorBlue};
	}
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
	margin-bottom: 0;
`;
