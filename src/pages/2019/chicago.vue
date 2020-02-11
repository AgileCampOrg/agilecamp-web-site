<template>
  <div>
    <div class="bg-header pt-header pb-4">
      <div class="bg-header-shape bg-header-shape-red-black">
        <section class="container pt-header-shape">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
              <div class="row align-items-end">
                <div class="col-12 col-lg-auto mr-auto pb-2 text-white">
                  <h1>
                    <span class="text-uppercase mr-2">Chicago</span> May&nbsp;6
                  </h1>
                  <h5 class="font-weight-light font-italic">
                    {{ event.address }}
                  </h5>
                </div>

                <div class="col-auto pb-3">
                  <a
                    class="btn btn-secondary px-4"
                    role="button"
                    :href="event.registerLink"
                    target="_blank"
                    >Event Ended</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid container-auto px-0 pt-3">
          <div class="row no-gutters">
            <div
              class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center"
            >
              <div>
                <img
                  src="~assets/images/header-2019-chicago.jpg"
                  class="img-fluid"
                />
              </div>

              <div style="height: 100%;" class="col-5 px-0">
                <google-map
                  icon="/AgileCamp_map_marker_place.svg"
                  :icon-size="[50, 50]"
                  style="height: 100% !important;"
                  :directions-link="event.directionsLink"
                  :disable-default-ui="true"
                  :lat-lng-literal="event.latLngLiteral"
                  :place-id="event.placeId"
                  :title="event.placeName"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="container pt-3">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1 pb-4 text-white">
              <p class="lead font-weight-bold mb-1">
                Our newest AgileCamp location is in the most vibrant city in the
                Midwest!
              </p>
              <p class="lead">
                Chicago is a city with a rich history, vibrant food scene,
                beloved museums, and world-class architecture. The city is
                buzzing with enriching experiences, which is why we’re thrilled
                to bring AgileCamp to this magnificent location inside Chase
                Tower downtown Chicago.
              </p>
              <p class="lead">
                With our
                <a
                  href="/"
                  @click.prevent="scrollToId('featuredSpeakerSection')"
                  >Keynote Speakers</a
                >
                announced, we are curating an awesome program for you. Our full
                program will be announced March 1. Meanwhile,
                <a :href="event.registerLink" target="_blank">register</a> by
                April 6 to take advantage of early-bird discounts for both
                individuals and&nbsp;groups!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <past-year-lineup />

    <div id="featuredSpeakerSection" class="bg-gradient-gray">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Featured Speakers</h2>
          </div>
        </div>

        <david-marquet />
        <jurgen-appello />
      </section>
    </div>

    <div id="programSection" class="bg-color-white">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Program</h2>
          </div>
        </div>

        <div v-if="event.schedId" class="row">
          <div class="col-12">
            <sched-embed
              class="py-2"
              page="/directory/speakers"
              :sched-id="event.schedId"
            />
          </div>
        </div>

        <!-- TODO: Move to component -->
        <div v-else class="row">
          <div class="col-12 py-2">
            <p class="lead">2019 is shaping up to be the best AgileCamp yet!</p>

            <p class="lead">
              <a
                href="/"
                class="link-underline"
                @click.prevent="navTo('index', 'pastYearsSection')"
                >Check out prior</a
              >
              AgileCamps for a sample of all the great speakers and topics
              discussed.
            </p>
          </div>
        </div>

        <div v-if="event.schedId" class="row">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary px-3" :href="schedLink" target="_blank"
              >View the Schedule and Directory</a
            >
          </div>
        </div>
      </section>
    </div>

    <div id="travelSection">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 pb-3">
            <h2 class="text-uppercase mb-2">Event Location</h2>

            <p>
              <a :href="event.directionsLink" target="_blank">{{
                event.placeName
              }}</a
              ><br />
              {{ event.address }}<br />
            </p>

            <a
              class="btn btn-secondary px-3 mx-2 my-2"
              target="_blank"
              :href="event.directionsLink"
              >Map &amp; Directions</a
            >
            <a
              class="btn btn-secondary px-3 mx-2 my-2"
              target="_blank"
              :href="event.travelDocLink"
              >Getting Around Guide</a
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import PastYearLineup from '@/components/PastYearLineup'
import SchedEmbed from '@/components/SchedEmbed'

// Speakers
import DavidMarquet from '@/components/speakers/DavidMarquet'
import JurgenAppello from '@/components/speakers/JurgenAppello'

export default {
  components: {
    GoogleMap,
    PastYearLineup,
    SchedEmbed,

    // Speakers
    DavidMarquet,
    JurgenAppello
  },

  data() {
    return {
      // Event data
      event: process.env.events.year2019.chicago
    }
  },

  computed: {
    schedLink() {
      return `https://${this.event.schedId}`
    }
  }
}
</script>
