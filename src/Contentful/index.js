const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
  space: '8gp2519ce6g7', // defaults to 'master' if not set
  accessToken: 'kvm2VUGHVBBgpcJVWrcwihRoHfLLXEKtHs4XbmhOlZs'
})