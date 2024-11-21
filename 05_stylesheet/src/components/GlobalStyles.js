import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* CSS 순정 코드 */
    * {
        font-family: 'Malgun Gothic', 'NanumGothic';
    }
    body {
        padding: 10px 20px;
        margin: 0;
    }
`;

export default GlobalStyles;