<template>
  <div class="pt-header">

    <section class="container-fluid bg-color-teal-dk-2 border-bottom-black">
      <div class="row bg-color-black">
        <div class="col-12 color-white font-weight-bold text-center text-uppercase px-2 py-2">
          The 2017 Lineup
        </div>
      </div>
      <div class="row px-2 py-2">
        <div class="col-12 py-2 text-center">
          <h1 class="color-white-alpha-50 display-vw-10 text-uppercase font-family-oswald-400">New York Metro</h1>
          <h2 class="color-white display-vw-3 font-weight-bold ml-1">September 25th, 2017</h2>
          <h2 class="color-white-alpha-50 display-vw-4 font-weight-bold ml-1">
            Prudential Tower Conference Center<br />
            Newark, New Jersey
          </h2>
        </div>
        <div class="col-12 py-4 text-center">
          <p class="body-copy color-white">
            Join us on September 25th, 2017 for AgileCamp New York Metro!
            Agilists from across the globe will converge at the <a href="/" class="link-underline" @click.prevent="scrollToId('travelSection')">Prudential Financial Tower</a> for a day of learning and networking.
            Prudential Financial is a proud sponsor of AgileCamp.
            This year we are excited for keynote presentations from <a href="/" class="link-underline" @click.prevent="scrollToId('speakerGeetaWilson')">Geeta Wilson</a>, VP, Consumer Experience &mdash; Enterprise Transformation at Humana Inc., <a href="/" class="link-underline" @click.prevent="scrollToId('speakerDavidMarquet')">David Marquet</a>, author and US Navy Captain (Retired), and <a href="/" class="link-underline" @click.prevent="scrollToId('speakerRichSheridan')">Richard Sheridan</a>, best-selling author of Joy Inc.
            You’ll also chose from 20 of workshops on Leadership, Product, Leadership, Innovation, Agility and much more.
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

        <div class="row text-white py-2" id="speakerGeetaWilson">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-geeta-wilson-port.jpg" alt="Geeta Wilson">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
            <h4 class="mt-2 mt-md-0">Geeta Wilson</h4>
            <p class="body-copy">
              Geeta Wilson is a highly innovative and transformational Customer Experience and Operational Excellence leader with extensive domestic and international experience in start-ups, Fortune 500 companies such as NCR Corporation, and Humana, a Fortune 100 company.
            </p>
            <read-more>
              <p class="body-copy" key="p1">
                Geeta is the founder of Humana’s FastStart Consumer Experience lab, an enterprise customer-centric movement that challenges convention and corporate routines.
                Using methods from Lean Start-up, Agile/Scrum, Design Thinking, and Lean Six Sigma to accelerate speed-to-market across all lines of business, the FastStart team has brought its disruptive CX approach to thousands of Humana associates and leaders.
              </p>
              <p class="body-copy" key="p2">
                Geeta has been featured in Forbes, The Wall Street Journal’s CIO Journal, and 1:1 Media.
                She was recognized by American City Business Journals (Louisville Business First) among its 2017 &ldquo;People to Know&rdquo; and by MM&amp;M as one of its 2017 Top 40 Healthcare Transformers.
              </p>
              <p class="body-copy" key="p3">
                The FastStart lab was honored with a 2016 Customer Experience Professionals Association (CXPA) Innovation Award.
                Geeta’s recent speaking engagements focusing on the consumer experience include Forrester CXNYC 2016 and 2017 conferences, 2016 CXPA Insight Exchange, 2016 Lean Startup conference, and Dreamforce 2016, the largest tech conference in the world.
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

        <div class="row text-white py-2" id="speakerRichSheridan">
          <div class="col-12 col-md-3">
            <div class="img-wrap-ac-speaker-port m-auto">
              <img class="img-fluid" src="~assets/images/speaker-rich-sheridan-port.jpg" alt="Rich Sheridan">
            </div>
          </div>
          <div class="col-12 col-md-9 mt-2 text-center text-md-left">
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
                Ultimately, Rich and his co-founder James Goebel invented their own company in 2001 to &ldquo;end human suffering in the world as it relates to technology&rdquo; by returning joy to one of the most unique endeavors mankind has ever undertaken: the invention of software.
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
              655 Broad Street, Newark, New Jersey 07102<br />
              Venue phone: <a href="tel:1-973-802-6000">(973) 802-6000</a>
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
            <h1 class="text-center">2017 New York Metro Sponsors</h1>
          </div>
        </div>

        <div class="row mb-4 border-bottom-black-1">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Title</span></h3>
          </div>

          <div class="col-12 col-sm-6 offset-sm-1 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.prudential.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-prudential.png" /></a>
          </div>

          <div class="col-12 col-sm-4 offset-sm-2 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://hyperdriveagile.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive.png" /></a>
          </div>

          <div class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="http://www.brattoninc.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-bratton.png" /></a>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-2">
            <h3><span class="badge badge-default">Gold</span></h3>
          </div>

          <div class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://agilecraft.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-agilecraft.png" /></a>
          </div>

          <div class="col-12 col-sm-4 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.digite.com" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-digite.png" /></a>
          </div>

          <div class="col-12 col-sm-6 offset-sm-3 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://disciplinedagileconsortium.org" target="_blank" class="mx-4 my-4"><img class="img-fluid" src="~assets/images/sponsor-dac.png" /></a>
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
      registerLink: 'https://www.eventbrite.com/e/agilecamp-new-york-metro-2017-registration-34378215167',
      schedId: 'agilecampnewyorkmetro2017.sched.com',

      // Location info
      directionsLink: 'https://www.google.com/maps/place/Prudential+Tower/@40.7390714,-74.1727621,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa03018e2b38e8f3c!8m2!3d40.7390714!4d-74.1705734',
      latLngLiteral: {lat: 40.7390714, lng: -74.1727621},
      placeId: 'ChIJE-StzYFTwokRPI-Os-IYMKA',
      placeName: 'Prudential Tower - Conference Center'
    }
  },

  computed: {
    schedLink () {
      return `https://${this.schedId}`
    }
  }
}
</script>
