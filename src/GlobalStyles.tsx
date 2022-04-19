import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    :root {
        --color-background: #f3d2c1;
        --color-headline: #001858;
        --color-sub-headline: #172c66;
        --color-card-background: #fef6e4:
        --color-card-heading: #001858;
        --color-card-paragraph: #172c66;

        --color-stroke: #001858;
        --color-main: #f3d2c1;
        --color-highlight: #fef6e4;
        --color-tertiary: #e16162;
        --color-tertiary-hover: #E77862;
    }

    html {
    background-color: var(--color-highlight);
    }

    body {
    margin: auto;
    max-width: 667px;
    min-width: 375px;
    padding: auto;
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
