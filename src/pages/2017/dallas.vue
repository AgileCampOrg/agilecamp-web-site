<template>
  <div class="pt-header">
    <div class="bg-color-black">
      <div class="container">
        <div class="row">
          <div class="col-12 font-weight-bold text-center text-uppercase text-white px-2 py-2">
            Past Year’s Lineup
          </div>
        </div>
      </div>
    </div>

    <div class="bg-color-blue-dk-2 border-bottom border-dark">
      <section class="container">
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
            <a class="btn btn-lg btn-secondary" role="button" :href="registerLink" target="_blank">Event Ended</a>
          </div>
        </div>
      </section>
    </div>

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
                He is the co-author of <em>Becoming Agile in an Imperfect World,</em> and is a seasoned speaker who has made several keynote appearances worldwide.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerEmCampbellPretty">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid img-brighten-110" src="~assets/images/speaker-em-campbell-pretty-port.jpg" alt="Em Campbell-Pretty">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Em Campbell-Pretty</h4>
            <p class="body-copy">
              Em Campbell-Pretty is the author of the Amazon Number #1 Best Seller: <em>Tribal Unity.</em>
              She is an internationally acclaimed business strategist, speaker and one of Australia’s leading Enterprise Agile consultants.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                At the heart of Em’s success is her passion for creating cultures of transparency, lean leadership, learning, innovation and fun.
              </p>
              <p class="body-copy" key="p2">
                Em is a SAFe&reg; Fellow and an active member of the global Agile community.
                She is a thought leader on scaling culture and creating agile tribes.
                Her commitment to building great leaders and transforming culture has made her a sort after speaker at conferences around the globe.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerDavidMarquet">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-david-marquet-port.jpg" alt="David Marquet">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">David Marquet</h4>
            <p class="body-copy">
              David Marquet is an expert on leadership and organizational design, former submarine commander, and author of Amazon #1 Best Seller: <em>Turn the Ship Around!</em> and <em>Turn Your Ship Around!</em>
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                David Marquet imagines a work place where everyone engages and contributes their full intellectual capacity, a place where people are healthier and happier because they have more control over their work &mdash; a place where everyone is a leader.
              </p>
              <p class="body-copy" key="p2">
                A 1981 U.S. Naval Academy graduate, Captain Marquet served in the U.S. submarine force for 28 years.
                After being assigned to command the nuclear powered submarine USS Santa Fe &mdash; then ranked last in retention and operational standing &mdash; he realized the traditional leadership approach of &ldquo;take control, give orders,&rdquo; wouldn’t work.
                He &ldquo;turned the ship around&rdquo; by treating the crew as leaders, not followers, and giving control, not taking control.
                This approach took the Santa Fe from &ldquo;worst to first,&rdquo; achieving the highest retention and operational standings in the navy.
              </p>
              <p class="body-copy" key="p3">
                After Captain Marquet’s departure, the Santa Fe continued to win awards and promoted a disproportionate number of officers and enlisted men to leadership positions, including ten subsequent submarine captains.
                Stephen R. Covey said it was the most empowering organization he’d ever seen and wrote about Captain Marquet’s leadership practices in his book, <em>The 8th Habit</em>.
              </p>
              <p class="body-copy" key="p4">
                Captain Marquet is the author of <em>Turn the Ship Around! A True Story of Turning Followers Into Leaders.</em> Fortune magazine named it the #1 must-read business book of the year, and USA Today listed it as one of the top 12 business books of all time.
                He is also the author of <em>Turn Your Ship Around! A workbook for implementing Intent-Based Leadership.</em>
              </p>
              <p class="body-copy" key="p5">
                Captain Marquet retired from the Navy in 2009, and now speaks to audiences around the globe who want to create empowering work environments that release the passion, initiative, and intellect of each person.
                This bold and highly effective framework is summarized as &ldquo;give control, create leaders.&rdquo;
                He is a life member of the Council on Foreign Relations, and in 2015 was named to the American Management Association’s &ldquo;Leaders to Watch&rdquo; list.
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
        <div class="row text-white">
          <twitter-timeline class="col-12 col-md-10 offset-md-1 py-2"
            :data-source="twitterDataSource"
            :options="twitterOptions" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import ReadMore from '@/components/ReadMore'
import SchedEmbed from '@/components/SchedEmbed'
import TwitterTimeline from '@/components/TwitterTimeline'

export default {
  components: {
    GoogleMap,
    ReadMore,
    SchedEmbed,
    TwitterTimeline
  },

  data () {
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
      registerLink: 'https://www.eventbrite.com/e/agilecamp-dallas-2017-registration-34757472536',
      schedId: 'agilecampdallas2017.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps/place/Irving+Convention+Center+at+Las+Colinas/@32.878001,-96.9452897,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xaae568269589f1f6!8m2!3d32.878001!4d-96.943101',
      latLngLiteral: { lat: 32.878001, lng: -96.9452897 },
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
