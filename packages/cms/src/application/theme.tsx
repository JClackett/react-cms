import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const theme: ThemeInterface = {
	paddingExtraSmall: "5px",
	paddingSmall: "10px",
	paddingMedium: "20px",
	paddingLarge: "40px",
	borderRadius: "4px",
	colorPink: "hotpink",
	colorRed: "tomato",
	colorBackground: "#f5f6fb",
	colorOrange: "coral",
	colorGreen: "mediumseagreen",
	colorBlue: "#3c9aeb",
	colorPrimary: "#3c9aeb",
	colorSecondary: "mediumseagreen",
	colorAccent: "coral",
	colorText: "#485276",
};

// theme.ts
interface ThemeInterface {
	paddingExtraSmall: string;
	paddingSmall: string;
	paddingMedium: string;
	paddingLarge: string;
	borderRadius: string;
	colorPink: string;
	colorRed: string;
	colorBackground: string;
	colorOrange: string;
	colorGreen: string;
	colorBlue: string;
	colorPrimary: string;
	colorSecondary: string;
	colorAccent: string;
	colorText: string;
}

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { theme, css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
