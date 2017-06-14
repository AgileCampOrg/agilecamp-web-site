<template>
  <div class="pt-header">

    <section class="container-fluid bg-color-green-dk-2 border-bottom-black">
      <div class="row bg-color-black">
        <div class="col-12 color-white font-weight-bold text-center text-uppercase px-2 py-2">
          The 2017 Lineup
        </div>
      </div>
      <div class="row px-2 py-2">
        <div class="col-12 py-2 text-center">
            <h1 class="color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400">Northwest</h1>
            <h2 class="color-white display-vw-3 font-weight-bold ml-1">September 6th, 2017</h2>
            <h2 class="color-white-alpha-50 display-vw-4 font-weight-bold ml-1">
              {{ placeName }}<br />
              Beaverton, Oregon
            </h2>
          </a>
        </div>
        <div class="col-12 py-4 text-center">
          <p class="body-copy color-white">
            Join us on September 7th, 2017 for AgileCamp Northwest in beautiful Beaverton Oregon!
            Agilists from across the Pacific Northwest will converge at the Nike World Headquarters for a career changing day of presentations and workshops.
            Nike is a leader in Agile project management and a proud sponsor of AgileCamp.
            This year we are excited for keynote presentations from Nintendo CEO Tom Nook and Hip Hop mogul Jay Z!
            For a complete schedule and to register for AgileCamp click the links below.
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

        <div class="row text-white py-2">
          <div class="col-12 col-md-4 text-center">
            <img class="img-fluid" src="http://via.placeholder.com/320x240" alt="Generic placeholder image">
          </div>
          <div class="col-12 col-md-8 mt-2 text-center text-md-left">
            <h5>Tom Nook</h5>
            <p class="body-copy">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </div>
        </div>

        <div class="row text-white py-2">
          <div class="col-12 col-md-4 text-center">
            <img class="img-fluid" src="http://via.placeholder.com/320x240" alt="Generic placeholder image">
          </div>
          <div class="col-12 col-md-8 mt-2 text-center text-md-left">
            <h5>Jay Z</h5>
            <p class="body-copy">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray">
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
              Tiger Woods Conference Center<br />
              One Bowerman Drive, Beaverton, Oregon 97005<br />
              Venue phone: (503) 671-6453
            </p>

            <h3 class="text-uppercase">Travel</h3>
            <div class="list-group">
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">By car</a>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">Public transportation</a>

                <small class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</small>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">For those with a mobility disability</a>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">Accommodations</a>
              </div>
            </div>
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

    <div class="bg-color-green-dk-2">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="display-3 text-center text-white">Schedule</h1>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <sched-embed class="py-2" sched-id="agilecamppacificnorthwest2017.sched.com" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary" :href="schedLink" target="_blank">View the Schedule and Directory</a>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray-lt-2">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="display-4 text-center text-white">Live Feed</h1>
          </div>
        </div>

        <div class="row text-white">
          <div class="col-12 py-2">
            TODO: Twitter live feed embed here
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2">
            <h1 class="text-center">2017 Northwest Sponsors</h1>
          </div>

          <div class="col-12 py-2">
            TODO: Sponsor logos here
          </div>
        </div>

        <div class="row">
          <div class="col-12 py-4 text-center">
            <button type="button" class="btn btn-lg btn-secondary" @click="navTo('index', 'sponsorSection')">Sponsor AgileCamp!</button>
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
import SchedEmbed from '../components/SchedEmbed'
import YouTubeCard from '../components/YouTubeCard'

export default {
  components: {
    ContactSection,
    GoogleMap,
    SchedEmbed,
    YouTubeCard
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink,

      // Event info
      registerLink: 'https://www.eventbrite.com/e/agilecamp-pacific-northwest-2017-registration-34329061146',
      schedId: 'agilecamppacificnorthwest2017.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps/dir/\'\'/Nike+World+Headquarters/@45.507755,-122.8981865,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x54950ec24d4da46d:0xa6e823d05767d2d0!2m2!1d-122.8281467!2d45.5077764',
      latLngLiteral: {lat: 45.4846189, lng: -122.8755139},
      placeId: 'ChIJbaRNTcIOlVQR0NJnV9Aj6KY',
      placeName: 'Nike World Headquarters'
    }
  },

  computed: {
    schedLink () {
      return `https://${this.schedId}`
    }
  }
}
</script>
