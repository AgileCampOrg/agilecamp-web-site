<template>
  <div class="site">
    <header class="container-fluid fixed-top h-header bg-color-header">
      <div class="row h-100 hidden-sm-down">
        <div class="col-6 h-100 d-flex flex-column justify-content-center align-items-start">
          <a class="btn-block" href="/" @click.prevent="navTo('index')"><img class="header-logo" src="~assets/images/AgileCamp_new_web_2600_600.png" /></a>
        </div>

        <div class="col-6 h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="text-nowrap">
            <button type="button" class="btn btn-lg btn-outline-primary mx-1" @click="navTo('index', 'speakerSection')">Speak</button>
            <button type="button" class="btn btn-lg btn-outline-primary mx-1" @click="navTo('index', 'sponsorSection')">Sponsor</button>

            <a class="btn btn-lg btn-outline-primary mx-1" role="button" :href="emailLink"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>

      <div class="row h-100 hidden-md-up">
        <transition name="flip" mode="out-in">
          <div class="col-10 h-100 d-flex flex-column justify-content-center align-items-end" v-if="isNavOpen" key="navOpen">
            <div class="text-nowrap">
              <button type="button" class="btn btn-outline-primary mx-1" @click="navTo('index', 'speakerSection')">Speak</button>
              <button type="button" class="btn btn-outline-primary mx-1" @click="navTo('index', 'sponsorSection')">Sponsor</button>

              <a class="btn btn-outline-primary mx-1" role="button" :href="emailLink"><i class="fa fa-sm fa-envelope" aria-hidden="true"></i></a>
            </div>
          </div>

          <div class="col-10 h-100 d-flex flex-column justify-content-center align-items-start" v-else key="navClosed">
            <a class="btn-block" href="/" @click.prevent="navTo('index')"><img class="header-logo" src="~assets/images/AgileCamp_new_web_2600_600.png" /></a>
          </div>
        </transition>

        <div class="col-2 h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="text-nowrap">
            <button type="button" class="btn btn-link text-muted" @click="toggleNav">
              <i class="fa fa-lg fa-fw fa-times" aria-hidden="true" v-if="isNavOpen"></i>
              <i class="fa fa-lg fa-fw fa-bars" aria-hidden="true" v-else></i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <nuxt class="site-content" />

    <footer class="container-fluid py-4 w-100 text-white" :class="$route.name === 'index' ? 'bg-color-orange-dk-2' : 'bg-color-black'">
      <div class="row">
        <div class="col-12 text-center">
          Copyright &copy; 2013-2017 AgileCamp&trade;
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// TODO: Make copyright year computed
import Vue from 'vue'

let $
if (process.BROWSER_BUILD) {
  $ = window.$
}

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
    },
    scrollToTop () {
      $(this.$el).velocity('scroll', {
        duration: 500,
        easing: 'swing'
      })
    }
  }
})

export default {
  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,

      // Misc
      isNavOpen: false
    }
  },

  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style lang="scss">
@import '~static/agilecamp-bootstrap/scss/_custom.scss';

$header-height: 160px;
$header-height-collapse: 96px;
$header-logo-padding: 16px;

$gray: #e8e9ea;

.bg-ac-lineup {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(~assets/images/bg-ac-lineup.jpg);
  background-color: #323940;
  background-blend-mode: overlay;
}

