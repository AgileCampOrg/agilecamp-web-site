<template>
  <div>
    <div class="bg-2018 bg-2018-newyork pt-header">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6">
            <div
              class="d-flex flex-column justify-content-center align-items-center px-4 py-4 bg-color-black-alpha-80 text-white text-center"
            >
              <red-star />

              <span class="h2 mt-4 text-uppercase">New York Metro Area</span>
              <span class="h4 mt-1">September 24, 2018</span>
              <span class="h5 mt-1 text-success"
                >Newark Airport Marriott Hotel, Newark,&nbsp;NJ</span
              >

              <a
                class="btn btn-secondary btn-sm px-3 my-3"
                role="button"
                :href="registerLink"
                target="_blank"
                >Event Ended</a
              >
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-ac-blur">
      <section class="container py-4">
        <div class="row pt-2">
          <div class="col-12 text-white">
            <p class="body-copy font-size-110">
              “Start spreading the news…” AgileCamp New York Metro is set for
              September 24, 2018. Be a part of it! Join us for the Agile and
              Lean communities’ premier conference and networking event. The
              conference will include three major keynote addresses and 20
              sessions and workshops. It will focus on the critical role Agile
              can play in Organizational Transformation. The event will be held
              at the Newark Liberty International Airport Marriott hotel. Bring
              your team, managers, energy and appetite!
            </p>
          </div>
        </div>
      </section>
    </div>

    <past-year-lineup />

    <div class="bg-gradient-gray">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Featured Speakers</h2>
          </div>
        </div>

        <div id="speakerAlisonLevine" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-alison-levine-port.jpg"
                alt="Alison Levine"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Alison Levine</h4>
            <p class="body-copy text-muted">
              Alison Levine served as team captain of the first American Women’s
              Everest Expedition, climbed the highest peak on each continent,
              and skied to both the North and South Poles &mdash; a feat known
              as the Adventure Grand Slam, which fewer than forty people in the
              world have achieved.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                In January 2008, she made history as the first American to
                complete a 600-mile traverse from west Antarctica to the South
                Pole following the route of legendary explorer Reinhold Messner.
                She made history again in 2016 when she completed two first
                ascents: Hall Peak in Antarctica and Khang Karpo in Nepal.
              </p>
              <p key="p2" class="body-copy">
                Levine spent four years as an adjunct professor at the United
                States Military Academy at West Point in the Department of
                Behavioral Sciences and Leadership, and is board and faculty
                member at the Thayer Leader Development Group at West Point. She
                was a contributing author to the book
                <em
                  >Leadership in Dangerous Situations: A Handbook for the Armed
                  Forces, Emergency Services and First Responders</em
                >
                (Naval Institute Press). She also serves as a Senior Fellow at
                the Coach K Center on Leadership &amp; Ethics at Duke
                University.
              </p>
              <p key="p3" class="body-copy">
                She is the author of the New York Times best-seller
                <em
                  >On the Edge: Leadership Lessons from Mount Everest and other
                  Extreme Environments</em
                >. Having spent prolonged periods of time in some of the world’s
                most dangerous and inhospitable places (including Wall Street),
                she tackles the topics of creating cohesive teams, taking
                responsible risks and developing no-nonsense leaders that can
                succeed in times of uncertainty.
              </p>
            </read-more>
          </div>
        </div>

        <div id="speakerJoshSeiden" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-josh-seiden-port.jpg"
                alt="Josh Seiden"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Josh Seiden</h4>
            <p class="body-copy text-muted">
              Josh Seiden is a designer, author and coach who works with teams
              to create great products and services. He helps teams solve real
              problems for customers and create value for businesses. He also
              works as a coach to help teams improve the way they work, build
              more effective collaborations, and enjoy the journey of product
              development.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                He’s a co-founder of Sense & Respond Press, a micro-publisher
                that creates short, focused books on innovation, digital
                transformation, and product management. And he’s the co-author
                of two books: <em>Sense &amp; Respond</em> (from Harvard
                Business Publishing) and <em>Lean UX</em> (from O’Reilly).
              </p>
            </read-more>
          </div>
        </div>

        <div id="speakerMamieJones" class="row py-2">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img
                class="img-fluid"
                src="~assets/images/speaker-mamie-jones-port.jpg"
                alt="Mamie Jones"
              />
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Mamie Jones</h4>
            <p class="body-copy text-muted">
              Mamie Jones is the Pro Connect Senior Vice President of Product
              Development at Intuit. She is responsible for the development and
              operations of the Pro Connect Group’s portfolio of products like
              ProConnect Tax Online, Lacerte and ProSeries, which are used by
              accounting professionals to serve their customers and work with
              State and Federal agencies.
            </p>
            <read-more class="text-muted">
              <p key="p1" class="body-copy">
                Since joining Intuit in 2011, she has led the technology
                transformation for the company’s online product offerings. Under
                her leadership, the Plano campus of Intuit has been recognized
                by the Dallas Business Journal as a Best Place to Work, and
                Intuit was recognized by Fortune as a Great Place to Work in
                Texas. Intuit was the highest-ranking technology company on
                either list. Mamie was also recognized as a Tech Titan in 2016
                by the Dallas Business Journal, and she was awarded Intuit’s CEO
                Leadership Award 2017.
              </p>
              <p key="p2" class="body-copy">
                Prior to joining Intuit, Jones served as the Sr. Vice President
                of Hoovers, a division of Dun and Bradstreet. She led the
                technology transformation to an SOA platform and spearheaded the
                adoption of Agile methodology. This resulted in extraordinary
                developmental improvements, making it possible to focus on game
                changing initiatives. Before joining Hoovers, Jones was the Sr.
                Vice President of Travelocity, managing all aspects of
                technology from development to operations. In one way or
                another, Jones has been professionally involved in the software
                development industry throughout her career.
              </p>
              <p key="p3" class="body-copy">
                Jones has proven her leadership abilities in software design and
                development by creating best-in-class teams dedicated to
                implementing high quality products and innovative solutions.
              </p>
            </read-more>
          </div>
        </div>
      </section>
    </div>

    <div id="programSection" class="bg-color-white">
      <section class="container py-4">
        <div class="row pb-2">
          <div class="col-12">
            <h2 class="text-uppercase">Program</h2>
          </div>
        </div>

        <div v-if="schedId" class="row">
          <div class="col-12">
            <sched-embed
              class="py-2"
              page="/directory/speakers"
              :sched-id="schedId"
            />
          </div>
        </div>

        <div v-else class="row">
          <div class="col-12 py-2">
            <p class="lead">2018 is shaping up to be the best AgileCamp yet!</p>

            <p class="lead">
              <a
                href="/"
                class="link-underline"
                @click.prevent="navTo('index', 'pastYearsSection')"
                >Check out prior</a
              >
              AgileCamps for a sample of all the great speakers and topics
              discussed.
            </p>
          </div>
        </div>

        <div v-if="schedId" class="row">
          <div class="col-12 py-4 text-center">
            <a class="btn btn-secondary px-3" :href="schedLink" target="_blank"
              >View the Schedule and Directory</a
            >
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
              <a :href="directionsLink" target="_blank">{{ placeName }}</a
              ><br />
              1 Hotel Road, Newark, New Jersey 07114<br />
              Hotel phone: <a href="tel:1-973-623-0006">(973) 623-0006</a>
            </p>

            <h2 class="text-uppercase">Travel</h2>

            <div class="list-group">
              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                <a href="#" class="text-muted" @click.prevent="toggleTravel(0)"
                  >By car</a
                >
                <div v-if="shownTravelIndex === 0" class="small mt-2">
                  <p>
                    Newark Airport Marriott Hotel, the only on-premise airport
                    hotel at Newark International Airport, located on the oval
                    site directly in front of Terminal B.
                  </p>
                  <p>
                    ONCE YOU ARRIVE INTO THE NEWARK AIRPORT, PLEASE FOLLOW THE
                    BLUE/WHITE MARRIOTT SIGNS TO DIRECT YOU TO THE HOTEL.
                  </p>

                  <strong>New Jersey Turnpike</strong>
                  <ol>
                    <li>
                      (Northbound/Southbound) Exit 13A or 14 “Newark
                      International Airport”
                    </li>
                    <li>
                      Coming into the Airport follow signs for Marriott Hotel
                    </li>
                  </ol>

                  <strong>Garden State Parkway (Northbound)</strong>
                  <ol>
                    <li>Exit 140 to US 22 East</li>
                    <li>
                      Travel 4 miles to Southbound US 1&9 to Airport Entrance
                      (bear left)
                    </li>
                    <li>Coming into airport follow signs for Marriott Hotel</li>
                  </ol>

                  <strong>Garden State Parkway (Southbound)</strong>
                  <ol>
                    <li>
                      Exit 142 to NJ 24 East/I-78 to Southbound US 1&9 to
                      Airport Entrance (bear right)
                    </li>
                    <li>Coming into airport follow signs for Marriott Hotel</li>
                  </ol>

                  <strong>From George Washington Bridge</strong>
                  <ol>
                    <li>Take New Jersey Turnpike South to Exit 14 or 13A</li>
                    <li>Follow signs for “Newark International Airport”</li>
                    <li>Coming into airport follow signs for Marriott Hotel</li>
                  </ol>

                  <strong>From NYC/Holland Tunnel</strong>
                  <ol>
                    <li>
                      Take I-78/New Jersey Turnpike Extension to Turnpike south
                      to Exit 14 or 13A
                    </li>
                    <li>Follow signs for “Newark International Airport”</li>
                    <li>Coming into airport follow signs for Marriott Hotel</li>
                  </ol>

                  <strong>From Interstate 80 East</strong>
                  <ol>
                    <li>
                      Take I-80 East to New Jersey Turnpike South to Exit 14 or
                      13A
                    </li>
                    <li>Follow signs for “Newark International Airport”</li>
                    <li>Coming into airport follow signs for Marriott Hotel</li>
                  </ol>
                </div>
              </div>

              <div
                class="list-group-item list-group-item-action flex-column align-items-start"
              >
                <a href="#" class="text-muted" @click.prevent="toggleTravel(1)"
                  >Shuttle service</a
                >
                <div v-if="shownTravelIndex === 1" class="small mt-2">
                  <strong>Terminal C</strong>
                  <p>
                    From Baggage claim, walk toward the exit sign and go
                    outside. Cross the street to the second island and walk to
                    your right past the taxi stand. Stand under sign #7 shared
                    ride services.
                  </p>

                  <strong>Terminal B</strong>
                  <p>
                    From Baggage claim follow the exit sign. Cross the street
                    and look for the sign that says #5 Newark Airport Marriott
                    Hotel.
                  </p>

                  <strong>Terminal A</strong>
                  <p>
                    From Baggage claim, take the escalator down to parking level
                    A. Walk through the vacant underground lot to the street
                    curb. Look for green and white sign #8 that reads Newark
                    Airport Marriott.
                  </p>

                  <img
                    class="img-fluid"
                    src="~assets/images/travel-newark-marriott-shuttle.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PastYearLineup from '@/components/PastYearLineup'
import ReadMore from '@/components/ReadMore'
import RedStar from '@/components/RedStar'
import SchedEmbed from '@/components/SchedEmbed'

export default {
  components: {
    PastYearLineup,
    ReadMore,
    RedStar,
    SchedEmbed
  },

  data() {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,

      // Event info
      registerLink:
        'https://www.eventbrite.com/e/agile-agilecamp-new-york-metro-2018-registration-43797783349',
      schedId: 'agilecampnewyorkmetro2018.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps?cid=11280638414678775110',
      latLngLiteral: { lat: 40.6921206, lng: -74.183599 },
      // SEE: https://developers.google.com/places/place-id
      placeId: 'ChIJlXycOvpSwokRRtWN6t7gjJw',
      placeName: 'Newark Liberty International Airport Marriott',

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
