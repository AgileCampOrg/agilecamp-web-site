<template>
  <div>
    <div class="bg-ac-dallas pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <register-dallas :shows-prominent-register="true" />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4">
        <div class="row pt-2">
          <div class="col-12 text-white">
            <p class="body-copy font-size-110">
              AgileCamp heads down South on November 2, 2018 for AgileCamp Dallas-Fort Worth.
              Experience the beauty of the Southwest in this region known for its hospitality and fantastic food.
              The conference will include three major keynote addresses and 24 sessions and workshops.
              It will focus on the critical role Agile can play in Organizational Transformation.
              The event will be held at the <a href="/" class="link-underline" @click.prevent="scrollToId('travelSection')">Irving Convention Center</a> in Irving, Texas.
              Reserve your spot by registering today.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-gradient-gray">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Featured Speakers</h2>
          </div>
        </div>

        <div class="row py-2" id="speakerAlisonLevine">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-alison-levine-port.jpg" alt="Alison Levine">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Alison Levine</h4>
            <p class="body-copy text-muted">
              Alison Levine served as team captain of the first American Women’s Everest Expedition, climbed the highest peak on each continent, and skied to both the North and South Poles &mdash; a feat known as the Adventure Grand Slam, which fewer than forty people in the world have achieved.
            </p>
            <read-more class="text-muted" button-class="btn-success px-4">
              <p class="body-copy" key="p1">
                In January 2008, she made history as the first American to complete a 600-mile traverse from west Antarctica to the South Pole following the route of legendary explorer Reinhold Messner.
                She made history again in 2016 when she completed two first ascents: Hall Peak in Antarctica and Khang Karpo in Nepal.
              </p>
              <p class="body-copy" key="p2">
                Levine spent four years as an adjunct professor at the United States Military Academy at West Point in the Department of Behavioral Sciences and Leadership, and is board and faculty member at the Thayer Leader Development Group at West Point.
                She was a contributing author to the book <em>Leadership in Dangerous Situations: A Handbook for the Armed Forces, Emergency Services and First Responders</em> (Naval Institute Press).
                She also serves as a Senior Fellow at the Coach K Center on Leadership &amp; Ethics at Duke University.
              </p>
              <p class="body-copy" key="p3">
                She is the author of the New York Times best-seller <em>On the Edge: Leadership Lessons from Mount Everest and other Extreme Environments</em>.
                Having spent prolonged periods of time in some of the world’s most dangerous and inhospitable places (including Wall Street), she tackles the topics of creating cohesive teams, taking responsible risks and developing no-nonsense leaders that can succeed in times of uncertainty.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row py-2" id="speakerNigelThurlow">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-nigel-thurlow-port.jpg" alt="Nigel Thurlow">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Nigel Thurlow</h4>
            <p class="body-copy text-muted">
              Nigel Thurlow is a Lean Evangelist, Continuous Improvement Leader, Quality Advocate, Agile &amp; Scrum Coach, and a member of The Machine That Changed the World.
              Considered by many as an expert in Lean implementation and process improvement, gained from his early Toyota background, he evangelizes quality improvement and waste reduction through the implementation of systems thinking, agile practices, and the Scrum framework.
            </p>
            <read-more class="text-muted" button-class="btn-success px-4">
              <p class="body-copy" key="p1">
                Nigel led the successful Scrum transformation at 3M Healthcare Information Systems, and was a principal trainer and coach at Scrum Inc together with the co-creator of Scrum.
                Nigel has taught and coached in notable companies such as GE, Bose, 3M, Microsoft, MIT and Toyota.
              </p>
              <p class="body-copy" key="p2">
                In 2017 following 2 1/2 years training and certifying over 2000 people as a Certifying Scrum Trainer at Scrum Inc, Nigel has moved back to his roots and re-joined Toyota as the Chief of Agile with Toyota Connected, the Toyota company building the future of connected vehicle technologies.
              </p>
              <p class="body-copy" key="p3">
                Nigel is now leveraging the power of TPS and The Toyota Way to enhance and develop Agility in Lean, and has recently launched the official Toyota Scrum training, Scrum The Toyota Way.
                An approach combining the Scrum Framework with the Toyota Production System.
              </p>
            </read-more>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white" id="programSection">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Program</h2>
          </div>
        </div>

        <div class="row" v-if="schedId">
          <div class="col-12">
            <sched-embed class="py-2" page="/directory/speakers" :sched-id="schedId" />
          </div>
        </div>

        <div class="row" v-else>
          <div class="col-12 py-2">
            <p class="lead">2018 is shaping up to be the best AgileCamp yet!</p>

            <p class="lead"><a href="/" class="link-underline" @click.prevent="navTo('index', 'pastYearsSection')">Check out prior</a> AgileCamps for a sample of all the great speakers and topics discussed.</p>
          </div>
        </div>

        <div class="row" v-if="schedId">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary" :href="schedLink" target="_blank">View the Schedule and Directory</a>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4" id="sponsorSection">
        <become-sponsor-row class="border-bottom border-light" />

        <!-- Title -->
        <div class="row pt-4">
          <div class="col-12 h3 text-uppercase text-white" style="opacity: 0.5;">Title</div>
        </div>

        <div class="row pb-2">
          <div class="col-6 col-lg-3 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://hyperdriveagile.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-hyperdrive-white.png" style="width: 100%;" />
            </a>
          </div>
        </div>

        <!-- Gold -->
        <div class="row pt-4">
          <div class="col-12 h3 text-uppercase text-white" style="opacity: 0.5;">Gold</div>
        </div>

        <div class="row pb-2">
          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://icagile.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-ica-white.png" style="width: 80%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://disciplinedagileconsortium.org" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-dac-white-2018.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://www.scrumalliance.org" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-scrumalliance-white.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://www.eliassen.com/agile/" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-eliassengroup-white.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://improving.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-improving-white.png" style="width: 100%;" />
            </a>
          </div>
        </div>

        <!-- Bronze -->
        <div class="row pt-4">
          <div class="col-12 h3 text-uppercase text-white" style="opacity: 0.5;">Bronze</div>
        </div>

        <div class="row pb-2">
          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://www.infoq.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-infoq-white.png" style="width: 80%;" />
            </a>
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
              <a :href="directionsLink" target="_blank">{{ placeName }}</a><br />
              500 West Las Colinas Boulevard, Irving, Texas 75039<br />
              Venue phone: <a href="tel:1-972-252-7476">(972) 252-7476</a>
            </p>
          </div>

          <div class="col-12 col-md-6 py-2">
            <google-map icon="/AgileCamp_map_marker_star.png" style="height: 460px;"
              :directions-link="directionsLink"
              :lat-lng-literal="latLngLiteral"
              :place-id="placeId"
              :title="placeName" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BecomeSponsorRow from '@/components/BecomeSponsorRow'
import ContactSection from '@/components/ContactSection'
import GoogleMap from '@/components/GoogleMap'
import ReadMore from '@/components/ReadMore'
import RegisterDallas from '@/components/RegisterDallas'
import SchedEmbed from '@/components/SchedEmbed'
import YouTubeCard from '@/components/YouTubeCard'

export default {
  components: {
    BecomeSponsorRow,
    ContactSection,
    GoogleMap,
    ReadMore,
    RegisterDallas,
    SchedEmbed,
    YouTubeCard
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,

      // Event info
      // schedId: 'agilecampportlandnorthwest2.sched.com',
      schedId: null,

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=12314363271041380854',
      latLngLiteral: {lat: 32.8780798, lng: -96.9454123},
      placeId: 'ChIJt0VtiJiCToYR9vGJlSZo5ao',
      // SEE: https://developers.google.com/places/place-id
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
