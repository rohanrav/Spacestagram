import { createGlobalStyle } from "styled-components";
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: ${Theme.font.default};
        height: 100%;
        min-height: 100%;
    }

    div {
        margin: 0;
        padding: 0;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
