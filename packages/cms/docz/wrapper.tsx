import React from "react";
import { ThemeProvider, theme } from "../src/application/theme";

const Wrapper = ({ children }: any) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Wrapper;
