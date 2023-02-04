import type { AppProps } from 'next/app'
import Head from 'next/head'
import {create}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
