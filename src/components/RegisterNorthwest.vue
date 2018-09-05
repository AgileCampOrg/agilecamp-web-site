<template>
  <div class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
    <red-star />

    <router-link class="h3 mt-4 text-uppercase text-white underline-link" :to="{name: '2018-northwest'}" v-if="showsLinkToCityPage">Northwest/<wbr />Portland</router-link>
    <span class="h2 mt-4 text-uppercase" v-else>Northwest/<wbr />Portland</span>
    <span class="h4 mt-1">September 14</span>
    <span class="h5 mt-1 text-success">Nike World Headquarters, Beaverton, OR</span>

    <router-link class="btn btn-secondary btn-sm px-4 my-3" role="button" :to="{name: '2018-northwest'}" v-if="showsLinkToCityPage">Details / Register</router-link>

    <a class="btn btn-danger btn-sm px-4 my-3" role="button" :href="registerLink" target="_blank" v-else>Register Now</a>
  </div>
</template>

<script>
import RedStar from '@/components/RedStar'

export default {
  components: {
    RedStar
  },

  props: {
    showsLinkToCityPage: Boolean
  },

  data () {
    return {
      // Event info
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-northwest-2018-registration-43714048897'
    }
  }
}
</script>
