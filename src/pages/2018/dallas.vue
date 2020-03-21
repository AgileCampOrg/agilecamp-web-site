<template>
  <div>
    <div class="bg-2018 bg-2018-dallas pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <div
              class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center"
            >
              <red-star />

              <span class="h3 mt-4 text-uppercase">Dallas–Fort Worth</span>
              <span class="h4 mt-1">November 2, 2018</span>
              <span class="h5 mt-1 text-success"
                >Irving Convention Center, Dallax,&nbsp;TX</span
              >

              <a
                class="btn btn-danger btn-sm px-3 my-3"
                role="button"
                :href="registerLink"
                target="_blank"
                >SOLD OUT</a
              >

              <div class="alert alert-secondary mt-2 px-3 py-1" role="alert">
                Scrum: The Toyota Way Class

                <span style="white-space: pre;"
                  ><a class="alert-link" :href="alertLink" target="_blank"
                    >Sold out.</a
                  ></span
                >
              </div>
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
              AgileCamp heads down South on November 2, 2018 for AgileCamp
              Dallas-Fort Worth. Experience the beauty of the Southwest in this
              region known for its hospitality and fantastic food. The
              conference will include three major keynote addresses and 24
              sessions and workshops. It will focus on the critical role Agile
              can play in Organizational Transformation. The event will be held
              at the
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('travelSection')"
                >Irving Convention Center</a
              >
              in Irving, Texas. Reserve your spot by registering today.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-red">
      <section class="container py-2">
        <div class="row pt-1">
          <div
            class="order-1 order-lg-1 col-4 col-lg-3 offset-2 offset-lg-0 d-flex flex-row flex-nowrap justify-content-center align-items-center py-2"
          >
            <a
              href="http://hyperdriveagile.com"
              target="_blank"
              class="text-center"
            >
              <img
                src="~assets/images/sponsor-hyperdrive-white.png"
                style="width: 80%;"
              />
            </a>
          </div>

          <div
            class="order-3 order-lg-2 col-12 col-lg-6 text-white body-copy pt-2"
          >
            <p>
              Up your game and get ahead of the pack by registering now for the
              debut of a new ICAgile certified course “Scrum: The Toyota Way.”
              Hyperdrive Agile and Toyota are sponsoring this class in concert
              with the AgileCamp Dallas. Be one of the first to be certified!
            </p>
            <p>
              For new and experienced students. Taught by Nigel Thurlow, Toyota
              Connected Chief of Agile.

              <a class="link-underline" :href="alertLink" target="_blank"
                >Learn&nbsp;more.</a
              >
            </p>
          </div>

          <div
            class="order-2 order-lg-3 col-4 col-lg-3 d-flex flex-row flex-nowrap justify-content-center align-items-center py-2"
          >
            <a
              href="http://www.toyotaconnected.com"
              target="_blank"
              class="text-center"
            >
              <img
                src="~assets/images/sponsor-toyotaconnected-white.png"
                style="width: 30%;"
              />
            </a>
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

        <div id="speakerNigelThurlow" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-nigel-thurlow-port.jpg"
                alt="Nigel Thurlow"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Nigel Thurlow</h4>
            <p class="body-copy text-muted">
              Nigel Thurlow is a Lean Evangelist, Continuous Improvement Leader,
              Quality Advocate, Agile &amp; Scrum Coach, and a member of The
              Machine That Changed the World. Considered by many as an expert in
              Lean implementation and process improvement, gained from his early
              Toyota background, he evangelizes quality improvement and waste
              reduction through the implementation of systems thinking, agile
              practices, and the Scrum framework.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                Nigel led the successful Scrum transformation at 3M Healthcare
                Information Systems, and was a principal trainer and coach at
                Scrum Inc together with the co-creator of Scrum. Nigel has
                taught and coached in notable companies such as GE, Bose, 3M,
                Microsoft, MIT and Toyota.
              </p>
              <p key="p2" class="body-copy">
                In 2017 following 2 1/2 years training and certifying over 2000
                people as a Certifying Scrum Trainer at Scrum Inc, Nigel has
                moved back to his roots and re-joined Toyota as the Chief of
                Agile with Toyota Connected, the Toyota company building the
                future of connected vehicle technologies.
              </p>
              <p key="p3" class="body-copy">
                Nigel is now leveraging the power of TPS and The Toyota Way to
                enhance and develop Agility in Lean, and has recently launched
                the official Toyota Scrum training, Scrum The Toyota Way. An
                approach combining the Scrum Framework with the Toyota
                Production System.
              </p>
            </read-more>
          </div>
        </div>

        <div id="speakerSteveDenning" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-steve-denning-port.jpg"
                alt="Nigel Thurlow"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Steve Denning</h4>
            <p class="body-copy text-muted">
              Steve Denning is the author of the book,
              <em
                >The Age of Agile: How Smart Companies Are Transforming the Way
                Work Gets Done</em
              >
              (AMACOM, 2018). He is also the former Program Director, Knowledge
              Management at the World Bank.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                He now works with organizations in the U.S., Europe, Asia and
                Australia on leadership, innovation, Agile management and
                organizational storytelling. Steve’s innovative work has been
                recognized world-wide. His clients have included many Fortune
                500 companies.
              </p>
              <p key="p2" class="body-copy">
                He also leads the SD Learning Consortium, a group of major
                private sector firms that are sharing knowledge about the Agile
                transformation journey.
              </p>
              <p key="p3" class="body-copy">
                You can follow Steve on Twitter at @stevedenning.
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
              500 West Las Colinas Boulevard, Irving, Texas 75039<br />
              Venue phone: <a href="tel:1-972-252-7476">(972) 252-7476</a>
            </p>
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

export default {
  components: {
    PastYearLineup,
    ReadMore,
    RedStar,
    SchedEmbed
  },

  data() {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,

      // Event info
      alertLink:
        'https://www.eventbrite.com/e/scrum-the-toyota-way-tickets-48621019779?aff=AgileCampWebsiteSTTW',
      registerLink:
        'https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474',
      schedId: 'agilecampdallasfortworth2018.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=12314363271041380854',
      latLngLiteral: { lat: 32.8780798, lng: -96.9454123 },
      placeId: 'ChIJt0VtiJiCToYR9vGJlSZo5ao',
      // SEE: https://developers.google.com/places/place-id
      placeName: 'Irving Convention Center',

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
