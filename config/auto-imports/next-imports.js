module.exports = [
  {
    'next/link': [['default', 'NextLink']],
    'next/image': [['default', 'NextImage']],
    'next/router': ['useRouter', 'withRouter'],
    'next/document': [
      'NextScript',
      ['Document', 'NextDocument'],
      ['Html', 'NextHtml'],
      ['Head', 'NextHead'],
      ['Main', 'NextMain']
    ]
  },
  {
    from: 'next/app',
    imports: [['AppContext', 'NextAppContext'], ['AppProps', 'NextAppProps']],
    type: true
  },
  {
    from: 'next/document',
    imports: [['DocumentContext', 'NextDocumentContext']],
    type: true
  }
]
