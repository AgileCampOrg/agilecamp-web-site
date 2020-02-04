import Vue from 'vue'

Vue.mixin({
  computed: {
    $tracker() {
      return this.$root.$options.$tracker
    }
  }
})

export default ({ app, env }) => {
  const { gtag, woopra } = global

  if (woopra && env.woopraProjectKey) {
    woopra.config({
      domain: env.woopraProjectKey,
      outgoing_tracking: true
    })
  }

  app.$tracker = {
    identify(props) {
      if (woopra) woopra.identify(props)
    },

    trackAction(eventName, props) {
      if (woopra) woopra.track(eventName, props)

      if (gtag) gtag('event', eventName, props)
    },

    trackPage({ name, path }) {
      if (woopra) woopra.track('pv', { title: name, url: path })

      if (gtag) gtag('js', new Date())
      if (gtag)
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
