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
              Nike World Headquarters<br />
              Beaverton, Oregon
            </h2>
          </a>
        </div>
        <div class="col-12 py-4 text-center">
          <p class="body-copy color-white">
            Join us on September 6th, 2017 for AgileCamp Northwest in beautiful Beaverton Oregon!
            Agilists from across the Pacific Northwest will converge at the <a href="/" class="link-underline" @click.prevent="scrollToId('travelSection')">Nike World Headquarters</a> for a career changing day.
            Nike is a leader in Agile project management and a proud sponsor of AgileCamp.
            This year we are excited for keynote presentations from <a href="/" class="link-underline" @click.prevent="scrollToId('speakerRichSheridan')">Richard Sheridan</a>, best-selling author of Joy Inc., <a href="/" class="link-underline" @click.prevent="scrollToId('speakerGeneKim')">Gene Kim</a>, founder and CTO of Tripwire, and <a href="/" class="link-underline" @click.prevent="scrollToId('speakerMamieJones')">Mamie Jones</a>, SVP of Product Development at Intuit.
            You’ll also chose from 20 of workshops on Leadership, Product, Leadership, Innovation, Agility and much more.
            See below for a complete <a href="/" class="link-underline" @click.prevent="scrollToId('scheduleSection')">schedule</a> and to <a class="link-underline" :href="registerLink" target="_blank">register</a> for AgileCamp.
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

        <div class="row text-white py-2" id="speakerMamieJones">
          <div class="col-12 col-md-4">
            <div class="img-wrap-ac-speaker-land m-auto">
              <img class="img-fluid img-brighten-110" src="~assets/images/speaker-mamie-jones-land.jpg" alt="Mamie Jones">
            </div>
          </div>
          <div class="col-12 col-md-8 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Mamie Jones</h4>
            <p class="body-copy">
              Mamie Jones is the Pro Connect Senior Vice President of Product Development at Intuit.
              She is responsible for the development and operations of the Pro Connect Group’s portfolio of products.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                Since joining Intuit in 2011, she has led the technology transformation for the company’s online product offerings.
                Prior to joining Intuit, Jones served as the Sr. Vice President of Hoovers, a division of Dun and Bradstreet.
                She led the technology transformation to an SOA platform and spearheaded the adoption of agile methodology.
                This resulted in extraordinary developmental improvements, making it possible to focus on game changing initiatives.
                Before joining Hoovers, Jones was the Sr. Vice President of Travelocity, managing all aspects of technology from development to operations.
              </p>
              <p class="body-copy" key="p2">
                In one way or another, Jones has been professionally involved in the software development industry throughout her career.
                Jones has proven her leadership abilities in software design and development by creating best-in-class teams dedicated to implementing high quality products and innovative solutions.
              </p>
            </read-more>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerGeneKim">
          <div class="col-12 col-md-4">
            <div class="img-wrap-ac-speaker-land m-auto">
              <img class="img-fluid img-brighten-120" src="~assets/images/speaker-gene-kim-land.jpg" alt="Gene Kim">
            </div>
          </div>
          <div class="col-12 col-md-8 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Gene Kim</h4>
            <p class="body-copy">
              Gene Kim is a multiple award-winning CTO, researcher and author.
              He was founder and CTO of Tripwire for 13 years.
              He has written three books, including &ldquo;The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win&rdquo; and the newly-released &ldquo;The DevOps Handbook.&rdquo;
              Since 2014, he has been the organizer of the DevOps Enterprise Summit.
            </p>
          </div>
        </div>

        <div class="row text-white py-2" id="speakerRichSheridan">
          <div class="col-12 col-md-4">
            <div class="img-wrap-ac-speaker-land m-auto">
              <img class="img-fluid img-brighten-120" src="~assets/images/speaker-rich-sheridan-land.jpg" alt="Rich Sheridan">
            </div>
          </div>
          <div class="col-12 col-md-8 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Rich Sheridan</h4>
            <p class="body-copy">
              Menlo Innovations CEO Rich Sheridan had an all consuming thought during a difficult mid-career in the chaotic technology industry... things can be better.
              Much better.
              He had to find a way.
              His search led him to books, authors and history, including recalling childhood visits to Greenfield Village every summer.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                The excitement of the Edison Menlo Park New Jersey Lab served as his siren call to create a workplace filled with camaraderie, human energy, creativity and productivity.
                Ultimately, Rich and his co-founder James Goebel invented their own company in 2001 to &ldquo;end human suffering in the world as it relate to technology&rdquo; by returning joy to one of the most unique endeavors mankind has ever undertaken: the invention of software.
                Their unique approach to custom software design, they named it High-tech Anthropology&reg; has produced custom software that delights users rather than frustrating them.
                The programming team creates the software that works every day without the emergencies that are all too common in the tech industry.
                The process itself is so interesting that almost 4,000 people a year travel from around the world just to see how they do it.
                Many spend a week or more studying &ldquo;The Menlo Way&rdquo; being taught by the Menlonians who love to share their experience and knowledge.
              </p>
              <p class="body-copy" key="p2">
                In 2013, Rich and his publisher Penguin Random House took a chance that a business book with the words joy and love on the cover might have impact.
                They had no idea how the world yearned for such a message.
                His best selling book, <em>Joy, Inc. &mdash; How We Built a Workplace People Love</em> now has Rich traveling the world speaking about joy, creativity, and human energy in the workplace.
              </p>
            </read-more>
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
          <div class="col-12" id="scheduleSection">
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
              One Bowerman Drive, Beaverton, Oregon 97006<br />
              Venue phone: <a href="tel:1-503-671-6453">(503) 671-6453</a>
            </p>

            <h3 class="text-uppercase">Travel</h3>
            <div class="list-group">
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">By car</a>
                <small class="mt-2">Use the North Entrance on Walker Road. Event parking is just beyond the security bunker.</small>
              </div>
