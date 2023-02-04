import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {
  static async getInitialProps(
    ctx: DocumentContext,
  ) : Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originRenderPage = ctx.renderPage

    try {
      ctx.
    }
  }
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
