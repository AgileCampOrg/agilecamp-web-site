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
                    <span class="text-uppercase mr-2">Portland</span>
                    Sep&nbsp;20
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
                  src="~assets/images/header-2019-portland.jpg"
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
                Gear up for AgileCamp 2019 in the Pacific Northwest!
              </p>
              <p class="lead">
                Portland is a wonderfully eccentric city known for its unique
                and innovative take on craft beer, coffee, and artisanal foods.
                This eclectic, creative hub is the perfect location for
                AgileCamp which will be held at the Nike Headquarters.
              </p>
              <p class="lead">
                With our Keynote Speakers announced, we are curating an awesome
                program for you. Our full program has been announced. Meanwhile,
                register by August 20th to take advantage of early-bird
                discounts for both individuals and&nbsp;groups!
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

        <ahmed-sidky title="Ahmed Sidky with Michael Robillard" />
        <nicola-dourambeis />
        <marty-cagan />
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
          </div>

          <div class="col-12 col-lg-6 pb-3">
            <h2 class="text-uppercase mb-2">Travel</h2>

            <div class="card">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a
                      href="#"
                      class="nav-link"
                      :class="shownTravelIndex === 0 ? 'active' : ''"
                      @click.prevent="toggleTravel(0)"
                      >By car</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      class="nav-link"
                      :class="shownTravelIndex === 1 ? 'active' : ''"
                      @click.prevent="toggleTravel(1)"
                      >Parking</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="#"
                      class="nav-link"
                      :class="shownTravelIndex === 2 ? 'active' : ''"
                      @click.prevent="toggleTravel(2)"
                      >By transit</a
                    >
                  </li>
                </ul>
              </div>

              <div class="card-body">
                <nike-hq-by-car v-if="shownTravelIndex === 0" />
                <nike-hq-parking v-if="shownTravelIndex === 1" />
                <nike-hq-by-transit v-if="shownTravelIndex === 2" />
              </div>
            </div>
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
import AhmedSidky from '@/components/speakers/AhmedSidky'
import MartyCagan from '@/components/speakers/MartyCagan'
import NicolaDourambeis from '@/components/speakers/NicolaDourambeis'

// Travel
import NikeHqByCar from '@/components/travel/NikeHqByCar'
import NikeHqByTransit from '@/components/travel/NikeHqByTransit'
import NikeHqParking from '@/components/travel/NikeHqParking'

export default {
  components: {
    GoogleMap,
    PastYearLineup,
    SchedEmbed,

    // Speakers
    AhmedSidky,
    MartyCagan,
    NicolaDourambeis,

    // Travel
    NikeHqByCar,
    NikeHqByTransit,
    NikeHqParking
  },

  data() {
    return {
      // Event data
      event: process.env.events.year2019.portland,

      // Travel info
      shownTravelIndex: 0
    }
  },

  computed: {
    schedLink() {
      return `https://${this.event.schedId}`
    }
  },

  methods: {
    toggleTravel(index) {
      this.shownTravelIndex = index

      this.$root.$options.$tracker.trackAction('toggle_travel', {
        shown_travel_index: this.shownTravelIndex
      })
    }
  }
}
</script>
