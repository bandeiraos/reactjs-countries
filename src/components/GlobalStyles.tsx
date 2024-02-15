import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: ${(props) => props.theme.background};
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyle;