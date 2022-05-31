import { createGlobalStyle } from 'styled-components';

const GlobalStyles =  createGlobalStyle`
   *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-family: 'Lato';
    }

    body {
        font-size: 1.6rem;
        max-width: 1920px;
        margin: 0 auto;
        background-color: #333533;
        color: '#e8eddf';
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        outline: none;
        cursor: pointer;
    }
`

export default GlobalStyles;
