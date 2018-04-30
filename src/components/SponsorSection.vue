<template>
  <div class="bg-ac-main-blur">
    <section class="container py-4" id="sponsorSection">
      <div class="row py-4">
        <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
          <h2>Become an AgileCamp Sponsor</h2>

          <p class="body-copy">
            AgileCamp can’t happen without our sponsors.
            To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our <a target="_blank" :href="sponsorResLink">Sponsorship Program</a> guide.
          </p>

          <p class="body-copy">
            AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!
          </p>
        </div>

        <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <p class="text-center">
            <a class="btn btn-primary px-4 mx-1 my-1" target="_blank" :href="sponsorResLink">2018 sponsorship program</a>
            <a class="btn btn-info px-4 mx-1 my-1" :href="emailLink" @click="trackContact(emailLink, 'sponsorResources')">Contact us with questions</a>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <ul class="nav nav-tabs x-pt-4 x-border-top x-border-light">
            <li class="nav-item" v-for="(year, index) in years">
              <a class="nav-link" :class="{active: index === yearIndex}" href="#" @click.prevent="yearIndex = index">{{ year.title }}</a>
            </li>
          </ul>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <component :is="years[yearIndex].component" />
      </transition>
    </section>
  </div>
</template>

<script>
import Sponsors2017 from '../components/Sponsors2017'
import Sponsors2018 from '../components/Sponsors2018'

export default {
  components: {
    Sponsors2017,
    Sponsors2018
  },

  data () {
    return {
      yearIndex: 0,
      years: [{
        component: 'Sponsors2018', title: '2018 Sponsors'
      }, {
        component: 'Sponsors2017', title: '2017 Sponsors'
      }],

      // Social link
      emailLink: process.env.emailLink,

      // Resource link
      sponsorResLink: process.env.sponsorResLink
    }
  }
}
</script>
