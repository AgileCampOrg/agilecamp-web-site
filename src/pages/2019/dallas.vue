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
                    <span class="text-uppercase mr-2">Dallas</span> Nov&nbsp;1
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
                  src="~assets/images/header-2019-dallas.jpg"
                  class="img-fluid"
                />
              </div>

              <div style="height: 100%;" class="col-5 px-0">
                <a target="_blank" :href="event.directionsLink"
                  ><img
                    src="~assets/images/header-map-2019-dallas.jpg"
                    class="img-fluid"
                /></a>
              </div>
            </div>
          </div>
        </section>

        <section class="container pt-3">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1 pb-4 text-white">
              <p class="lead font-weight-bold mb-1">
                Come learn with us at AgileCamp Dallas, located in one of the
                largest tech hubs in the US!
              </p>
              <p class="lead">
                A city which lives large and thinks big, this magnetic place is
                one of the top tech regions in the nation. Dallas is a true
                cosmopolitan city and a sensational location for our conference
                at the Irving Convention Center.
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

        <dave-snowden />
        <ken-rubin />
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
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PastYearLineup from '@/components/PastYearLineup'
import SchedEmbed from '@/components/SchedEmbed'

// Speakers
import DaveSnowden from '@/components/speakers/DaveSnowden'
import KenRubin from '@/components/speakers/KenRubin'

export default {
  components: {
    PastYearLineup,
    SchedEmbed,

    // Speakers
    DaveSnowden,
    KenRubin
  },

  data() {
    return {
      // Event data
      event: process.env.events.year2019.dallas
    }
  },

  computed: {
    schedLink() {
      return `https://${this.event.schedId}`
    }
  }
}
</script>
