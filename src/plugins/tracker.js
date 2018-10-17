export default ({app, env}) => {
  const {dataLayer, woopra} = global

  const gtag = (...args) => {
    if (dataLayer && env.googleTrackingId) dataLayer.push(args)
  }

  if (woopra && env.woopraProjectKey) {
    woopra.config({
      domain: env.woopraProjectKey,
      outgoing_tracking: true
    })
  }

  app.$tracker = {
    identify (props) {
      if (woopra) woopra.identify(props)
    },

    trackAction (eventName, props) {
      if (woopra) woopra.track(eventName, props)

      gtag('event', eventName, props)
    },

    trackPage ({name, path}) {
      if (woopra) woopra.track('pv', {title: name, url: path})

      gtag('js', new Date())
      gtag('config', env.googleTrackingId, {
        page_title: name,
        page_path: path
      })
    }
  }

  app.router.afterEach((to, from) => {
    app.$tracker.trackPage(to)
  })
}
