import React from "react";
import { fireEvent } from "react-testing-library";
import LoginForm from "../LoginForm";
import { render } from "../../../test-utils";

test("should submit login with name and password", () => {
	const handleSubmit = jest.fn();
	const { getByText, getByPlaceholderText } = render(
		<LoginForm handleLogin={handleSubmit} handleRegister={handleSubmit} />,
	);

	const name = getByPlaceholderText("name");
	fireEvent.change(name, { target: { value: "Jack" } });
	const password = getByPlaceholderText("password");
	fireEvent.change(password, { target: { value: "gobble" } });

	getByText("submit").click();

	expect(handleSubmit).toHaveBeenCalledTimes(1);
	expect(handleSubmit).toHaveBeenCalledWith({
		name: "Jack",
		password: "gobble",
	});
});
