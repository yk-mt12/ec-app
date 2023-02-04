import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

export default function Document() {
  static async getInitialProps(
    ctx: DocumentContext,
  ) : Promise<DocumentInitialProps> {
    const sheet = new 
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
