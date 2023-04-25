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
      <NextHtml lang='en'>
        <NextHead />
        <body>
          <NextMain />
          <NextScript />
        </body>
      </NextHtml>
    )
  }
}
