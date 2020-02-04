<template>
  <div class="pt-header">
    <div class="bg-color-orange-dk-2 border-bottom border-dark">
      <section class="container">
        <div class="row px-2 py-2">
          <div class="col-12 py-2 text-center">
            <h1
              class="color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400"
            >
              Silicon Valley
            </h1>
            <h2 class="color-white display-vw-3 font-weight-bold ml-1">
              November 6th, 2017
            </h2>
            <h2 class="color-white-alpha-50 display-vw-4 font-weight-bold ml-1">
              Santa Clara Convention Center<br />
              Santa Clara, California
            </h2>
          </div>
          <div class="col-12 py-4 text-center">
            <p class="body-copy color-white">
              Join us on November 6th, 2017 for AgileCamp Silicon Valley in the
              heart of technology innovation! Agilists from across the West
              Coast will converge for a career changing day. Join hundreds of
              professionals in igniting a path of an Agile enterprise. This year
              we are excited for keynote presentations from
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('speakerBarryOReilly')"
                >Barry O’Reilly</a
              >, best-selling author of Lean Enterprise, and
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('speakerDougKirkpatrick')"
                >Doug Kirkpatrick</a
              >, TEDx speaker and author of Beyond Empowerment: The Age of the
              Self-Managed Organization. You’ll also choose from 20 of workshops
              on Leadership, Product, Leadership, Innovation, Agility and much
              more. See below for
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('programSection')"
                >program</a
              >
              details and to
              <a class="link-underline" :href="registerLink" target="_blank"
                >register</a
              >
              for AgileCamp.
            </p>
          </div>
          <div class="col-12 py-4 text-center">
            <a
              class="btn btn-lg btn-secondary"
              role="button"
              :href="registerLink"
              target="_blank"
              >Event Ended</a
            >
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

        <div id="speakerBarryOReilly" class="row text-white py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid img-brighten-110"
                src="~assets/images/speaker-barry-o-reilly-port.jpg"
                alt="Barry O'Reilly"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Barry O’Reilly</h4>
            <p class="body-copy">
              Barry O’Reilly is a business advisor, entrepreneur, and author who
              has pioneered the intersection of business model innovation,
              product development, organizational design, and culture
              transformation. Barry works with business leaders and teams from
              global organizations that seek to invent the future, not fear it.
            </p>
            <read-more>
              <p key="p1" class="body-copy">
                Every day, Barry works with many of the world’s leading
                companies to break the vicious cycles that spiral businesses
                toward death by enabling experimentation and learning to unlock
                the insights required for better decision making and higher
                performance and results.
              </p>
              <p key="p2" class="body-copy">
                Barry is co-author of the international bestseller
                <em
                  >Lean Enterprise: How High Performance Organizations Innovate
                  at Scale</em
                >
                &mdash; included in the Eric Ries Lean series, and a Harvard
                Business Review must read for CEOs and business leaders. He is
                an internationally sought-after speaker, frequent writer and
                contributor to The Economist, Strategy+Business, and MIT Sloan
                Management Review.
              </p>
              <p key="p3" class="body-copy">
                Barry is Faculty at Singularity University, advising and
                coaching on Singularity’s executive and accelerator programs
                based in San Francisco, and throughout the globe.
              </p>
              <p key="p4" class="body-copy">
                Barry is also founder and CEO of ExecCamp, the entrepreneurial
                experience for executives, and management consultancy Antennae.
              </p>
            </read-more>
          </div>
        </div>

        <div id="speakerDougKirkpatrick" class="row text-white py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid img-brighten-110"
                src="~assets/images/speaker-doug-kirkpatrick-port.jpg"
                alt="Doug Kirkpatrick"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Doug Kirkpatrick</h4>
            <p class="body-copy">
              Doug Kirkpatrick is an organizational change consultant, TEDx and
              keynote speaker, executive coach, author, and educator. He is a
              regular contributor to the Huffington Post Blog on Great Work
              Cultures, and a partner in NuFocus Strategic Group, an
              international consulting firm where he leads organizational change
              and education initiatives.
            </p>
            <read-more>
              <p key="p1" class="body-copy">
                Kirkpatrick began his career in the manufacturing sector,
                principally with The Morning Star Company, a world leader in the
                food industry, as a financial controller. He now engages with
                Leadwise Community, People-Centric Organizations, Great Work
                Cultures, Work Revolution and other vibrant organizations and
                leaders to co-create the future of management.
              </p>
            </read-more>
          </div>
        </div>

        <div id="speakerJenBennett" class="row text-white py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid img-brighten-110"
                src="~assets/images/speaker-jen-bennett-port.jpg"
                alt="Jen Bennett"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Jen Bennett</h4>
            <p class="body-copy">
              Jen, a Technical Director in the Office of the CTO at Google
              Cloud, brings a passion to inspire customers to transform their
              business through data, analytics and machine learning.
            </p>
            <read-more>
              <p key="p1" class="body-copy">
                Prior to Google, Jen was the GM and VP Product Management of
                Manufacturing Software at GE Digital focusing on digital
                transformation leveraging data, analytics and intelligence to
                optimize people, process and machines. Prior to GE, Jen spent 6
                years at Cisco Systems in Emerging Technology and Cloud
                Collaboration Technology Group and 9 years at Avid
                Technology/Pinnacle Systems.
              </p>
              <p key="p2" class="body-copy">
                Jen holds a Bachelor’s of Science in Electrical Engineering from
                Cornell University and a Master’s of Science in BioEngineering
                from the University of Pittsburgh where her thesis focused on
                functional MRI. Jen is an Agile evangelist, Co-Active coach and
                InnovationGames facilitator.
              </p>
            </read-more>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-orange-dk-2">
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
          <div id="programSection" class="col-12">
            <sched-embed
              class="py-2"
              page="/directory/speakers"
              :sched-id="schedId"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary" :href="schedLink" target="_blank"
              >View the Schedule and Directory</a
            >
          </div>
        </div>
      </section>
    </div>

    <div id="travelSection" class="bg-color-gray">
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
              <a :href="directionsLink" target="_blank">{{ placeName }}</a
              ><br />
              5001 Great America Parkway, Santa Clara, California 95054<br />
              Venue phone: <a href="tel:1-408-748-7000">(408) 748-7000</a>
            </p>
          </div>

          <div class="col-12 col-md-6 py-2">
            <google-map
              icon="/AgileCamp_map_marker_icon.png"
              style="height: 460px;"
              :directions-link="directionsLink"
              :lat-lng-literal="latLngLiteral"
              :place-id="placeId"
              :title="placeName"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray-lt-2">
      <section class="container py-4">
        <div class="row text-white">
          <twitter-timeline
            class="col-12 col-md-10 offset-md-1 py-2"
            :data-source="twitterDataSource"
            :options="twitterOptions"
          />
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2">
            <h1 class="text-center">2017 Silicon Valley Sponsors</h1>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Title</span></h3>
          </div>

          <div
            class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="http://hyperdriveagile.com"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-hyperdrive.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="http://www.brattoninc.com"
              target="_blank"
              class="mx-4 my-4"
              ><img class="img-fluid" src="~assets/images/sponsor-bratton.png"
            /></a>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Gold</span></h3>
          </div>

          <div
            class="col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"
          >
            <a href="https://www.digite.com" target="_blank" class="mx-4 my-4"
              ><img class="img-fluid" src="~assets/images/sponsor-digite.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-8 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="https://www.northeastern.edu/graduate/"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-northeastern-pm.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-6 offset-sm-3 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="https://agilityhealthradar.com"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-agilityhealth.png"
            /></a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Bronze</span></h3>
          </div>

          <div
            class="col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"
          >
            <a href="https://icagile.com" target="_blank" class="mx-2 my-4"
              ><img class="img-fluid" src="~assets/images/sponsor-ica.png"
            /></a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 py-4 text-center">
            <button
              type="button"
              class="btn btn-lg btn-secondary"
              @click="navTo('index', 'sponsorSection')"
            >
              Sponsor AgileCamp!
            </button>
          </div>
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

export default {
  components: {
    GoogleMap,
    PastYearLineup,
    ReadMore,
    SchedEmbed,
    TwitterTimeline
  },

  data() {
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
      registerLink:
        'https://www.eventbrite.com/e/agilecamp-silicon-valley-2017-registration-34720139873',
      schedId: 'agilecampsiliconvalley2017.sched.com',

      // Location info
      directionsLink:
        'https://www.google.com/maps/place/Santa+Clara+Convention+Center/@37.4046706,-121.9774356,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc1ebf7e60770d2e4!8m2!3d37.4046706!4d-121.9752469',
      latLngLiteral: { lat: 37.4046706, lng: -121.9774356 },
      placeId: 'ChIJuVD6TcnJj4AR5NJwB-b368E',
      placeName: 'Santa Clara Convention Center',

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
