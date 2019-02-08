<template>
  <div>
    <div class="bg-header pt-header pb-4">
      <div class="bg-header-shape bg-header-shape-red-black">
        <section class="container pt-header-shape">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1">
              <div class="row align-items-end">
                <div class="col-12 col-lg-auto mr-auto pb-2 text-white">
                  <h1><span class="text-uppercase mr-2">Chicago</span> May&nbsp;6</h1>
                  <h4 class="font-weight-light font-italic">Chase Tower, 10 South Dearborn, Chicago, Illinois</h4>
                </div>

                <div class="col-auto pb-3">
                  <a class="btn btn-danger px-4" role="button" :href="registerLink" target="_blank">Register Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-fluid container-auto px-0 pt-3">
          <div class="row no-gutters">
            <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
              <div><img src="~assets/images/header-2019-chicago.jpg" class="img-fluid" /></div>

              <div style="height: 100%;" class="col-5 px-0">
                <google-map icon="/AgileCamp_map_marker_place.png" style="height: 100% !important;"
                  :directions-link="directionsLink"
                  :disable-default-ui="true"
                  :lat-lng-literal="latLngLiteral"
                  :place-id="placeId"
                  :title="placeName" />
              </div>
            </div>
          </div>
        </section>

        <section class="container pt-3">
          <div class="row">
            <div class="col-12 col-xl-10 offset-xl-1 pb-4 text-white">
              <p class="lead font-weight-bold mb-1">Our newest AgileCamp location is in the most vibrant city in the Midwest!</p>
              <p class="lead">
                Chicago is a city with a rich history, vibrant food scene, beloved museums, and world-class architecture.
                The city is buzzing with enriching experiences, which is why we’re thrilled to bring AgileCamp to this magnificent location inside Chase Tower downtown Chicago.
              </p>
            </div>
          </div>
        </section>
      </div>
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
            <read-more class="text-muted">
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
            <read-more class="text-muted">
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

        <div class="row py-2" id="speakerSteveDenning">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-steve-denning-port.jpg" alt="Nigel Thurlow">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Steve Denning</h4>
            <p class="body-copy text-muted">
              Steve Denning is the author of the book, <em>The Age of Agile: How Smart Companies Are Transforming the Way Work Gets Done</em> (AMACOM, 2018).
              He is also the former Program Director, Knowledge Management at the World Bank.
            </p>
            <read-more class="text-muted">
              <p class="body-copy" key="p1">
                He now works with organizations in the U.S., Europe, Asia and Australia on leadership, innovation, Agile management and organizational storytelling.
                Steve’s innovative work has been recognized world-wide.
                His clients have included many Fortune 500 companies.
              </p>
              <p class="body-copy" key="p2">
                He also leads the SD Learning Consortium, a group of major private sector firms that are sharing knowledge about the Agile transformation journey.
              </p>
              <p class="body-copy" key="p3">
                You can follow Steve on Twitter at @stevedenning.
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
<!--
            <google-map icon="/AgileCamp_map_marker_star.png" style="height: 460px;"
              :directions-link="directionsLink"
              :lat-lng-literal="latLngLiteral"
              :place-id="placeId"
              :title="placeName" />
 -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BecomeSponsorRow from '@/components/BecomeSponsorRow'
import GoogleMap from '@/components/GoogleMap'
import ReadMore from '@/components/ReadMore'
import SchedEmbed from '@/components/SchedEmbed'

export default {
  components: {
    BecomeSponsorRow,
    GoogleMap,
    ReadMore,
    SchedEmbed
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,

      // Event info
      alertLink: 'https://www.eventbrite.com/e/scrum-the-toyota-way-tickets-48621019779?aff=AgileCampWebsiteSTTW',
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474',
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
