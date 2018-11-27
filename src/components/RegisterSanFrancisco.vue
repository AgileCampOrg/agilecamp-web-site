<template>
  <div class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
    <red-star />

    <router-link class="h3 mt-4 text-uppercase text-white underline-link" :to="{name: '2018-sanfrancisco'}" v-if="showsLinkToCityPage">San Francisco</router-link>
    <span class="h3 mt-4 text-uppercase" v-else>San Francisco</span>
    <span class="h4 mt-1">November 30</span>
    <span class="h5 mt-1 text-success">Mission Bay Conference Center, San Francisco, CA</span>

    <transition name="flip" mode="out-in" v-if="showsAlert">
      <p class="mt-2 body-copy" v-if="isMoreShown">
        Hyperdrive Agile and Toyota debut a new ICAgile certified course “Certified Scrum: The Toyota Way” in concert with AgileCamp San Francisco.
        Up your game and get ahead of the pack by registering now!
      </p>

      <div class="alert alert-secondary mt-2 px-3 py-1" role="alert">
        <a class="alert-link" href="#" @click.prevent="isMoreShown = true">
          Just Announced! Certified Scrum: <span style="white-space: pre;">The Toyota Way <i class="fa fa-fw fa-info-circle"></i></span>
        </a>
      </div>
    </transition>

    <router-link class="btn btn-secondary btn-sm px-3 my-3" role="button" :to="{name: '2018-sanfrancisco'}" v-if="showsLinkToCityPage">Details / SOLD OUT</router-link>

    <a class="btn btn-danger btn-sm px-3 my-3" role="button" :href="registerLink" target="_blank" @click="testMe" v-else>SOLD OUT</a>

    <div class="alert alert-secondary mt-2 px-3 py-1" role="alert" v-if="!showsLinkToCityPage">
      Just Announced! Certified Scrum: The Toyota Way

      <span style="white-space: pre;"><a class="alert-link" :href="alertLink" target="_blank">Sold out.</a></span>
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
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-san-francisco-bay-area-2018-registration-43798886649',

      alertLink: 'https://www.eventbrite.com/e/certified-scrum-the-toyota-way-2-day-course-tickets-50881770746'
    }
  },

  methods: {
    testMe () {
      console.log(this.$tracker)
    }
  }
}
</script>
