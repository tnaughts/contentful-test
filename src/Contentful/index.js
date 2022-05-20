const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
  space: 'nu3qzhcv2o1c', // defaults to 'master' if not set
  accessToken: 'Rp8LtIb1jSKLd5jq9mvgoD_4VWHao4iMZSKApcmRhOE'
})