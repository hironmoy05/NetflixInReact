import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        --webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #000;
        color: #333;
        font-size: 1rem;
    }
`;
