<template>
  <div class="site">
    <header class="fixed-top bg-color-header text-white">
      <div class="container d-flex justify-content-start align-items-center px-2 py-3">
        <a class="btn-block mr-auto d-none d-sm-block" href="/" @click.prevent="navTo('index')">
          <img class="logo-header" src="~assets/images/AgileCamp_2018_White.svg" />
        </a>

        <a class="text-white mr-2" :href="emailLink"><i class="fa fa-fw fa-envelope" aria-hidden="true"></i></a>
        <a class="text-white mr-2" :href="facebookLink"><i class="fa fa-fw fa-facebook-f" aria-hidden="true"></i></a>
        <a class="text-white mr-2" :href="twitterLink"><i class="fa fa-fw fa-twitter" aria-hidden="true"></i></a>
        <a class="text-white mr-auto mr-sm-4" :href="googlePlusLink"><i class="fa fa-fw fa-google-plus" aria-hidden="true"></i></a>

        <button type="button" class="btn btn-primary btn-sm px-4 mr-2" @click="navTo('index', 'speakerSection')">Speak</button>
        <button type="button" class="btn btn-primary btn-sm px-4" @click="navTo('index', 'sponsorSection')">Sponsor</button>
      </div>
    </header>

    <nuxt class="site-content" />

    <footer>
      <contact-section />
    </footer>
  </div>
</template>

<script>
// TODO: Make copyright year computed
import ContactSection from '../components/ContactSection'
import Vue from 'vue'

const $ = global.$

Vue.mixin({
  methods: {
    navTo (name, id) {
      const scroll = () => {
        return id ? this.scrollToId(id) : this.scrollToTop()
      }

      if (this.$router.currentRoute.name === name) {
        scroll()
      } else {
        this.$router.push({name: name}, () => setTimeout(scroll, 250))
      }
    },

    scrollToElement (el) {
      $(el).velocity('scroll', {
        duration: 500,
        easing: 'swing',
        offset: -$('header').height()
      })
    },

    scrollToId (id) {
      this.scrollToElement('#' + id)

      this.$root.$options.$tracker.trackAction('scroll_to_id', {
        id: id
      })
    },

    scrollToTop () {
      $(this.$el).velocity('scroll', {
        duration: 500,
        easing: 'swing'
      })

      this.$root.$options.$tracker.trackAction('scroll_to_top')
    },

    trackContact (url, context = 'default') {
      this.$root.$options.$tracker.trackAction('contact', {
        context,
        url
      })
    },

    trackLink (url, context = 'default') {
      this.$root.$options.$tracker.trackAction('outgoing', {
        context,
        url
      })
    }
  }
})

export default {
  components: {
    ContactSection
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink,

      // Misc
      isNavOpen: false
    }
  },

  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen

      this.$root.$options.$tracker.trackAction('toggle_nav', {
        is_nav_open: this.isNavOpen
      })
    }
  }
}
</script>
