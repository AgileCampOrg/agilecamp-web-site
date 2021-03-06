const TITLE = 'AgileCamp 2020'
const DESCRIPTION =
  'AgileCamp is the industry’s leading Agile and Lean Practices conference! Attend an upcoming AgileCamp now to take your Agile and Lean practices to the next level. Learn about the tools and techniques from experienced Agile coaches and watch your team succeed.'

const googleTrackingId = process.env.GOOGLE_TRACKING_ID || 'UA-127652739-1'
const woopraProjectKey = process.env.WOOPRA_PROJECT_KEY || 'dev.agilecamp.org'

module.exports = {
  build: {
    // Run eslint on save
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          // options: {
          //   fix: true
          // },
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [{ src: '~assets/css/global.scss', lang: 'scss' }],

  env: {
    emailLink: 'mailto:info@agilecamp.org',
    events: {
      year2019: {
        chicago: {
          address: 'Chase Tower, 10 South Dearborn Street, Chicago, Illinois',
          directionsLink:
            'https://www.google.com/maps/place/Chase+Tower,+Chicago,+IL+60603/@41.881599,-87.6324337',
          latLngLiteral: { lat: 41.881599, lng: -87.6324337 },
          // SEE: https://developers.google.com/places/place-id
          placeId: 'ChIJIYnIarssDogRA43YB818mYU',
          placeName: 'Chase Tower',
          registerLink:
            'https://www.eventbrite.com/e/agile-agilecamp-chicago-2019-tickets-55053693078',
          schedId: 'agilecampchicago2019.sched.com',
          travelDocLink:
            'https://drive.google.com/file/d/1LSGV2b-k4iwQRz3hgaAkhw2A3B0YV-nc/view'
        },
        dallas: {
          address:
            'Irving Convention Center, 500 West Las Colinas Boulevard, Irving, Texas',
          directionsLink:
            'https://www.google.com/maps?cid=12314363271041380854',
          latLngLiteral: { lat: 32.8780798, lng: -96.9454123 },
          // SEE: https://developers.google.com/places/place-id
          placeId: 'ChIJt0VtiJiCToYR9vGJlSZo5ao',
          placeName: 'Irving Convention Center',
          registerLink:
            'https://www.eventbrite.com/e/agile-agilecamp-dallas-2019-tickets-55102578295',
          schedId: 'agilecampdallas2019.sched.com'
        },
        newYorkMetro: {
          address:
            'Hyatt Regency Jersey City, 2 Exchange Place, Jersey City, New Jersey',
          directionsLink:
            'https://www.google.com/maps/place/Hyatt+Regency+Jersey+City/@40.717075,-74.0341523/data=!3m1!4b1!4m5!3m4!1s0x89c250a983524331:0x98a2ccc2aeafef04!8m2!3d40.717075!4d-74.0319636',
          latLngLiteral: { lat: 40.717075, lng: -74.0341523 },
          // SEE: https://developers.google.com/places/place-id
          placeId: 'ChIJMUNSg6lQwokRBO-vrsLMopg',
          placeName: 'Hyatt Regency Jersey City',
          registerLink:
            'https://www.eventbrite.com/e/agile-agilecamp-new-york-metropolitan-2019-tickets-55102498055',
          schedId: 'agilecampnewyorkmetro2019.sched.com',
          travelDocLink:
            'https://www.hyatt.com/en-US/hotel/new-jersey/hyatt-regency-jersey-city-on-the-hudson/newjp/maps-parking-transportation'
        },
        portland: {
          address:
            'Nike/Tiger Woods Conference Center, One Bowerman Drive, Beaverton, Oregon',
          directionsLink:
            'https://www.google.com/maps?cid=12366104606468305817',
          latLngLiteral: { lat: 45.5102932, lng: -122.8305969 },
          // SEE: https://developers.google.com/places/place-id
          placeId: 'ChIJYV-FNcMOlVQRmXPdA586nas',
          placeName: 'Nike - Tiger Woods Conference Center',
          registerLink:
            'https://www.eventbrite.com/e/agile-agilecamp-portland-2019-tickets-55102616409',
          schedId: 'agilecampportland2019.sched.com'
        },
        sanFrancisco: {
          address:
            'Mission Bay Conference Center, 1675 Owens Street, San Francisco, California',
          directionsLink:
            'https://www.google.com/maps?cid=14630148899230845512',
          latLngLiteral: { lat: 37.7678058, lng: -122.3955059 },
          // SEE: https://developers.google.com/places/place-id
          placeId: 'ChIJD1Pt_s5_j4ARSAq69ei6CMs',
          placeName: 'Mission Bay Conference Center',
          registerLink:
            'https://www.eventbrite.com/e/agile-agilecamp-san-francisco-2019-tickets-55102361647',
          schedId: 'agilecampsanfrancisco2019.sched.com'
        }
      },
      year2020: {}
    },
    facebookLink: 'https://www.facebook.com/agilecamp',
    googleMapsAPIKey: 'AIzaSyApfHZKwYHZTcBtbXf-DHB5nVUBrC5H59I',
    googlePlusLink: 'https://plus.google.com/114873923413909280996/about',
    speakerResLink: 'https://goo.gl/forms/GfP66quIyn5frjNt2',
    sponsorResLink:
      'https://www.dropbox.com/s/4b16slhjoh5izcm/AgileCamp_2019.pdf?dl=0',

    twitterLink: 'https://twitter.com/goagilecamp',
    twitterScreenName: 'GoAgileCamp',
    googleTrackingId,
    visibility: {
      showImportantDates: false,
      showNews: false,
      showSpeaker: false,
      showSponsor: false
    },
    woopraProjectKey
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
      {
        name: 'msapplication-square150x150logo',
        content: '/mstile-150x150.png'
      },
      { name: 'msapplication-wide310x150logo', content: '/mstile-310x150.png' },
      {
        name: 'msapplication-square310x310logo',
        content: '/mstile-310x310.png'
      },

      // Open Graph Protocol (Facebook and LinkedIn)
      // https://developers.facebook.com/tools/debug/og/object/?q=http%3A%2F%2Fagilecamp.org%2F
      // https://www.linkedin.com/help/linkedin/answer/46687?query=open%20graph
      // { property: 'og:description', content: DESCRIPTION },
      // { property: 'og:image', content: 'http://agilecamp.org/agilecamp-2019-og-1200x630.jpg' },
      // { property: 'og:title', content: TITLE },
      // { property: 'og:url', content: 'http://agilecamp.org/' },

      // Twitter
      // https://dev.twitter.com/cards/types/summary-large-image
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@goagilecamp' },
      { name: 'twitter:description', content: DESCRIPTION },
      {
        name: 'twitter:image',
        content: '//agilecamp.org/agilecamp-2019-og-1200x630.jpg'
      },
      { name: 'twitter:site', content: '@goagilecamp' },
      { name: 'twitter:title', content: TITLE },
      // https://dev.twitter.com/web/overview/widgets-webpage-properties
      { name: 'twitter:widgets:autoload', content: 'off' }
    ],
    link: [
      // Generated by http://www.favicomatic.com
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '57x57',
        href: '/apple-touch-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: '/apple-touch-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: '/apple-touch-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: '/apple-touch-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '60x60',
        href: '/apple-touch-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '120x120',
        href: '/apple-touch-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '76x76',
        href: '/apple-touch-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '152x152',
        href: '/apple-touch-icon-152x152.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-196x196.png',
        sizes: '196x196'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-128.png',
        sizes: '128x128'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // CSS and fonts
      {
        rel: 'stylesheet',
        href: '/agilecamp-bootstrap/dist/css/bootstrap.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.min.js',
        integrity: 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=',
        crossorigin: 'anonymous',
        type: 'text/javascript'
      },
      {
        src: 'https://use.fontawesome.com/a6ba001ef0.js',
        type: 'text/javascript'
      },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', type: 'text/javascript' },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js',
        type: 'text/javascript'
      },
      // { src: '/agilecamp-bootstrap/dist/js/bootstrap.js', type: 'text/javascript' },
      { src: '/vendor/js/easyXDM.min.js', type: 'text/javascript' },
      { src: '/vendor/js/gtag.js', type: 'text/javascript' },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`,
        type: 'text/javascript',
        async: 'async'
      },
      { src: '/vendor/js/woopra.min.js', type: 'text/javascript' }
    ]
  },

  loading: { color: '#3B8070' },

  plugins: [{ src: '~plugins/tracker.js', ssr: false }],

  srcDir: 'src'
}
