import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  
}
`
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
