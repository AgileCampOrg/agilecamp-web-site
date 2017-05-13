module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'AgileCamp 2017',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'AgileCamp 2017 Home' },
      { 'http-equiv': 'Content-Language', content: 'end' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'agilecamp-bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.min.js',
        integrity: 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=',
        crossorigin: 'anonymous'
      },
      { src: 'https://use.fontawesome.com/a6ba001ef0.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js' },
      { src: 'agilecamp-bootstrap/dist/js/bootstrap.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
