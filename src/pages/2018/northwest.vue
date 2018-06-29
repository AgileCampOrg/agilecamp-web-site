<template>
  <div>
    <div class="bg-ac-northwest pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <div class="d-flex flex-column align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
                <svg width="54px" height="48px" viewBox="0 0 72 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon id="Red-Star" stroke="#FFFFFF" fill="#EA2227" points="36 52.2383152 13.7507764 63 18 40.2063859 -1.99840144e-15 24.0638587 24.8753882 20.7383152 36 0 47.1246118 20.7383152 72 24.0638587 54 40.2063859 58.2492236 63"></polygon>
                  </g>
                </svg>

                <span class="h2 mt-3 text-uppercase">Northwest/<wbr />Portland</span>
                <span class="h4 mt-1">September 14, 2018</span>
                <span class="h5 mt-1 text-success">Nike World Headquarters<br />Beaverton, Oregon</span>

                <a class="btn btn-danger btn-sm px-4 mt-3" role="button" :href="registerLink" target="_blank">Register Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4">
        <div class="row pt-2">
          <div class="col-12 text-white">
            <p class="body-copy font-size-110">
              Join us at <a href="/" class="link-underline" @click.prevent="scrollToId('travelSection')">Nike World Headquarters</a> on September 14, 2018, for the Agile and Lean communities’ premier conference and networking event.
              At AgileCamp Northwest/Portland, you will join an international gathering of Agile thought-leaders, business transformation experts, top coaches, and practitioners for an intensive, high impact day of education and networking.
              There’s something for everyone at AgileCamp!
              Bring your team, your managers, your energy and your appetite!
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

        <div class="row py-2" id="speakerDavidMarquet">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-david-marquet-port.jpg" alt="David Marquet">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">David Marquet</h4>
            <p class="body-copy text-muted">
              David Marquet is an expert on leadership and organizational design, former submarine commander, and author of Amazon #1 Best Seller: <em>Turn the Ship Around!</em> and <em>Turn Your Ship Around!</em>
            </p>
            <read-more class="text-muted" button-class="btn-success px-4">
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

        <div class="row py-2" id="speakerGeetaWilson">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-geeta-wilson-port-2018.jpg" alt="Geeta Wilson">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Geeta Wilson</h4>
            <p class="body-copy text-muted">
              Geeta Wilson is an innovative, transformational Customer Experience visionary with both domestic and international experience in start-ups and Fortune 500 companies. She is a dynamic, results-oriented leader who brings the spirit of a start-up to large matrixed organizations while returning measurable business impact.
            </p>
            <read-more class="text-muted" button-class="btn-success px-4">
              <p class="body-copy" key="p1">
                In her role as VP of Consumer Experience at Humana, Geeta has built a customer-centric movement that leverages Lean Six Sigma, Design Thinking, Lean Start-up, and Agile to accelerate experience improvements for Humana’s health plan members.
              </p>
              <p class="body-copy" key="p2">
                Geeta and her team engage rapidly evolving technologies while balancing analog consumer experiences with on-demand digital platforms. Using big-data analytics, artificial intelligence, machine learning, and omni-channel capabilities, the team supports Humana’s Integrated Care Delivery strategy for engaging its members on their health journey.
              </p>
              <p class="body-copy" key="p3">
                In 2018 the Humana FastStart Lab, founded by Geeta, was honored with two CX Innovation Awards from the Customer Experience Professionals Association (CXPA). The winning projects focused on AI-based real-time Voice of the Customer feedback and parsing big data to optimize the customer journey.
              </p>
              <p class="body-copy" key="p4">
                In 2017 Geeta was recognized by MM&amp;M as one of its Top 40 Healthcare Transformers and by American City Business Journals in its annual &ldquo;People to Know&rdquo; edition. She has been featured in Forbes, The Wall Street Journal, and Inc. Magazine.
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
          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://hyperdriveagile.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-hyperdrive-white.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://nike.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-nike-white.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://www.brattoninc.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-bratton-white.png" style="width: 80%;" />
            </a>
          </div>
        </div>

        <!-- Platinum -->
        <div class="row pt-4">
          <div class="col-12 h3 text-uppercase text-white" style="opacity: 0.5;">Platinum</div>
        </div>

        <div class="row pb-2">
          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://www.kforce.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-kforce-white.png" style="width: 90%;" />
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
              <img src="~assets/images/sponsor-ica-white.png" style="width: 90%;" />
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
            <h3 class="text-uppercase">Event Location</h3>
            <p>
              <a :href="directionsLink" target="_blank">{{ placeName }}</a><br />
              One Bowerman Drive, Beaverton, Oregon 97006<br />
              Venue phone: <a href="tel:1-503-671-6453">(503) 671-6453</a>
            </p>

            <h3 class="text-uppercase">Travel</h3>

            <div class="list-group">
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(0)">By car</a>
                <div class="small mt-2" v-if="shownTravelIndex === 0">
                  <strong>Nike World Headquarters from PDX</strong>
                  <ol>
                    <li>Start going toward the AIRPORT EXIT on NE AIRPORT WAY</li>
                    <li>Merge RIGHT onto I-205 SOUTH toward Portland</li>
                    <li>Merge RIGHT onto I-84 WEST toward Portland</li>
                    <li>Merge LEFT onto I-5 SOUTH toward Salem/Beaverton</li>
                    <li>Merge LEFT onto I-405 NORTH toward City Center/Beaverton</li>
                    <li>Take exit 1D onto US-26 WEST toward Beaverton</li>
                    <li>Take exit 67 for MURRAY BLVD</li>
                    <li>Turn LEFT on NW MURRAY RD</li>
                    <li>Turn RIGHT on ONE BOWERMAN DRIVE</li>
                  </ol>
                  <img class="img-fluid" src="~assets/images/travel-nike-car.jpg" />
                </div>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(1)">Parking and ADA access</a>
                <div class="small mt-2 d-flex flex-column" v-if="shownTravelIndex === 1">
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-a.png" />
                    </div>
                    <div>
                      Enter Nike WHQ from SW Murray Blvd. Make an immediate right and follow directional signs to the L.A. Garage. Park on any level. Elevators are available.
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-in.png" />
                    </div>
                    <div>
                      Inbound traffic.
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-out.png" />
                    </div>
                    <div>
                      Outbound traffic.
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-dash.png" />
                    </div>
                    <div>
                      Follow directional signs between the L.A. Garage and the Tiger Woods Center. The walk will take approximately 8 minutes.
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-b.png" />
                    </div>
                    <div>
                      Drop-off and pick-up are available at the front of the Tiger Woods Center for mobility impaired attendees. Enter Nike WHQ from SW Walker Road. Vehicles must then be parked at the L.A. Garage.
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-3">
                    <div>
                      <img class="img-icon-sm mr-2" src="~assets/images/travel-nike-parking-ban.png" />
                    </div>
                    <div>
                      Sections of Nike WHQ are inaccessible due to ongoing expansion projects. Please proceed with caution and obey signs.
                    </div>
                  </div>

                  <img class="img-fluid" src="~assets/images/travel-nike-parking-2018.jpg" />
                </div>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(2)">Public transportation</a>
                <div class="small mt-2" v-if="shownTravelIndex === 2">
                  <strong>Nike World Headquarters via MAX</strong>
                  <ol>
                    <li>Board the Blue Line headed West</li>
                    <li>Exit Train at Beaver Creek Stop</li>
                    <li>Follow the platform in the direction your train traveled toward</li>
                    <li>Exit the platform to the right, into the woods</li>
                    <li>Follow the paved path through the woods to Jenkins Rd</li>
                  </ol>
                  <img class="img-fluid" src="~assets/images/travel-nike-max-system.png" />
                  <hr />
                  <img class="img-fluid" src="~assets/images/travel-nike-max-whq.jpg" />
                </div>
              </div>
            </div>
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
import SchedEmbed from '@/components/SchedEmbed'
import YouTubeCard from '@/components/YouTubeCard'

export default {
  components: {
    BecomeSponsorRow,
    ContactSection,
    GoogleMap,
    ReadMore,
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
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-northwest-2018-registration-43714048897',
      // schedId: 'agilecamppacificnorthwest2017.sched.com',
      schedId: null,

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=12366104606468305817',
      latLngLiteral: {lat: 45.5102932, lng: -122.8305969},
      placeId: 'ChIJYV-FNcMOlVQRmXPdA586nas',
      // SEE: https://developers.google.com/places/place-id
      placeName: 'Nike - Tiger Woods Conference Center',

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