<!--
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">Public transportation</a>
                <small class="mt-2">
                  Nike World Headquarters is located north of the Beaverton Creek Station on the MAX Blue Line.
                  Nike operates its own fleet of shuttle buses to its World Headquarters and nearby satellite offices.
                  If walking or biking, use the the 1/3 mile Nike Woods Connector Trail from the station to the Nike entrance on SW Jenkins Road.
                  The Tiger Woods Conference Center is located towards the north side of the campus.
                </small>
              </div>
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">For those with a mobility disability</a>
              </div>
              <div class="list-group-item list-group-item-action flex-column align-items-start">
                <a href="#" class="text-muted">Accommodations</a>
              </div>
 -->
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
            <h1 class="text-center">2017 Northwest Sponsors</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 offset-4 d-flex flex-row flex-nowrap">
            <a href="http://nike.com" target="_blank" class="mx-2 my-4"><img class="img-fluid" src="~assets/images/sponsor-nike.png" /></a>
          </div>

          <div class="col-sm-8 offset-2 d-flex flex-row flex-nowrap">
            <a href="http://hyperdriveagile.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive.png" /></a>
            <a href="http://www.brattoninc.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-bratton.png" /></a>
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
      registerLink: 'https://www.eventbrite.com/e/agilecamp-pacific-northwest-2017-registration-34329061146',
      schedId: 'agilecamppacificnorthwest2017.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps/place/Nike+-+Tiger+Woods+Conference+Center/@45.5102932,-122.8305968,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xab9d3a9f03dd7399!8m2!3d45.5102932!4d-122.8284081?cid=12366104606468305817',
      latLngLiteral: {lat: 45.5090348, lng: -122.8304661},
      placeId: 'ChIJYV-FNcMOlVQRmXPdA586nas',
      placeName: 'Nike - Tiger Woods Conference Center'
    }
  },

  computed: {
    schedLink () {
      return `https://${this.schedId}`
    }
  }
}
</script>
