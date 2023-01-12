import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export const GlobalStyle = createGlobalStyle`
    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        min-height: 100vh;
        scroll-behavior: smooth;
        background-color: white;
        font-family: "Poppins" sans-serif;
    }

    *::-webkit-scrollbar {
        width: 12px;
        background-color: ${rgba(81, 111, 119, 0.101961)};
        border-radius: 4px;
    }
    *::-webkit-scrollbar-thumb {
        border: 2px solid transparent;
        background-color: #9CA6AD;
        border-radius: 20px;
        background-clip: content-box;
    }
`;
