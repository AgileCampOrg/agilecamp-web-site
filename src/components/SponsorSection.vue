<template>
  <div class="bg-ac-main-blur">
    <section class="container py-4" id="sponsorSection">
      <become-sponsor-row />

      <div class="row">
        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(year, index) in years" :key="year.component">
              <a class="nav-link" :class="{ active: index === yearIndex }" href="#" @click.prevent="yearIndex = index">{{ year.title }}</a>
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
import BecomeSponsorRow from './BecomeSponsorRow'
import Sponsors2017 from './Sponsors2017'
import Sponsors2018 from './Sponsors2018'

export default {
  components: {
    BecomeSponsorRow,
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
      }]
    }
  }
}
</script>
