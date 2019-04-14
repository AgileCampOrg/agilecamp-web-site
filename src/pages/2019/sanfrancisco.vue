<template>
  <div>
    <div class="bg-header pt-header pb-4">
      <div class="bg-header-shape bg-header-shape-red-black">
        <section class="container pt-header-shape">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
              <div class="row align-items-end">
                <div class="col-12 col-lg-auto mr-auto pb-2 text-white">
                  <h1><span class="text-uppercase mr-2">San Francisco</span> Dec&nbsp;6</h1>
                  <h5 class="font-weight-light font-italic">{{ event.address }}</h5>
                </div>

                <div class="col-auto pb-3">
                  <a class="btn btn-danger px-4" role="button" :href="event.registerLink" target="_blank">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid container-auto px-0 pt-3">
          <div class="row no-gutters">
            <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
              <div><img src="~assets/images/header-2019-sanfrancisco.jpg" class="img-fluid" /></div>

              <div style="height: 100%;" class="col-5 px-0">
                <google-map
                  icon="/AgileCamp_map_marker_place.svg" :iconSize="[50, 50]"
                  style="height: 100% !important;"
                  :directions-link="event.directionsLink"
                  :disable-default-ui="true"
                  :lat-lng-literal="event.latLngLiteral"
                  :place-id="event.placeId"
                  :title="event.placeName" />
              </div>
            </div>
          </div>
        </section>

        <section class="container pt-3">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1 pb-4 text-white">
              <p class="lead font-weight-bold mb-1">Make your way to AgileCamp’s West Coast HQ in scenic San Francisco!</p>
              <p class="lead">
                San Francisco is one of the largest innovation hubs in the world and one of the most enchanting cities in the country.
                AgileCamp will be held at the Mission Bay Convention Center in San Francisco, directly across from the new Warriors Stadium.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="bg-color-white" id="programSection">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Program</h2>
          </div>
        </div>

        <div class="row" v-if="event.schedId">
          <div class="col-12">
            <sched-embed class="py-2" page="/directory/speakers" :sched-id="event.schedId" />
          </div>
        </div>

        <!-- TODO: Move to component -->
        <div class="row" v-else>
          <div class="col-12 py-2">
            <p class="lead">2019 is shaping up to be the best AgileCamp yet!</p>

            <p class="lead"><a href="/" class="link-underline" @click.prevent="navTo('index', 'pastYearsSection')">Check out prior</a> AgileCamps for a sample of all the great speakers and topics discussed.</p>
          </div>
        </div>

        <div class="row" v-if="event.schedId">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary px-3" :href="schedLink" target="_blank">View the Schedule and Directory</a>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-blur">
      <section class="container py-4" id="sponsorSection">
        <become-sponsor-row />
      </section>
    </div>

    <div id="travelSection">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 pb-3">
            <h2 class="text-uppercase mb-2">Event Location</h2>

            <p>
              <a :href="event.directionsLink" target="_blank">{{ event.placeName }}</a><br />
              {{ event.address }}<br />
            </p>

            <a class="btn btn-secondary px-3 mx-2 my-2" target="_blank" :href="event.directionsLink">Map &amp; Directions</a>
          </div>

          <div class="col-12 col-lg-6 pb-3">
            <h2 class="text-uppercase mb-2">Travel</h2>

            <div class="card">
             <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a href="#" class="nav-link" :class="shownTravelIndex === 0 ? 'active' : ''" @click.prevent="toggleTravel(0)">By car</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link" :class="shownTravelIndex === 1 ? 'active' : ''" @click.prevent="toggleTravel(1)">Parking</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link" :class="shownTravelIndex === 2 ? 'active' : ''" @click.prevent="toggleTravel(2)">By transit</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link" :class="shownTravelIndex === 3 ? 'active' : ''" @click.prevent="toggleTravel(3)">Hotels</a>
                  </li>
                </ul>
              </div>

              <div class="card-body">
                <mission-bay-by-car v-if="shownTravelIndex === 0" />
                <mission-bay-parking v-if="shownTravelIndex === 1" />
                <mission-bay-by-transit v-if="shownTravelIndex === 2" />
                <mission-bay-hotels v-if="shownTravelIndex === 3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BecomeSponsorRow from '@/components/BecomeSponsorRow'
import GoogleMap from '@/components/GoogleMap'
import SchedEmbed from '@/components/SchedEmbed'

// Travel
import MissionBayByCar from '@/components/travel/MissionBayByCar'
import MissionBayByTransit from '@/components/travel/MissionBayByTransit'
import MissionBayHotels from '@/components/travel/MissionBayHotels'
import MissionBayParking from '@/components/travel/MissionBayParking'

export default {
  components: {
    BecomeSponsorRow,
    GoogleMap,
    SchedEmbed,

    // Travel
    MissionBayByCar,
    MissionBayByTransit,
    MissionBayHotels,
    MissionBayParking
  },

  data () {
    return {
      // Event data
      event: process.env.events.year2019.sanFrancisco,

      // Travel info
      shownTravelIndex: 0
    }
  },

  computed: {
    schedLink () {
      return `https://${this.event.schedId}`
    }
  },

  methods: {
    toggleTravel (index) {
      this.shownTravelIndex = index

      this.$root.$options.$tracker.trackAction('toggle_travel', {
        shown_travel_index: this.shownTravelIndex
      })
    }
  }
}
</script>
