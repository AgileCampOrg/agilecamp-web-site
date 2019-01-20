<template>
  <div>
    <div class="bg-ac-sf pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <div class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center">
              <red-star />

              <span class="h3 mt-4 text-uppercase">San Francisco</span>
              <span class="h4 mt-1">November 30</span>
              <span class="h5 mt-1 text-success">Mission Bay Conference Center, San Francisco, CA</span>

              <a class="btn btn-danger btn-sm px-3 my-3" role="button" :href="registerLink" target="_blank">SOLD OUT</a>

              <div class="alert alert-secondary mt-2 px-3 py-1" role="alert">
                Certified Scrum: The Toyota Way

                <span style="white-space: pre;"><a class="alert-link" :href="alertLink" target="_blank">Sold out.</a></span>
              </div>
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

    <div class="bg-color-red">
      <section class="container py-2">
        <div class="row pt-1">
          <div class="order-1 order-lg-1 col-4 col-lg-3 offset-2 offset-lg-0 d-flex flex-row flex-nowrap justify-content-center align-items-center py-2">
            <a href="http://hyperdriveagile.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-hyperdrive-white.png" style="width: 80%;"/>
            </a>
          </div>

          <div class="order-3 order-lg-2 col-12 col-lg-6 text-white body-copy pt-2">
            <p>
              Up your game and get ahead of the pack by registering now for the debut of a new ICAgile certified course “Certified Scrum: The Toyota Way.”
              Hyperdrive Agile and Toyota are sponsoring this class in concert with the AgileCamp San Francisco.
              Be one of the first to be certified!
            </p>
            <p>
              For new and experienced students.
              Taught by Nigel Thurlow, Toyota Connected Chief of Agile.

              <a class="link-underline" :href="alertLink" target="_blank">Learn&nbsp;more.</a>
            </p>
          </div>

          <div class="order-2 order-lg-3 col-4 col-lg-3 d-flex flex-row flex-nowrap justify-content-center align-items-center py-2">
            <a href="http://www.toyotaconnected.com" target="_blank" class="text-center">
              <img src="~assets/images/sponsor-toyotaconnected-white.png" style="width: 30%;"/>
            </a>
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
            <read-more class="text-muted" button-class="btn-success px-3">
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

        <div class="row py-2" id="speakerAhmedSidky">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-ahmed-sidky-port.jpg" alt="Ahmed Sidky">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Ahmed Sidky</h4>
            <p class="body-copy text-muted">
              Ahmed Sidky, Ph.D. is the Head of Development Management at Riot Games where he leads a team of 80 internal agile delivery leaders.
              Ahmed is also the President of the International Consortium for Agile (ICAgile.com) and the co-founder of the Business Agility Institute (businessagility.institute).
            </p>
            <read-more class="text-muted" button-class="btn-success px-3">
              <p class="body-copy" key="p1">
                Throughout his career, Ahmed has led a number of Fortune 100 companies through large-scale agile transformations using his culture-led transformation approach, which focuses on changing and introducing organizational habits critical to sustaining agility.
              </p>
              <p class="body-copy" key="p2">
                He is the co-author of <em>Becoming Agile in an Imperfect World,</em> and is a seasoned speaker who has made several keynote appearances worldwide.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row py-2" id="speakerLyssaAdkins">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-lyssa-adkins-port.jpg" alt="Lyssa Adkins">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Lyssa Adkins</h4>
            <p class="body-copy text-muted">
              Lyssa Adkins is a coach, facilitator, teacher and inspirer.
              Her current focus is improving the performance of top leadership teams and Boards of Directors through insightful facilitation and organization systems coaching.
              She also wonders if Agile can accelerate the mission of folks working on the effects of climate change.
            </p>
            <read-more class="text-muted" button-class="btn-success px-3">
              <p class="body-copy" key="p1">
                For years, Lyssa has been a passionate player in the Agile Coaching profession.
                In 2010, she co-founded the Agile Coaching Institute and currently serves as President Emerita as well as co-leads ACI's competence-based coaching curriculum.
                She is the author of <em>Coaching Agile Teams</em>, which is still a top-10 Agile book years after publication.              </p>
              <p class="body-copy" key="p2">
                Lyssa holds an alphabet soup of certifications: Certified Enterprise Coach (CEC), ICAgile Expert in Agile Coaching (ICE-AC), Project Management Professional (PMP), Six Sigma Green Belt (SSGB), Organization and Relationship Systems Certified Coach (ORSCC).
                She is also a trained Co-Active Coach and Leader.
                In 2018, she is engaged as a student in an intense certification program in Integral Facilitation.
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

    <div class="bg-ac-main-blur">
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
import GoogleMap from '@/components/GoogleMap'
import ReadMore from '@/components/ReadMore'
import RedStar from '@/components/RedStar'
import SchedEmbed from '@/components/SchedEmbed'

export default {
  components: {
    BecomeSponsorRow,
    GoogleMap,
    ReadMore,
    RedStar,
    SchedEmbed
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,

      // Event info
      alertLink: 'https://www.eventbrite.com/e/certified-scrum-the-toyota-way-2-day-course-tickets-50881770746',
      registerLink: 'https://www.eventbrite.com/e/agile-agilecamp-san-francisco-bay-area-2018-registration-43798886649',
      schedId: 'agilecampsanfrancisco2018.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=14630148899230845512',
      latLngLiteral: { lat: 37.7678058, lng: -122.3955059 },
      // SEE: https://developers.google.com/places/place-id
      placeId: 'ChIJD1Pt_s5_j4ARSAq69ei6CMs',
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
