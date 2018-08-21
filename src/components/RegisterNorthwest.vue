<template>
  <div class="d-flex flex-column align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
    <red-star />

    <router-link class="h3 mt-3 text-uppercase text-white router-link" :to="{name: '2018-northwest'}" v-if="showsLinkToCityPage">Northwest/<wbr />Portland</router-link>
    <span class="h2 mt-3 text-uppercase" v-else>Northwest/<wbr />Portland</span>
    <span class="h4 mt-1">September 14</span>
    <span class="h5 mt-1 text-success">Nike World Headquarters<br />Beaverton, OR</span>

    <router-link class="btn btn-secondary btn-sm px-4 mt-3" role="button" :to="{name: '2018-northwest'}" v-if="showsLinkToCityPage">Details</router-link>
    <a class="btn btn-danger btn-sm px-4 mt-3" role="button" :href="registerLink" target="_blank" v-else-if="showsProminentRegister">Register Now</a>
    <a class="btn btn-secondary btn-sm px-4 mt-3" role="button" :href="registerLink" target="_blank" v-else>Register Now</a>
  </div>
</template>

<script>
import RedStar from '@/components/RedStar'

export default {
  components: {
    RedStar
  },

  props: {
    showsLinkToCityPage: Boolean,
    showsProminentRegister: Boolean
  },

  data () {
    return {
      // Event info
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-northwest-2018-registration-43714048897'
    }
  }
}
</script>

<style scoped>
.router-link {
  text-decoration: underline;
}

.router-link:hover {
  text-decoration: none;
}
</style>
