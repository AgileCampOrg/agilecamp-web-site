<template>
  <div class="pt-header">

    <section class="container-fluid bg-color-blue-dk-2 border-bottom-black">
      <div class="row bg-color-black">
        <div class="col-12 color-white font-weight-bold text-center text-uppercase px-2 py-2">
          The 2017 Lineup
        </div>
      </div>
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
          <a class="btn btn-lg btn-secondary" role="button" :href="registerLink" target="_blank">Register Now</a>
        </div>
      </div>
    </section>

    <div class="bg-color-gray-lt-2">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 text-center text-white">Featured Speakers</h1>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerAhmedSidky">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-ahmed-sidky-port.jpg" alt="Ahmed Sidky">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Ahmed Sidky</h4>
            <p class="body-copy">
              Ahmed Sidky, Ph.D. is the Head of Development Management at Riot Games where he leads a team of 80 internal agile delivery leaders.
              Ahmed is also President of the International Consortium for Agile (ICAgile.com).
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                Throughout his career, Ahmed has led a number of Fortune 100 companies through large-scale agile transformations using his culture-led transformation approach, which focuses on changing and introducing organizational habits critical to sustaining agility.
              </p>
              <p class="body-copy" key="p2">
                He is the co-author of “Becoming Agile in an Imperfect World”, and is a seasoned speaker who has made several keynote appearances worldwide.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerJenBennett">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid img-brighten-110" src="~assets/images/speaker-jen-bennett-port.jpg" alt="Jen Bennett">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Jen Bennett</h4>
            <p class="body-copy">
              Jen, a Technical Director in the Office of the CTO at Google Cloud, brings a passion to inspire customers to transform their business through data, analytics and machine learning.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                Prior to Google, Jen was the GM and VP Product Management of Manufacturing Software at GE Digital focusing on digital transformation leveraging data, analytics and intelligence to optimize people, process and machines.
                Prior to GE, Jen spent 6 years at Cisco Systems in Emerging Technology and Cloud Collaboration Technology Group and 9 years at Avid Technology/Pinnacle Systems.
              </p>
              <p class="body-copy" key="p2">
                Jen holds a Bachelor’s of Science in Electrical Engineering from Cornell University and a Master’s of Science in BioEngineering from the University of Pittsburgh where her thesis focused on functional MRI.
                Jen is an Agile evangelist, Co-Active coach and InnovationGames facilitator.
              </p>
            </read-more>
          </div>
        </div>
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
            <google-map icon="/AgileCamp_map_marker.png" style="height: 460px;"
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
<!--
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 text-center text-white">Live Feed</h1>
          </div>
        </div>
 -->
        <div class="row text-white">
          <twitter-timeline class="col-12 py-2"
            :data-source="twitterDataSource"
            :options="twitterOptions" />
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2">
            <h1 class="text-center">2017 Dallas Sponsors</h1>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Title</span></h3>
          </div>

          <div class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://hyperdriveagile.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive.png" /></a>
          </div>

          <div class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.brattoninc.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-bratton.png" /></a>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Gold</span></h3>
          </div>

          <div class="col-12 col-sm-6 offset-sm-1 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://improving.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-improving.png" /></a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Bronze</span></h3>
          </div>

          <div class="col-12 col-sm-6 offset-sm-1 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.thei4group.com" target="_blank" class="mx-2 my-4"><img class="img-fluid" src="~assets/images/sponsor-i4group.png" /></a>
          </div>
        </div>
      </section>
    </div>

    <contact-section class-left="bg-color-gray-lt-1" class-right="bg-color-gray-lt-2" />
  </div>
</template>

<script>
import ContactSection from '../components/ContactSection'
import GoogleMap from '../components/GoogleMap'
import ReadMore from '../components/ReadMore'
import SchedEmbed from '../components/SchedEmbed'
import TwitterTimeline from '../components/TwitterTimeline'
import YouTubeCard from '../components/YouTubeCard'

export default {
  components: {
    ContactSection,
    GoogleMap,
    ReadMore,
    SchedEmbed,
    TwitterTimeline,
    YouTubeCard
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
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
      latLngLiteral: {lat: 32.878001, lng: -96.9452897},
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
