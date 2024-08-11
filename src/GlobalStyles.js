import { createGlobalStyle } from "styled-components";
import modernNormalize from "modern-normalize";
import Gilroy600 from "./Fonts/Gilroy-Semibold.woff2";
import Gilroy400 from "./Fonts/Gilroy-Regular.woff2";
import Gilroy500 from "./Fonts/Gilroy-Medium.woff2";
import Gilroy700 from "./Fonts/Gilroy-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
font-family: "Gilroy";
      src: url(${Gilroy400}), url(${Gilroy500}), url(${Gilroy600}), url(${Gilroy700});
    }

    body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Gilroy", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
}
${modernNormalize}
code {
 font-family: "Gilroy", sans-serif;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
    display: block;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input {
    
    border-radius: 0;
}
a,
button {
    cursor: pointer;
}
`;
