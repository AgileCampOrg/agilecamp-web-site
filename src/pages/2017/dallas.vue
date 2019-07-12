<template>
  <div class="pt-header">
    <div class="bg-color-blue-dk-2 border-bottom border-dark">
      <section class="container">
        <div class="row px-2 py-2">
          <div class="col-12 py-2 text-center">
            <h1 class="color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400">Dallas</h1>
            <h2 class="color-white display-vw-3 font-weight-bold ml-1">December 1st, 2017</h2>
            <h2 class="color-white-alpha-50 display-vw-4 font-weight-bold ml-1">
              Irving Convention Center<br />
              Irving, Texas
            </h2>
          </div>
          <div class="col-12 py-4 text-center">
            <p class="body-copy color-white">
              Join us on December 1st, 2017 for AgileCamp Dallas!
              See below for <a href="/" class="link-underline" @click.prevent="scrollToId('programSection')">program</a> details and to <a class="link-underline" :href="registerLink" target="_blank">register</a> for AgileCamp.
            </p>
          </div>
          <div class="col-12 py-4 text-center">
            <a class="btn btn-lg btn-secondary" role="button" :href="registerLink" target="_blank">Event Ended</a>
          </div>
        </div>
      </section>
    </div>

    <past-year-lineup />

    <div class="bg-color-gray-lt-2">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 text-center text-white">Featured Speakers</h1>
          </div>
        </div>

        <ahmed-sidky text-class="text-white" />

        <div class="row text-white py-2" id="speakerEmCampbellPretty">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid img-brighten-110" src="~assets/images/speaker-em-campbell-pretty-port.jpg" alt="Em Campbell-Pretty">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Em Campbell-Pretty</h4>
            <p class="body-copy">
              Em Campbell-Pretty is the author of the Amazon Number #1 Best Seller: <em>Tribal Unity.</em>
              She is an internationally acclaimed business strategist, speaker and one of Australia’s leading Enterprise Agile consultants.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                At the heart of Em’s success is her passion for creating cultures of transparency, lean leadership, learning, innovation and fun.
              </p>
              <p class="body-copy" key="p2">
                Em is a SAFe&reg; Fellow and an active member of the global Agile community.
                She is a thought leader on scaling culture and creating agile tribes.
                Her commitment to building great leaders and transforming culture has made her a sort after speaker at conferences around the globe.
              </p>
            </read-more>
          </div>
        </div>

        <david-marquet text-class="text-white" />
      </section>
    </div>

    <div class="bg-color-blue-dk-2">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="display-3 text-center text-white">Program</h1>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12" id="programSection">
            <sched-embed class="py-2" page="/directory/speakers" :sched-id="schedId" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary" :href="schedLink" target="_blank">View the Schedule and Directory</a>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray" id="travelSection">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Getting to AgileCamp</h1>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-12 col-md-6 py-2">
            <h3 class="text-uppercase">Event Location</h3>
            <p>
              <a :href="directionsLink" target="_blank">{{ placeName }}</a><br />
              500 West Las Colinas Boulevard, Irving, Texas 75039<br />
              Venue phone: <a href="tel:1-972-252-7476">(972) 252-7476</a>
            </p>
          </div>

          <div class="col-12 col-md-6 py-2">
            <google-map icon="/AgileCamp_map_marker_icon.png" style="height: 460px;"
              :directions-link="directionsLink"
              :lat-lng-literal="latLngLiteral"
              :place-id="placeId"
              :title="placeName" />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray-lt-2">
      <section class="container py-4">
        <div class="row text-white">
          <twitter-timeline class="col-12 col-md-10 offset-md-1 py-2"
            :data-source="twitterDataSource"
            :options="twitterOptions" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import PastYearLineup from '@/components/PastYearLineup'
import ReadMore from '@/components/ReadMore'
import SchedEmbed from '@/components/SchedEmbed'
import TwitterTimeline from '@/components/TwitterTimeline'

// Speakers
import AhmedSidky from '@/components/speakers/AhmedSidky'
import DavidMarquet from '@/components/speakers/DavidMarquet'

export default {
  components: {
    GoogleMap,
    PastYearLineup,
    ReadMore,
    SchedEmbed,
    TwitterTimeline,

    // Speakers
    AhmedSidky,
    DavidMarquet
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      twitterLink: process.env.twitterLink,

      // Live feed
      twitterDataSource: {
        sourceType: 'profile',
        screenName: process.env.twitterScreenName
      },
      twitterOptions: {
        tweetLimit: 3
      },

      // Event info
      registerLink: 'https://www.eventbrite.com/e/agilecamp-dallas-2017-registration-34757472536',
      schedId: 'agilecampdallas2017.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps/place/Irving+Convention+Center+at+Las+Colinas/@32.878001,-96.9452897,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xaae568269589f1f6!8m2!3d32.878001!4d-96.943101',
      latLngLiteral: { lat: 32.878001, lng: -96.9452897 },
      placeId: 'ChIJt0VtiJiCToYR9vGJlSZo5ao',
      placeName: 'Irving Convention Center',

      // Travel info
      shownTravelIndex: -1
    }
  },

  computed: {
    schedLink () {
      return `https://${this.schedId}`
    }
  },

  methods: {
    toggleTravel (index) {
      this.shownTravelIndex = this.shownTravelIndex === index ? -1 : index

      this.$root.$options.$tracker.trackAction('toggle_travel', {
        shown_travel_index: this.shownTravelIndex
      })
    }
  }
}
</script>
