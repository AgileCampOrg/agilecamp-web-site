<template>
  <div ref="player" />
</template>

<script>
import Player from '@vimeo/player'

export default {
  props: {
    delay: { default: -1, type: Number },
    options: { default: null, type: Object }
  },

  mounted() {
    this.player = new Player(this.$refs.player, Object.assign({}, this.options))

    const { delay } = this
    if (delay > -1) {
      setTimeout(() => {
        if (this.player) this.player.play()
      }, delay)
    }
  },

  beforeDestroy() {
    if (this.player) this.player.destroy()

    this.player = null
  }
}
</script>
