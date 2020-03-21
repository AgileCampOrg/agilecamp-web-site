<template>
  <div>
    <div class="bg-2018 bg-2018-northwest pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <div
              class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center"
            >
              <red-star />

              <span class="h2 mt-4 text-uppercase"
                >Northwest/<wbr />Portland</span
              >
              <span class="h4 mt-1">September 14, 2018</span>
              <span class="h5 mt-1 text-success"
                >Nike World Headquarters, Beaverton,&nbsp;OR</span
              >

              <a
                class="btn btn-secondary btn-sm px-3 my-3"
                role="button"
                :href="registerLink"
                target="_blank"
                >Event Ended</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-blur">
      <section class="container py-4">
        <div class="row pt-2">
          <div class="col-12 text-white">
            <p class="body-copy font-size-110">
              Join us at
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('travelSection')"
                >Nike World Headquarters</a
              >
              on September 14, 2018, for the Agile and Lean communities’ premier
              conference and networking event. At AgileCamp Northwest/Portland,
              you will join an international gathering of Agile thought-leaders,
              business transformation experts, top coaches, and practitioners
              for an intensive, high impact day of education and networking.
              There’s something for everyone at AgileCamp! Bring your team, your
              managers, your energy and your appetite!
            </p>
          </div>
        </div>
      </section>
    </div>

    <past-year-lineup />

    <div class="bg-gradient-gray">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Featured Speakers</h2>
          </div>
        </div>

        <div id="speakerAlisonLevine" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-alison-levine-port.jpg"
                alt="Alison Levine"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Alison Levine</h4>
            <p class="body-copy text-muted">
              Alison Levine served as team captain of the first American Women’s
              Everest Expedition, climbed the highest peak on each continent,
              and skied to both the North and South Poles &mdash; a feat known
              as the Adventure Grand Slam, which fewer than forty people in the
              world have achieved.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                In January 2008, she made history as the first American to
                complete a 600-mile traverse from west Antarctica to the South
                Pole following the route of legendary explorer Reinhold Messner.
                She made history again in 2016 when she completed two first
                ascents: Hall Peak in Antarctica and Khang Karpo in Nepal.
              </p>
              <p key="p2" class="body-copy">
                Levine spent four years as an adjunct professor at the United
                States Military Academy at West Point in the Department of
                Behavioral Sciences and Leadership, and is board and faculty
                member at the Thayer Leader Development Group at West Point. She
                was a contributing author to the book
                <em
                  >Leadership in Dangerous Situations: A Handbook for the Armed
                  Forces, Emergency Services and First Responders</em
                >
                (Naval Institute Press). She also serves as a Senior Fellow at
                the Coach K Center on Leadership &amp; Ethics at Duke
                University.
              </p>
              <p key="p3" class="body-copy">
                She is the author of the New York Times best-seller
                <em
                  >On the Edge: Leadership Lessons from Mount Everest and other
                  Extreme Environments</em
                >. Having spent prolonged periods of time in some of the world’s
                most dangerous and inhospitable places (including Wall Street),
                she tackles the topics of creating cohesive teams, taking
                responsible risks and developing no-nonsense leaders that can
                succeed in times of uncertainty.
              </p>
            </read-more>
          </div>
        </div>

        <david-marquet />

        <div id="speakerGeetaWilson" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-geeta-wilson-port-2018.jpg"
                alt="Geeta Wilson"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Geeta Wilson</h4>
            <p class="body-copy text-muted">
              Geeta Wilson is an innovative, transformational Customer
              Experience visionary with both domestic and international
              experience in start-ups and Fortune 500 companies. She is a
              dynamic, results-oriented leader who brings the spirit of a
              start-up to large matrixed organizations while returning
              measurable business impact.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                In her role as VP of Consumer Experience at Humana, Geeta has
                built a customer-centric movement that leverages Lean Six Sigma,
                Design Thinking, Lean Start-up, and Agile to accelerate
                experience improvements for Humana’s health plan members.
              </p>
              <p key="p2" class="body-copy">
                Geeta and her team engage rapidly evolving technologies while
                balancing analog consumer experiences with on-demand digital
                platforms. Using big-data analytics, artificial intelligence,
                machine learning, and omni-channel capabilities, the team
                supports Humana’s Integrated Care Delivery strategy for engaging
                its members on their health journey.
              </p>
              <p key="p3" class="body-copy">
                In 2018 the Humana FastStart Lab, founded by Geeta, was honored
                with two CX Innovation Awards from the Customer Experience
                Professionals Association (CXPA). The winning projects focused
                on AI-based real-time Voice of the Customer feedback and parsing
                big data to optimize the customer journey.
              </p>
              <p key="p4" class="body-copy">
                In 2017 Geeta was recognized by MM&amp;M as one of its Top 40
                Healthcare Transformers and by American City Business Journals
                in its annual &ldquo;People to Know&rdquo; edition. She has been
                featured in Forbes, The Wall Street Journal, and Inc. Magazine.
              </p>
            </read-more>
          </div>
        </div>
      </section>
    </div>

    <div id="programSection" class="bg-color-white">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Program</h2>
          </div>
        </div>

        <div v-if="schedId" class="row">
          <div class="col-12">
            <sched-embed
              class="py-2"
              page="/directory/speakers"
              :sched-id="schedId"
            />
          </div>
        </div>

        <div v-else class="row">
          <div class="col-12 py-2">
            <p class="lead">2018 is shaping up to be the best AgileCamp yet!</p>

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

        <div v-if="schedId" class="row">
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
        <div class="row my-4">
          <div class="col-12 col-md-6 py-2">
            <h2 class="text-uppercase">Event Location</h2>

            <p>
              <a :href="directionsLink" target="_blank">{{ placeName }}</a
              ><br />
              One Bowerman Drive, Beaverton, Oregon 97006<br />
              Venue phone: <a href="tel:1-503-671-6453">(503) 671-6453</a>
            </p>

            <h2 class="text-uppercase">Travel</h2>

            <div class="list-group">
              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                <a href="#" class="text-muted" @click.prevent="toggleTravel(0)"
                  >By car</a
                >
                <nike-hq-by-car v-if="shownTravelIndex === 0" />
              </div>

              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                <a href="#" class="text-muted" @click.prevent="toggleTravel(1)"
                  >Parking and ADA access</a
                >
                <nike-hq-parking v-if="shownTravelIndex === 1" />
              </div>

              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                <a href="#" class="text-muted" @click.prevent="toggleTravel(2)"
                  >Public transportation</a
                >
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
import PastYearLineup from '@/components/PastYearLineup'
import ReadMore from '@/components/ReadMore'
import RedStar from '@/components/RedStar'
import SchedEmbed from '@/components/SchedEmbed'

