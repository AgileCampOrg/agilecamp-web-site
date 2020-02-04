<template>
  <div class="site">
    <header class="fixed-top bg-color-header text-white">
      <div
        class="container d-flex justify-content-start align-items-center px-2 py-3"
      >
        <a
          class="btn-block mr-auto d-none d-md-block"
          href="/"
          @click.prevent="navTo('index')"
        >
          <img class="logo-header" src="~assets/images/AgileCamp_White.svg" />
        </a>

        <a class="text-white mr-2 mr-sm-3 ml-2" :href="emailLink"
          ><i class="fa fa-fw fa-envelope" aria-hidden="true"></i
        ></a>
        <a class="text-white mr-2 mr-sm-3" :href="facebookLink"
          ><i class="fa fa-fw fa-facebook-f" aria-hidden="true"></i
        ></a>
        <a class="text-white mr-2 mr-sm-3" :href="twitterLink"
          ><i class="fa fa-fw fa-twitter" aria-hidden="true"></i
        ></a>
        <!--
        <a
          class="btn btn-light btn-sm px-sm-3 ml-auto ml-md-2"
          role="button"
          :href="newsLink"
          target="_blank"
          >News</a
        >
 -->
        <!--
        <button
          type="button"
          class="btn btn-light btn-sm px-sm-3 ml-2 ml-sm-3"
          @click="navTo('index', 'speakerSection')"
        >
          Speak
        </button>
 -->
        <button
          type="button"
          class="btn btn-primary btn-sm px-sm-3 ml-2 ml-sm-3"
          @click="navTo('index', 'sponsorSection')"
        >
          Sponsor
        </button>
      </div>
    </header>

    <nuxt class="site-content" />

    <footer>
      <div class="bg-color-black">
        <section class="container py-4">
          <div class="row">
            <div class="col-12 py-3 text-center text-white">
              <img
                src="~assets/images/AgileCamp_White.svg"
                style="width: 260px;"
              />
            </div>

            <div
              class="col-12 py-3 text-center text-white d-flex flex-row flex-wrap justify-content-center align-items-center"
            >
              <span class="mx-4"
                ><a
                  :href="emailLink"
                  class="link-underline"
                  @click="trackContact(emailLink, 'contactSection')"
                  >Contact Us</a
                ></span
              >
              <span class="mx-4"
                ><router-link
                  class="link-underline"
                  :to="{ name: 'codeofconduct' }"
                  >Code of Conduct</router-link
                ></span
              >
              <span class="mx-4"
                ><router-link
                  class="link-underline"
                  :to="{ name: 'privacypolicy' }"
                  >Privacy Policy</router-link
                ></span
              >
            </div>

            <div class="col-12 py-3 text-center text-white">
              <span class="py-2"
                >Copyright &copy; 2013-2020 AgileCamp&trade;</span
              >
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
// TODO: Make copyright year computed
import Vue from 'vue'

const $ = global.$

Vue.mixin({
  methods: {
    navTo(name, id) {
      const scroll = () => {
        return id ? this.scrollToId(id) : this.scrollToTop()
      }

      if (this.$router.currentRoute.name === name) {
        scroll()
      } else {
        this.$router.push({ name }, () => setTimeout(scroll, 250))
      }
    },

    scrollToElement(el) {
      $(el).velocity('scroll', {
        duration: 500,
        easing: 'swing',
        offset: -$('header').height()
      })
    },

    scrollToId(id) {
      this.scrollToElement('#' + id)

      this.$root.$options.$tracker.trackAction('scroll_to_id', {
        id
      })
    },

    scrollToTop() {
      $(this.$el).velocity('scroll', {
        duration: 500,
        easing: 'swing'
      })

      this.$root.$options.$tracker.trackAction('scroll_to_top')
    },

    trackContact(url, context = 'default') {
      this.$root.$options.$tracker.trackAction('contact', {
        context,
        url
      })
    },

    trackLink(url, context = 'default') {
      this.$root.$options.$tracker.trackAction('outgoing', {
        context,
        url
      })
    }
  }
})

export default {
  data() {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      twitterLink: process.env.twitterLink,

      newsLink:
        'https://www.prnewswire.com/news-releases/toyota-connected-north-america-to-sponsor-business-process-conference----agilecamp-2018-300733479.html',

      // Misc
      isNavOpen: false
    }
  },

  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen

      this.$root.$options.$tracker.trackAction('toggle_nav', {
        is_nav_open: this.isNavOpen
      })
    }
  }
}
</script>
