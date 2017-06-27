<template>
  <div></div>
</template>

<script>
// SEE: https://dev.twitter.com/web/javascript/loading
let twttr
if (process.BROWSER_BUILD) {
  twttr = window.twttr = (function (d, s, id) {
    let js
    let fjs = d.getElementsByTagName(s)[0]
    let t = window.twttr || {}

    if (d.getElementById(id)) return t
    js = d.createElement(s)
    js.id = id
    js.src = 'https://platform.twitter.com/widgets.js'
    fjs.parentNode.insertBefore(js, fjs)

    t._e = []
    t.ready = function (f) {
      t._e.push(f)
    }

    return t
  }(document, 'script', 'twitter-wjs'))
}

export default {
  props: {
    dataSource: Object,
    options: Object
  },

  mounted () {
    if (!twttr) return

    // SEE: https://dev.twitter.com/web/javascript/creating-widgets
    twttr.ready(() => {
      twttr.widgets.createTimeline(this.dataSource, this.$el, this.options)
    })
  }
}
</script>
