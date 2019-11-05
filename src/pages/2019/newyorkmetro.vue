<template>
  <div>
    <div class="bg-header pt-header pb-4">
      <div class="bg-header-shape bg-header-shape-red-black">
        <section class="container pt-header-shape">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
              <div class="row align-items-end">
                <div class="col-12 col-lg-auto mr-auto pb-2 text-white">
                  <h1><span class="text-uppercase mr-2">New York Metropolitan</span> Oct&nbsp;4</h1>
                  <h5 class="font-weight-light font-italic">{{ event.address }}</h5>
                </div>

                <div class="col-auto pb-3">
                  <a class="btn btn-secondary px-4" role="button" :href="event.registerLink" target="_blank">Event Ended</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid container-auto px-0 pt-3">
          <div class="row no-gutters">
            <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
              <div><img src="~assets/images/header-2019-newyork.jpg" class="img-fluid" /></div>

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
              <p class="lead font-weight-bold mb-1">Join us on the East Coast waterfront for AgileCamp New York Metropolitan!</p>
              <p class="lead">
                The New York Metropolitan area is an unforgettable place comprised of endless iconic attractions.
                There’s no shortage of restaurants, events, and things to do in the area, which is why we are thrilled to host AgileCamp in this region.
                The conference is set right on the water at the Hyatt Regency Center in Jersey City, providing a stunning view New York City skyline.
              </p>
              <p class="lead">
                With our Keynote Speakers announced, we are curating an awesome program for you.
                Our full program will be announced mid-August.
                Meanwhile, register by September 4th to take advantage of early-bird discounts for both individuals and groups!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="bg-gradient-gray" id="featuredSpeakerSection">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Featured Speakers</h2>
          </div>
        </div>

        <dave-snowden />
        <michael-stanier />
      </section>
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
            <sched-embed class="py-2" page="/" :sched-id="event.schedId" />
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

            <a class="btn btn-secondary px-3 mx-2 my-2" target="_blank" :href="event.travelDocLink">Map &amp; Directions</a>
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

// Speakers
import DaveSnowden from '@/components/speakers/DaveSnowden'
import MichaelStanier from '@/components/speakers/MichaelStanier'

export default {
  components: {
    BecomeSponsorRow,
    GoogleMap,
    SchedEmbed,

    // Speakers
    DaveSnowden,
    MichaelStanier
  },

  data () {
    return {
      // Event data
      event: process.env.events.year2019.newYorkMetro,

      isSpecialShown: false
    }
  },

  computed: {
    schedLink () {
      return `https://${this.event.schedId}`
    }
  }
}
</script>
