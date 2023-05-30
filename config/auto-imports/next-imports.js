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
    'next-auth/react': ['useSession', 'getProviders', 'signIn', 'signOut'],
    'next-auth/next': ['getServerSession'],

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
    from: 'next',
    imports: [['default', 'NextPage'], 'GetServerSidePropsContext', 'InferGetServerSidePropsType'],
    type: true
  },
  {
    from: 'next/document',
    imports: [['DocumentContext', 'NextDocumentContext']],
    type: true
  }

]
