<template>
  <div>
    <div class="bg-ac-sf pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <register-san-francisco :shows-prominent-register="true" />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-main-blur">
      <section class="container py-4">
        <div class="row pt-2">
          <div class="col-12 text-white">
            <p class="body-copy font-size-110">
              On November 30th, San Francisco will open her Golden Gates for AgileCamp San Francisco 2018.
              Join us in that beautiful “City by the Bay” for the Agile and Lean communities’ premier conference and networking event.
              The event will be held at the <a href="/" class="link-underline" @click.prevent="scrollToId('travelSection')">Mission Bay Conference Center</a> just a few miles from the heart of Silicon Valley.
              The conference will include three major keynote addresses and 20 sessions and workshops.
              It will focus on the critical role Agile can play in Organizational Transformation.
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

          <div class="col-6 col-lg-3 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://nike.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-nike-white.png" style="width: 90%;" />
            </a>
          </div>

          <div class="col-6 col-lg-3 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="http://www.brattoninc.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-bratton-white.png" style="width: 75%;" />
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
            <a href="https://disciplinedagileconsortium.org" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-dac-white-2018.png" style="width: 100%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://icagile.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-ica-white.png" style="width: 80%;" />
            </a>
          </div>

          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://www.scrumalliance.org" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-scrumalliance-white.png" style="width: 100%;" />
            </a>
          </div>
        </div>

        <!-- Silver -->
        <div class="row pt-4">
          <div class="col-12 h3 text-uppercase text-white" style="opacity: 0.5;">Silver</div>
        </div>

        <div class="row pb-2">
          <div class="col-4 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap justify-content-center align-items-center">
            <a href="https://propellerconsulting.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-propeller-white.png" style="width: 90%;" />
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
              1675 Owens Street, San Francisco, California 94158<br />
              Venue phone: <a href="tel:1-866-431-8273">(866) 431-8273</a>
            </p>

            <h2 class="text-uppercase">Travel</h2>

            <div class="list-group">
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(0)">By car</a>
                <div class="small mt-2" v-if="shownTravelIndex === 0">
                  <strong>From 101 North/SFO Airport</strong>
                  <ol>
                    <li>Exit onto Vermont St</li>
                    <li>Right on 16th St, crossing the railroad tracks</li>
                    <li>Left on to Owens St</li>
                    <li>1675 Owens St is located on your RIGHT</li>
                  </ol>

                  <strong>From 280 North</strong>
                  <ol>
                    <li>Exit at Mariposa St, turn left and drive 2 blocks</li>
                    <li>Right on Mississippi St and go 3 blocks</li>
                    <li>Right on 16th St, crossing the railroad tracks</li>
                    <li>Left onto Owens St</li>
                    <li>1675 Owens St is located on your RIGHT</li>
                  </ol>

                  <strong>From East Bay / Bay Bridge</strong>
                  <ol>
                    <li>Exit at Ninth St and stay in the LEFT lane</li>
                    <li>Left on 8th St and go 2 blocks</li>
                    <li>Left on Brannan St and go 1 block</li>
                    <li>Right on 7th St</li>
                    <li>Left on 16th St, crossing the railroad tracks</li>
                    <li>Left onto Owens St</li>
                    <li>1675 Owens St is located on your RIGHT</li>
                  </ol>

                  <strong>From North Bay / Golden Gate Bridge</strong>
                  <ol>
                    <li>After crossing the Golden Gate Bridge, drive EAST on 101 towards downtown (Doyle Dr)</li>
                    <li>Exit at Downtown/Lombard St onto Richardson Ave which becomes Lombard St</li>
                    <li>Continue on Lombard St</li>
                    <li>Right on Van Ness Ave</li>
                    <li>After crossing Market St, continue on South Van Ness Ave</li>
                    <li>Left on 16th St, crossing the railroad tracks</li>
                    <li>Left onto Owens St</li>
                    <li>1675 Owens St is located on your RIGHT</li>
                  </ol>
                </div>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(1)">Parking</a>
                <div class="small mt-2" v-if="shownTravelIndex === 1">
                  <p>Mission Bay Conference Center is located within the William J. Rutter Center at UCSF.</p>
                  <p>A public parking garage is located adjacent to the building.</p>
                  <p>Parking fees should be paid at the payment window of the garage before exiting.</p>
                  <p>Rates are as follows: $3.50/hour up to 8 hours or $28 for the whole day.</p>

                  <img class="img-fluid" src="~assets/images/travel-mission-bay-parking.png" />
                </div>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(2)">Public transportation</a>
                <div class="small mt-2" v-if="shownTravelIndex === 2">
                  <strong>Via MUNI</strong>
                  <p>
                    The T Third Street MUNI light rail picks up at the 4th and King St Caltrain Station as well as the Embarcadero and BART Station.
                    The appropriate stop is the UCSF Mission Bay Station on 3rd St opposite the campus.
                    For MUNI information visit <a href="http://www.511.org/" target="_blank">511</a> or <a href="https://www.sfmta.com/" target="_blank">SFMTA</a>.
                  </p>

                  <strong>Via BART</strong>
                  <p>
                    Disembark at the 16th St Mission BART Station.
                    For Bay Area Rapid Transit information visit <a href="https://www.bart.gov/" target="_blank">BART</a>.
                  </p>

                  <ul>
                    <li>
                      Option 1: Pick up the Red Line UCSF shuttle on the NE corner of the intersection.
                      The shuttle runs every 15 minutes and brings you to the William J. Rutter Center (2nd stop).
                      For UCSF shuttle information visit <a href="http://campuslifeservices.ucsf.edu/transportation/" target="_blank">UCSF Campus Life Services</a>.
                    </li>
                    <li>
                      Option 2: Pick up 55 MUNI bus line on the SW corner of the intersection.
                      Disembark at the 4th St / 16th St stop.
                      Walk one block WEST and turn right onto Owens St. MBCC will the 2nd building on the RIGHT.
                      For MUNI information visit <a href="http://www.511.org/" target="_blank">511</a> or <a href="https://www.sfmta.com/" target="_blank">SFMTA</a>.
                    </li>
                  </ul>

                  <strong>Via Mission Bay Shuttle</strong>
                  <p>
                    Pick up is located on 5th St cross streets of Market St in front of the entrance of Westfield Mall.
                    Take Mission Bay Shuttle West Route and disembark at Owens at MBCC.
                    For Mission Bay transportation information/schedule visit <a href="http://missionbaytma.org/" target="_blank">Mission Bay MTA</a>.
                  </p>
                </div>
              </div>

              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted" @click.prevent="toggleTravel(3)">Hotels</a>
                <div class="small mt-2" v-if="shownTravelIndex === 3">
                  <strong>Discount for AgileCamp San Francisco Bay Area Attendees</strong>

                  <p class="mt-3">
                    <a class="btn btn-sm btn-secondary mr-2" href="https://gc.synxis.com/rez.aspx?Hotel=75030&Chain=1003&promo=MBAY" target="_blank">Hotel Zelos</a>
                    <a class="btn btn-sm btn-secondary" href="https://res.windsurfercrs.com/ibe/details.aspx?propertyid=14840&rate=MBCC&nono=1" target="_blank">Hotel VIA</a>
                  </p>
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
import RegisterSanFrancisco from '@/components/RegisterSanFrancisco'
import SchedEmbed from '@/components/SchedEmbed'
import YouTubeCard from '@/components/YouTubeCard'

export default {
  components: {
    BecomeSponsorRow,
    ContactSection,
    GoogleMap,
    ReadMore,
    RegisterSanFrancisco,
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
      directionsLink: 'https://www.google.com/maps?cid=14630148899230845512',
      latLngLiteral: {lat: 37.7678058, lng: -122.3955059},
      placeId: 'ChIJD1Pt_s5_j4ARSAq69ei6CMs',
      // SEE: https://developers.google.com/places/place-id
      placeName: 'Mission Bay Conference Center',

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