.bg-ac-levels {
  background: #BBD8F8;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #BBD8F8, #4A99ED);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #BBD8F8, #4A99ED); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-color-gray { background-color: $gray !important; }
.bg-color-white { background-color: $white !important; }
.bg-color-black { background-color: $black !important; }
.bg-color-red { background-color: $red !important; }
.bg-color-orange { background-color: $orange !important; }
.bg-color-yellow { background-color: $yellow !important; }
.bg-color-green { background-color: $green !important; }
.bg-color-blue { background-color: $blue !important; }
.bg-color-teal { background-color: $teal !important; }
.bg-color-pink { background-color: $pink !important; }
.bg-color-purple { background-color: $purple !important; }

.bg-color-orange-dk-1 { background-color: #E65C00 !important; }
.bg-color-orange-dk-2 { background-color: #CF5300 !important; }
.bg-color-green-dk-1 { background-color: #76C43C !important; }
.bg-color-green-dk-2 { background-color: #6AB037 !important; }
.bg-color-blue-dk-1 { background-color: #0769D2 !important; }
.bg-color-blue-dk-2 { background-color: #065FBE !important; }
.bg-color-teal-dk-1 { background-color: #07D2D0 !important; }
.bg-color-teal-dk-2 { background-color: #06BEBB !important; }

.bg-color-gray-lt-1 { background-color: #323940 !important; }
.bg-color-gray-lt-2 { background-color: #464D53 !important; }

.bg-color-black-alpha-60 { background-color: rgba($black, 0.6) !important; }

.bg-color-header { background-color: rgba($gray, 0.94) !important; }

.color-gray { color: $gray !important; }
.color-white { color: $white !important; }
.color-black { color: $black !important; }
.color-red { color: $red !important; }
.color-orange { color: $orange !important; }
.color-yellow { color: $yellow !important; }
.color-green { color: $green !important; }
.color-blue { color: $blue !important; }
.color-teal { color: $teal !important; }
.color-pink { color: $pink !important; }
.color-purple { color: $purple !important; }

.color-white-alpha-50 { color: rgba($white, 0.5) !important; }

.border-bottom-black { border-bottom: 3px solid $black; }
.border-bottom-yellow { border-bottom: 3px solid $yellow; }

body { background-color: $gray; }

/*Extra small devices (portrait phones, less than 576px)*/
/*No media query since this is the default in Bootstrap*/
.h-header { height: $header-height-collapse; }
.mh-header { max-height: $header-height-collapse; }
.pt-header { padding-top: $header-height-collapse; }

.header-logo {
  max-height: ($header-height-collapse - $header-logo-padding);
  max-width: (2600 / 600 * ($header-height-collapse - $header-logo-padding));
  width: 100%;
  height: auto;
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  .bg-ac-levels {
    background: #BBD8F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #BBD8F8, #4A99ED);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #BBD8F8, #4A99ED); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .h-header { height: $header-height; }
  .mh-header { max-height: $header-height; }
  .pt-header { padding-top: $header-height; }

  .header-logo {
    max-height: ($header-height - $header-logo-padding);
    max-width: (2600 / 600 * ($header-height - $header-logo-padding));
    width: 100%;
    height: auto;
  }
}
</style>

<style>
a.link-underline, a.link-underline:visited {
  color: inherit !important;
  text-decoration: underline;
}
a.link-underline:focus, a.link-underline:hover {
  text-decoration: none;
}

.bg-darken { background-color: rgba(0, 0, 0, 0.1); }
.bg-lighten { background-color: rgba(255, 255, 255, 0.1); }
.bg-none { background: none; }

.body-copy {
  line-height: 1.7rem;
}

.display-vw-1 { font-size: 1vw; }
.display-vw-3 { font-size: 3vw; }
.display-vw-5 { font-size: 5vw; }
.display-vw-10 { font-size: 10vw; }
.display-vw-15 { font-size: 15vw; }
.display-vw-20 { font-size: 20vw; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}

.font-family-oswald-400,
.font-family-oswald-300,
.font-family-oswald-500,
.font-family-oswald-600 {
  font-family: 'Oswald', sans-serif;
}

.font-family-oswald-300 { font-weight: 300; }
.font-family-oswald-400 { font-weight: 400; }
.font-family-oswald-500 { font-weight: 500; }
.font-family-oswald-600 { font-weight: 600; }

.img-brighten-110 {
  filter: brightness(110%);
}
.img-brighten-120 {
  filter: brightness(120%);
}

.img-wrap-ac-speaker {
  max-height: 240px;
  max-width: 320px;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.site-content {
  flex: 1;
}
</style>
