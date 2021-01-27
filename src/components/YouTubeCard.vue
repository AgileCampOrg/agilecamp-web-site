<template>
  <div class="card text-white" style="overflow: hidden">
    <div class="card-img embed-responsive embed-responsive-16by9">
      <transition name="fade" mode="out-in">
        <iframe
          v-if="isLoaded"
          key="isLoaded"
          class="embed-responsive-item"
          :src="videoSrc"
          allowfullscreen
        />
        <img
          v-else
          key="isNotLoaded"
          class="embed-responsive-item"
          :src="imgSrc"
        />
      </transition>
    </div>

    <div
      v-if="!isLoaded"
      class="card-img-overlay bg-color-black-alpha-60 text-center d-flex flex-column justify-content-center align-items-center"
    >
      <a
        v-if="hasTitle"
        class="card-link small"
        :href="linkSrc"
        @click.prevent="load"
        >{{ title }}</a
      >
      <button v-else class="btn btn-lg btn-info" @click="load">
        <i class="fa fa-2x fa-fw fa-play-circle-o" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { default: '', type: String },
    videoId: { type: String, required: true }
  },

  data() {
    return {
      isLoaded: false
    }
  },

  computed: {
    hasTitle() {
      return this.title && this.title.length > 0
    },
    imgSrc() {
      return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`
    },
    linkSrc() {
      return `https://www.youtube.com/watch?v=${this.videoId}`
    },
    videoSrc() {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
    }
  },

  methods: {
    load() {
      this.isLoaded = true

      this.$root.$options.$tracker.trackAction('load_video', {
        title: this.title || 'Untitled',
        video_id: this.videoId
      })
    }
  }
}
</script>
