import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps, DocumentInitialProps, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {
  static async getInitialProps(
    ctx: DocumentContext,
  ) : Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => {
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

        const initialProps = await Document.getInitialProps(ctx)

        return {
          ...initialProps,
          styles: [
            <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            </>,
          ],
        }
      } finally {
        sheet.seal()
      }
    }
  }
}
function getInitialProps(ctx: any, DocumentContext: any) {
  throw new Error('Function not implemented.')
}

