<template>
  <div class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
    <red-star />

    <router-link class="h3 mt-4 text-uppercase text-white underline-link" :to="{name: '2018-dallas'}" v-if="showsLinkToCityPage">Dallas–Fort Worth</router-link>
    <span class="h3 mt-4 text-uppercase" v-else>Dallas–Fort Worth</span>
    <span class="h4 mt-1">November 2</span>
    <span class="h5 mt-1 text-success">Irving Convention Center, Dallax, TX</span>

    <transition name="flip" mode="out-in" v-if="showsAlert">
      <p class="mt-2 body-copy" v-if="isMoreShown">
        Hyperdrive Agile and Toyota debut a new ICAgile certified course “Scrum: The Toyota Way” in concert with AgileCamp Dallas.
        Up your game and get ahead of the pack by registering now!
      </p>

      <div class="alert alert-secondary mt-2 px-3 py-1" role="alert">
        <a class="alert-link" href="#" @click.prevent="isMoreShown = true">
          Just Announced! Scrum: The Toyota <span style="white-space: pre;">Way Class <i class="fa fa-fw fa-info-circle"></i></span>
        </a>
      </div>
    </transition>

    <router-link class="btn btn-secondary btn-sm px-4 my-3" role="button" :to="{name: '2018-dallas'}" v-if="showsLinkToCityPage">Details / Register</router-link>

    <a class="btn btn-danger btn-sm px-4 my-3" role="button" :href="registerLink" target="_blank" v-else>Register Now</a>

    <div class="alert alert-secondary mt-2 px-3 py-1" role="alert" v-if="!showsLinkToCityPage">
      Just Announced! Scrum: The Toyota Way Class

      <span style="white-space: pre;"><a class="alert-link" :href="alertLink" target="_blank">Register here.</a></span>
    </div>
  </div>
</template>

<script>
import RedStar from '@/components/RedStar'

export default {
  components: {
    RedStar
  },

  props: {
    isMoreShown: false,

    showsAlert: Boolean,
    showsLinkToCityPage: Boolean
  },

  data () {
    return {
      // Event info
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474',

      alertLink: 'https://www.eventbrite.com/e/scrum-the-toyota-way-tickets-48621019779?aff=AgileCampWebsiteSTTW'
    }
  }
}
</script>
