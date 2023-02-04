import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0,
  margin: 0,
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Robot, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-selif;
}

* {
  box-sizing: border-box;
}

a {
  cursor: pointer;
  text-decoration: none;
  transion: .25s;
}

`;
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
