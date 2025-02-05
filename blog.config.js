module.exports = {
  title: 'tonari blog',
  // The main URL (not the blog, ex. your company's homepage)
  mainUrl: 'https://tonari-notion-blog-demo.web.app',

  // The base URL of the blog itself
  baseUrl: 'https://tonari-notion-blog-demo.web.app',

  // The base URL of your GoatCounter instance, ex. 'https://counter.mydomain.com'
  goatCounterUrl: '',

  // The footer/copyright statement
  footer: 'Ⓐ 2021 who cares',

  // The main blog's Open Graph image. These must me fully qualified URLs, ex. 'https://mydomain.com/og_image.jpg'
  ogImage: '',

  // A twitter handle to associate with the blog, ex. '@everybodycaresaboutme'
  ogTwitter: '',

  // The notion ID of the database containing the blog posts. (currente example is the public template)
  databaseId: 'df1356585a374f87b04263dfeb17bd4c',

  // Set specific text colors for each author.
  // Author names are their "sluggified" selves (lowercased, with spaces as '-')
  // ex. '{ "jake-mcginty": "#ff0000" }'
  authorColors: {},

  // Used when a user account is disabled/missing to override the name.
  // The key is the user's UUID, and the value is their desired display name.
  // ex. '{ "1d6bfff-ffff-ffff-ffff-ffffffffffff": "Jake McGinty" }
  authorNameOverrides: {},
}
