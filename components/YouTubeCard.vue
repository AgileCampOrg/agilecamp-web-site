<template>
  <div class="card card-inverse">
    <div class="card-img embed-responsive embed-responsive-16by9">
      <transition name="fade" mode="out-in">
        <iframe class="embed-responsive-item" :src="videoSrc" allowfullscreen v-if="isLoaded" key="isLoaded" />
        <img class="embed-responsive-item" :src="imgSrc" v-else key="isNotLoaded" />
      </transition>
    </div>

    <div class="card-img-overlay bg-color-black-40 text-center d-flex flex-column justify-content-center align-items-center" v-if="!isLoaded">
      <a class="card-link small" :href="linkSrc" v-if="hasTitle" @click.prevent="load">{{ title }}</a>
      <button class="btn btn-lg btn-info" role="button" @click="load" v-else><i class="fa fa-2x fa-fw fa-play-circle-o" aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    videoId: String
  },

  data () {
    return {
      isLoaded: false
    }
  },

  computed: {
    hasTitle () {
      return this.title && this.title.length > 0
    },
    imgSrc () {
      return `https://img.youtube.com/vi/${this.videoId}/maxresdefault.jpg`
    },
    linkSrc () {
      return `https://www.youtube.com/watch?v=${this.videoId}`
    },
    videoSrc () {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
    }
  },

  methods: {
    load () {
      this.isLoaded = true
    }
  }
}
</script>
