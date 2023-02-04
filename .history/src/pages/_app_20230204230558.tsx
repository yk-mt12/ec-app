import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
