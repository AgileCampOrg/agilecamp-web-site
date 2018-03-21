function getWoopra () {
  return global.woopra
}

function identify (props) {
  const w = getWoopra()
  if (w) w.identify(props)
}
function trackAction (eventName, props) {
  const w = getWoopra()
  if (w) w.track(eventName, props)
}

function trackPage ({name, path}) {
  const w = getWoopra()
  if (w) w.track('pv', {title: name, url: path})
}

export default ({app, env}) => {
  const w = getWoopra()

  if (w && env.woopraProjectKey) {
    w.config({
      domain: env.woopraProjectKey,
      outgoing_tracking: true
    })

    app.$tracker = {
      identify,
      trackAction,
      trackPage
    }
  } else {
    app.$tracker = {
      identify: console.log.bind(console, '>>> identify'),
      trackAction: console.log.bind(console, '>>> trackAction'),
      trackPage: console.log.bind(console, '>>> trackPage')
    }
  }

  app.router.afterEach((to, from) => {
    app.$tracker.trackPage(to)
  })
}
