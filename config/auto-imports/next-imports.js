module.exports = [
  {
    'next/link': [['default', 'NextLink']],
    'next/image': [['default', 'NextImage']],
    'next/router': ['useRouter', 'withRouter'],
    'next/document': [
      ['NextScript', 'NextDocumentScript'],
      ['Html', 'NextDocumentHtml'],
      ['Document', 'NextDocument'],
      ['Html', 'NextDocumentHtml'],
      ['Head', 'NextDocumentHead'],
      ['Main', 'NextDocumentMain']
    ],
    'next/head': [
      ['default', 'NextHead']
    ],
    'next/script': [
      ['default', 'NextScript']
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
