module.exports = [
  {
    'next/link': [['default', 'NextLink']],
    'next/image': [['default', 'NextImage']],
    'next/script': [['default', 'NextScript']],
    'next/head': [['default', 'NextHead']],
    'next/router': ['useRouter', 'withRouter']
  },
  {
    from: 'next/app',
    imports: [['AppContext', 'NextAppContext'], ['AppProps', 'NextAppProps']],
    type: true
  }
]