// Speakers
import DavidMarquet from '@/components/speakers/DavidMarquet'

// Travel
import NikeHqByCar from '@/components/travel/NikeHqByCar'
import NikeHqByTransit from '@/components/travel/NikeHqByTransit'
import NikeHqParking from '@/components/travel/NikeHqParking'

export default {
  components: {
    PastYearLineup,
    ReadMore,
    RedStar,
    SchedEmbed,

    // Speakers
    DavidMarquet,

    // Travel
    NikeHqByCar,
    NikeHqByTransit,
    NikeHqParking
  },

  data() {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,

      // Event info
      registerLink:
        'https://www.eventbrite.com/e/agile-agilecamp-northwest-2018-registration-43714048897',
      schedId: 'agilecampportlandnorthwest2.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=12366104606468305817',
      latLngLiteral: { lat: 45.5102932, lng: -122.8305969 },
      placeId: 'ChIJYV-FNcMOlVQRmXPdA586nas',
      // SEE: https://developers.google.com/places/place-id
      placeName: 'Nike - Tiger Woods Conference Center',

      // Travel info
      shownTravelIndex: -1
    }
  },

  computed: {
    schedLink() {
      return `https://${this.schedId}`
    }
  },

  methods: {
    toggleTravel(index) {
      this.shownTravelIndex = this.shownTravelIndex === index ? -1 : index

      this.$root.$options.$tracker.trackAction('toggle_travel', {
        shown_travel_index: this.shownTravelIndex
      })
    }
  }
}
</script>
