<template>
  <div class="site">
    <header class="container-fluid fixed-top h-header bg-color-header">
      <div class="row h-100 hidden-sm-down">
        <div class="col-6 h-100 d-flex flex-column justify-content-center align-items-start">
          <a class="btn-block" href="/" @click.prevent="scrollToTop"><img class="header-logo" src="~assets/images/AgileCamp_new_web_2600_600.png" /></a>
        </div>

        <div class="col-6 h-100 d-flex flex-column justify-content-center align-items-center">
          <div class="text-nowrap">
            <button type="button" class="btn btn-lg btn-outline-primary mx-1" @click="scrollToId('speakerSection')">Speak</button>
            <button type="button" class="btn btn-lg btn-outline-primary mx-1" @click="scrollToId('sponsorSection')">Sponsor</button>

            <a class="btn btn-lg btn-outline-primary mx-1" role="button" :href="emailLink"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>

      <div class="row h-100 hidden-md-up">
        <transition name="flip" mode="out-in">
          <div class="col-10 h-100 d-flex flex-column justify-content-center align-items-end" v-if="isNavOpen" key="navOpen">
            <div class="text-nowrap">
              <button type="button" class="btn btn-outline-primary mx-1" @click="scrollToId('speakerSection')">Speak</button>
              <button type="button" class="btn btn-outline-primary mx-1" @click="scrollToId('sponsorSection')">Sponsor</button>

              <a class="btn btn-outline-primary mx-1" role="button" :href="emailLink"><i class="fa fa-sm fa-envelope" aria-hidden="true"></i></a>
            </div>
          </div>

          <div class="col-10 h-100 d-flex flex-column justify-content-center align-items-start" v-else key="navClosed">
            <img class="header-logo" src="~assets/images/AgileCamp_new_web_2600_600.png" />
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

    <nuxt class="site-content" hello="world" />

    <footer class="container-fluid py-4 w-100 text-white" style="background-color: #CF5300;">
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

let $
if (process.BROWSER_BUILD) {
  $ = window.$
}

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
    // Move to mixin or helper
    scrollToId (id) {
      $('#' + id).velocity('scroll', {
        duration: 500,
        easing: 'swing',
        offset: -$('header').height()
      })
    },
    scrollToTop () {
      $(this.$el).velocity('scroll', {
        duration: 500,
        easing: 'swing'
      })
    },
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
  background-image: url(~assets/images/ac_2017_lineup_background.jpg);
  background-color: $black;
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

.bg-color-black-40 { background-color: fade_out($black, 0.4) !important; }
.bg-color-header { background-color: fade_out($gray, 0.06) !important; }

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
.bg-darken { background-color: rgba(0, 0, 0, 0.1); }
.bg-lighten { background-color: rgba(255, 255, 255, 0.1); }
.bg-none { background: none; }

.body-copy {
  line-height: 1.7rem;
}

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

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.site-content {
  flex: 1;
}
</style>
