<template>
  <div class="d-flex flex-column align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
    <red-star />

    <router-link class="h3 mt-3 text-uppercase text-white router-link" :to="{name: '2018-dallas'}" v-if="showsLinkToCityPage">Dallas–Fort Worth</router-link>
    <span class="h3 mt-3 text-uppercase" v-else>Dallas–Fort Worth</span>
    <span class="h4 mt-1">November 2</span>
    <span class="h5 mt-1 text-success">Irving Convention Center<br />Dallax, TX</span>

    <a class="btn btn-danger btn-sm px-4 mt-3" role="button" :href="registerLink" target="_blank" v-if="showsProminentRegister">Register Now</a>
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
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474'
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
