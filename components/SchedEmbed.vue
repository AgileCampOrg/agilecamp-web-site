<template>
  <div>
    <p class="text-center" v-show="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </p>

    <div ref="iframe" v-if="!isTimeout"></div>
  </div>
</template>

<script>
// SEE: https://github.com/oyvindkinsey/easyXDM
let easyXDM
if (process.BROWSER_BUILD) {
  easyXDM = window.easyXDM
}

export default {
  props: {
    schedId: String
  },

  data () {
    return {
      isLoading: true,
      isTimeout: false
    }
  },

  mounted () {
    if (!easyXDM) return

    // Timeout for Sched callback
    this.timeoutId = setTimeout(() => {
      this.isLoading = false
      this.isTimeout = true
      this.timeoutId = null
    }, 10000)

    /*
      Adapted from the official Sched embed script.
     */
    const confurl = this.schedId
    const np = '/' // The Sched page to embed
    const nw = '100%' // Embed width
    const ns = 'yes' // Sidebar yes or no
    const nb = false // Background dark or false
    const nm = '&mobileoff=Y' // Query param for &mobileoff
    const ssl = '&ssl=yes' // Query paramn for &ssl
    const tz = '' // Query param for &timezone
    const nomoblink = '' // Query param for &mobready
    const transportURL = encodeURIComponent(['https', '://', confurl, np, '?iframe=yes&w=', nw, '&sidebar=', ns, '&bg=', nb, nm, ssl, tz, nomoblink].join(''))

    const vm = this

    this.fullh = 200
    this.maxh = 2500
    this.socket = new easyXDM.Socket({
      remote: 'https://' + confurl + '/iframed.html?url=' + transportURL,
      // Flash must DIE!
      // swf: 'https://schd.ws/js/easyXDM/easyxdm.swf',
      props: {
        style: {
          width: nw,
          height: `${this.max}px`
        },
        scrolling: 'no'
      },
      container: this.$refs.iframe,
      onMessage: function (message, origin) {
        if (typeof message === 'string' && message.indexOf('tip-') !== -1) {
          const addh = parseInt(message.substr(4))
          this.container.getElementsByTagName('iframe')[0].style.height = `${this.fullh + addh}px`
        } else if (message === 'hidetip') {
          this.container.getElementsByTagName('iframe')[0].style.height = `${this.fullh}px`
        } else if (message === 'scrolltop') {
          vm.scrollToElement(vm.$el)
        } else {
          const fullh = parseInt(message)
          if (fullh > 0) {
            vm.isLoading = false
            if (vm.timeoutId !== null) {
              clearTimeout(vm.timeoutId)
              vm.timeoutId = null
            }

            this.fullh = fullh
            this.container.getElementsByTagName('iframe')[0].style.height = `${this.fullh}px`
          }
        }
      }
    })
  },

  beforeDestroy () {
    if (this.timeoutId !== null) clearTimeout(this.timeoutId)
    if (this.socket) this.socket.destroy()

    this.socket = null
  }
}
</script>
