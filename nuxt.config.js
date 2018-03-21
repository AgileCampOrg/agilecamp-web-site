const TITLE = 'AgileCamp 2018'
const DESCRIPTION = 'AgileCamp is the industry’s leading Agile and Lean Practices conference! Attend an upcoming AgileCamp now to take your Agile and Lean practices to the next level. Learn about the tools and techniques from experienced Agile coaches and watch your team succeed.'

module.exports = {
  build: {
    // Run eslint on save
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    { src: '~assets/css/global.scss', lang: 'scss' }
  ],

  env: {
    emailLink: 'mailto:info@agilecamp.org',
    facebookLink: 'https://www.facebook.com/agilecamp',
    googleMapsAPIKey: 'AIzaSyApfHZKwYHZTcBtbXf-DHB5nVUBrC5H59I',
    googlePlusLink: 'https://plus.google.com/114873923413909280996/about',
    twitterLink: 'https://twitter.com/goagilecamp',
    twitterScreenName: 'GoAgileCamp',
    woopraProjectKey: process.env.WOOPRA_PROJECT_KEY || 'dev.agilecamp.org'
  },

  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: DESCRIPTION },
      { 'http-equiv': 'Content-Language', content: 'end' },

      // Generated by http://www.favicomatic.com
      { name: 'application-name', content: 'AgileCamp' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: '/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/mstile-310x310.png' },

      // Open Graph Protocol (Facebook and LinkedIn)
      // https://developers.facebook.com/tools/debug/og/object/?q=http%3A%2F%2Fagilecamp.org%2F
      // https://www.linkedin.com/help/linkedin/answer/46687?query=open%20graph
      // { property: 'og:description', content: DESCRIPTION },
      // { property: 'og:image', content: 'http://agilecamp.org/AgileCamp_new_ogp_image_1200_630_rgb.jpg' },
      // { property: 'og:title', content: TITLE },
      // { property: 'og:url', content: 'http://agilecamp.org/' },

      // Twitter
      // https://dev.twitter.com/cards/types/summary-large-image
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@goagilecamp' },
      { name: 'twitter:description', content: DESCRIPTION },
      { name: 'twitter:image', content: '//agilecamp.org/AgileCamp_new_twitter_image_600_300_rgb.png' },
      { name: 'twitter:site', content: '@goagilecamp' },
      { name: 'twitter:title', content: TITLE },
      // https://dev.twitter.com/web/overview/widgets-webpage-properties
      { name: 'twitter:widgets:autoload', content: 'off' }
    ],
    link: [
      // Generated by http://www.favicomatic.com
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // CSS and fonts
      { rel: 'stylesheet', href: '/agilecamp-bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.min.js',
        integrity: 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=',
        crossorigin: 'anonymous',
        type: 'text/javascript'
      },
      { src: 'https://use.fontawesome.com/a6ba001ef0.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js', type: 'text/javascript' },
      { src: '/agilecamp-bootstrap/dist/js/bootstrap.js', type: 'text/javascript' },
      { src: '/vendor/js/easyXDM.min.js', type: 'text/javascript' },
      { src: '/vendor/js/woopra.min.js', type: 'text/javascript' }
    ]
  },

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~plugins/woopra.js', ssr: false }
  ],

  srcDir: 'src'
}
