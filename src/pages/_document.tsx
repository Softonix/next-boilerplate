export default class AppDocument extends Document {
  static async getInitialProps (ctx: NextDocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
        </>
      )
    }
  }

  render () {
    return (
      <NextDocumentHtml lang='en'>
        <NextDocumentHead />
        <body>
          <NextDocumentMain />
          <NextDocumentScript />
        </body>
      </NextDocumentHtml>
    )
  }
}
