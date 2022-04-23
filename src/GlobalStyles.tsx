import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    :root {
        --color-background: #fffffe;
        --color-headline: #0f0e17;
        --color-sub-headline: #2e2f3e;
        --color-card-background: #0f0e17;
        --color-card-heading: #fffffe;
        --color-card-paragraph: #a7a9be;

        --color-stroke: black;
        --color-main: #fffffe;
        --color-highlight: #ff8906;
        --color-secondary: #f25f4c;
        --color-tertiary: #e53170;

        --button-background: black;
        --button-text: #fffffe;
        --button-stroke: #2e2f3e;
    }

    html {
    background-color: var(--color-stroke);
    }

    body {
    margin: auto;
    max-width: 667px;
    min-width: 375px;
    height: 100vh;
    text-align: center;
    background-color: var(--color-background);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyles;
