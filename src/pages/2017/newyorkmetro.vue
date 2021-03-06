<template>
  <div class="pt-header">
    <div class="bg-color-teal-dk-2 border-bottom border-dark">
      <section class="container">
        <div class="row px-2 py-2">
          <div class="col-12 py-2 text-center">
            <h1
              class="color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400"
            >
              New York Metro
            </h1>
            <h2 class="color-white display-vw-3 font-weight-bold ml-1">
              September 25th, 2017
            </h2>
            <h2 class="color-white-alpha-50 display-vw-4 font-weight-bold ml-1">
              Prudential Tower Conference Center<br />
              Newark, New Jersey
            </h2>
          </div>
          <div class="col-12 py-4 text-center">
            <p class="body-copy color-white">
              Join us on September 25th, 2017 for AgileCamp New York Metro!
              Agilists from across the globe will converge at the
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('travelSection')"
                >Prudential Financial Tower</a
              >
              for a day of learning and networking. Prudential Financial is a
              proud sponsor of AgileCamp. This year we are excited for keynote
              presentations from
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('speakerGeetaWilson')"
                >Geeta Wilson</a
              >, VP, Consumer Experience &mdash; Enterprise Transformation at
              Humana Inc.,
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('speakerDavidMarquet')"
                >David Marquet</a
              >, author and US Navy Captain (Retired), and
              <a
                href="/"
                class="link-underline"
                @click.prevent="scrollToId('speakerRichSheridan')"
                >Richard Sheridan</a
              >, best-selling author of Joy Inc. You’ll also choose from 20 of
              workshops on Leadership, Product, Leadership, Innovation, Agility
              and much more.
              <!-- See below for <a href="/" class="link-underline" @click.prevent="scrollToId('programSection')">program</a> details and to <a class="link-underline" :href="registerLink" target="_blank">register</a> for AgileCamp. -->
            </p>
          </div>
          <div class="col-12 py-4 text-center">
            <a
              class="btn btn-lg btn-secondary"
              role="button"
              :href="registerLink"
              target="_blank"
              >Sold Out!</a
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

        <div id="speakerGeetaWilson" class="row text-white py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-geeta-wilson-port.jpg"
                alt="Geeta Wilson"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Geeta Wilson</h4>
            <p class="body-copy">
              Geeta Wilson is a highly innovative and transformational Customer
              Experience and Operational Excellence leader with extensive
              domestic and international experience in start-ups, Fortune 500
              companies such as NCR Corporation, and Humana, a Fortune 100
              company.
            </p>
            <read-more>
              <p key="p1" class="body-copy">
                Geeta is the founder of Humana’s FastStart Consumer Experience
                lab, an enterprise customer-centric movement that challenges
                convention and corporate routines. Using methods from Lean
                Start-up, Agile/Scrum, Design Thinking, and Lean Six Sigma to
                accelerate speed-to-market across all lines of business, the
                FastStart team has brought its disruptive CX approach to
                thousands of Humana associates and leaders.
              </p>
              <p key="p2" class="body-copy">
                Geeta has been featured in Forbes, The Wall Street Journal’s CIO
                Journal, and 1:1 Media. She was recognized by American City
                Business Journals (Louisville Business First) among its 2017
                &ldquo;People to Know&rdquo; and by MM&amp;M as one of its 2017
                Top 40 Healthcare Transformers.
              </p>
              <p key="p3" class="body-copy">
                The FastStart lab was honored with a 2016 Customer Experience
                Professionals Association (CXPA) Innovation Award. Geeta’s
                recent speaking engagements focusing on the consumer experience
                include Forrester CXNYC 2016 and 2017 conferences, 2016 CXPA
                Insight Exchange, 2016 Lean Startup conference, and Dreamforce
                2016, the largest tech conference in the world.
              </p>
            </read-more>
          </div>
        </div>

        <david-marquet text-class="text-white" />

        <div id="speakerRichSheridan" class="row text-white py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-rich-sheridan-port.jpg"
                alt="Rich Sheridan"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Rich Sheridan</h4>
            <p class="body-copy">
              Menlo Innovations CEO Rich Sheridan had an all consuming thought
              during a difficult mid-career in the chaotic technology
              industry... things can be better. Much better. He had to find a
              way. His search led him to books, authors and history, including
              recalling childhood visits to Greenfield Village every summer.
            </p>
            <read-more>
              <p key="p1" class="body-copy">
                The excitement of the Edison Menlo Park New Jersey Lab served as
                his siren call to create a workplace filled with camaraderie,
                human energy, creativity and productivity. Ultimately, Rich and
                his co-founder James Goebel invented their own company in 2001
                to &ldquo;end human suffering in the world as it relates to
                technology&rdquo; by returning joy to one of the most unique
                endeavors mankind has ever undertaken: the invention of
                software. Their unique approach to custom software design, they
                named it High-tech Anthropology&reg; has produced custom
                software that delights users rather than frustrating them. The
                programming team creates the software that works every day
                without the emergencies that are all too common in the tech
                industry. The process itself is so interesting that almost 4,000
                people a year travel from around the world just to see how they
                do it. Many spend a week or more studying &ldquo;The Menlo
                Way&rdquo; being taught by the Menlonians who love to share
                their experience and knowledge.
              </p>
              <p key="p2" class="body-copy">
                In 2013, Rich and his publisher Penguin Random House took a
                chance that a business book with the words joy and love on the
                cover might have impact. They had no idea how the world yearned
                for such a message. His best selling book,
                <em>Joy, Inc. &mdash; How We Built a Workplace People Love</em>
                now has Rich traveling the world speaking about joy, creativity,
                and human energy in the workplace.
              </p>
            </read-more>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-teal-dk-2">
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
              655 Broad Street, Newark, New Jersey 07102<br />
              Venue phone: <a href="tel:1-973-802-6000">(973) 802-6000</a>
            </p>

            <h3 class="text-uppercase">Travel</h3>

            <div class="list-group">
              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                Parking
                <div v-if="shownTravelIndex === 0" class="small mt-2">
                  <p>
                    For event parking, we recommend utilizing the Newark NJ
                    Parking Military Park Garage at 42-50 Park Place.
                  </p>
                  <p>
                    <a
                      href="https://nycparking.spplus.com/NJ-Newark-Military-Park-42-50-Park-Place.html"
                      target="_blank"
                      >View Parking Info and Rates</a
                    >
                  </p>
                </div>
              </div>
            </div>
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
            <h1 class="text-center">2017 New York Metro Sponsors</h1>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Title</span></h3>
          </div>

          <div
            class="col-12 col-sm-6 offset-sm-1 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="https://www.prudential.com"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-prudential.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center"
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
            <h3><span class="badge badge-default">Platinum</span></h3>
          </div>

          <div
            class="col-12 col-sm-8 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="http://www.casthighlight.com"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-casthighlight.png"
            /></a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Gold</span></h3>
          </div>

          <div
            class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"
          >
            <a href="https://agilecraft.com" target="_blank" class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-agilecraft.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center"
          >
            <a href="https://www.digite.com" target="_blank" class="mx-4 my-4"
              ><img class="img-fluid" src="~assets/images/sponsor-digite.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-7 offset-sm-1 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="https://disciplinedagileconsortium.org"
              target="_blank"
              class="mx-4 my-4"
              ><img class="img-fluid" src="~assets/images/sponsor-dac.png"
            /></a>
          </div>

          <div
            class="col-12 col-sm-3 d-flex flex-row flex-nowrap align-items-center"
          >
            <a
              href="https://www.daugherty.com"
              target="_blank"
              class="mx-4 my-4"
              ><img
                class="img-fluid"
                src="~assets/images/sponsor-teamdaugherty.png"
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
import PastYearLineup from '@/components/PastYearLineup'
import ReadMore from '@/components/ReadMore'
import SchedEmbed from '@/components/SchedEmbed'
import TwitterTimeline from '@/components/TwitterTimeline'

// Speakers
import DavidMarquet from '@/components/speakers/DavidMarquet'

export default {
  components: {
    PastYearLineup,
    ReadMore,
    SchedEmbed,
    TwitterTimeline,

    // Speakers
    DavidMarquet
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
        'https://www.eventbrite.com/e/agilecamp-new-york-metro-2017-registration-34378215167',
      schedId: 'agilecampnewyorkmetro2017.sched.com',

      // Location info
      directionsLink:
        'https://www.google.com/maps/place/Prudential+Tower/@40.7390714,-74.1727621,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa03018e2b38e8f3c!8m2!3d40.7390714!4d-74.1705734',
      latLngLiteral: { lat: 40.7390714, lng: -74.1727621 },
      placeId: 'ChIJE-StzYFTwokRPI-Os-IYMKA',
      placeName: 'Prudential Tower - Conference Center',

      // Travel info
      shownTravelIndex: 0
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
