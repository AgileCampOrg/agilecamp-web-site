<template>
  <div class="pt-header">

    <section class="container-fluid bg-ac-lineup border-bottom-yellow">
      <div class="row bg-color-yellow">
        <div class="col-12 font-weight-bold text-center text-uppercase px-2 py-2">
          The 2017 Lineup
        </div>
      </div>
      <div class="row px-2 py-2">
        <div class="col-12 py-2">
          <router-link class="color-green" to="northwest">
            <h1 class="display-2 text-uppercase font-family-oswald-400"><span class="bg-inverse text-white small rotate-ccw-10 p-2 mt-4" style="position: absolute;">SOLD OUT</span> Northwest</h1>
            <h2 class="font-weight-bold ml-1">September 6th, 2017</h2>
          </router-link>
<!--
          <a class="color-green" href="https://www.eventbrite.com/e/agilecamp-pacific-northwest-2017-registration-34329061146" target="_blank">
            <h1 class="display-2 text-uppercase font-family-oswald-400">Northwest</h1>
            <h2 class="font-weight-bold ml-1">September 6th, 2017<i class="fa fa-fw fa-ticket ml-2" aria-hidden="true"></i></h2>
          </a>
 -->
        </div>
        <div class="col-12 py-2">
          <router-link class="color-teal" to="new-york-metro">
            <h1 class="display-2 text-uppercase font-family-oswald-400"><span class="bg-inverse text-white small rotate-ccw-10 p-2 mt-4" style="position: absolute;">SOLD OUT</span> New York Metro</h1>
            <h2 class="font-weight-bold ml-1">September 25th, 2017</h2>
          </router-link>
<!--
          <a class="color-teal" href="https://www.eventbrite.com/e/agilecamp-new-york-metro-2017-registration-34378215167" target="_blank">
            <h1 class="display-2 text-uppercase font-family-oswald-400">New York Metro</h1>
            <h2 class="font-weight-bold ml-1">September 25th, 2017<i class="fa fa-fw fa-ticket ml-2" aria-hidden="true"></i></h2>
          </a>
 -->
        </div>
        <div class="col-12 py-2">
          <router-link class="color-orange" to="silicon-valley">
            <h1 class="display-2 text-uppercase font-family-oswald-400">Silicon Valley</h1>
            <h2 class="font-weight-bold ml-1">November 6th, 2017</h2>
          </router-link>
<!--
          <a class="color-orange" href="https://www.eventbrite.com/e/agilecamp-silicon-valley-2017-registration-34720139873" target="_blank">
            <h1 class="display-2 text-uppercase font-family-oswald-400">Silicon Valley</h1>
            <h2 class="font-weight-bold ml-1">November 6th, 2017<i class="fa fa-fw fa-ticket ml-2" aria-hidden="true"></i></h2>
          </a>
 -->
        </div>
        <div class="col-12 py-2">
          <a class="color-blue" href="https://www.eventbrite.com/e/agilecamp-dallas-2017-registration-34757472536" target="_blank">
            <h1 class="display-2 text-uppercase font-family-oswald-400">Dallas</h1>
            <h2 class="font-weight-bold ml-1">December 1st, 2017<i class="fa fa-fw fa-ticket ml-2" aria-hidden="true"></i></h2>
          </a>
        </div>
      </div>
    </section>

    <div class="bg-color-gray">
      <section class="container py-4">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Discover AgileCamp</h1>

            <div class="card my-4 card-inverse card-primary">
              <div class="card-block">
                <p class="card-title lead">
                  AgileCamp is the industry’s leading Agile and Lean Practices conference!
                </p>
                <p class="card-text body-copy">
                  AgileCamps take place across the country, bringing together professionals from the Agile community for a day of exciting education, activities and networking.
                  Presentations are led by Agile experts and touch on the newest tools and Agile methodologies.
                  Activities are exciting workshops that put techniques to the test and advance professional skills.
                  While receptions and breaks bring the Agile community together for a valuable opportunity to network with industry leading professionals.
                </p>
              </div>
            </div>

            <p class="lead text-center">
              Agile and Lean practitioners of all levels have something to learn at AgileCamp
            </p>

            <div class="card-group bg-ac-levels my-4">
              <div class="card bg-none">
                <div class="card-block">
                  <p class="card-title">Novices</p>
                  <p class="card-text small">Learn the basics of Agile and Lean</p>
                </div>
              </div>
              <div class="card bg-none">
                <div class="card-block">
                  <p class="card-title">Practitioners</p>
                  <p class="card-text small">Learn new Agile skills, tools and techniques</p>
                </div>
              </div>
              <div class="card bg-none">
                <div class="card-block">
                  <p class="card-title">Experts</p>
                  <p class="card-text small">Become a better leader and Agile coach</p>
                </div>
              </div>
              <div class="card bg-none">
                <div class="card-block">
                  <p class="card-title">Executives</p>
                  <p class="card-text small">Develop an Agile company strategy and culture</p>
                </div>
              </div>
            </div>

            <p class="lead text-center">
              Attend an upcoming AgileCamp now to take your Agile and Lean practices to the next level.
              Learn about the tools and techniques from experienced Agile coaches and watch your team succeed.
              You can also contribute to the Agile community by signing up to be a <a href="" @click.prevent="scrollToId('speakerSection')">Speaker</a> or <a href="" @click.prevent="scrollToId('sponsorSection')">Sponsor</a> at AgileCamp.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray-lt-2">
      <section class="container py-4" id="speakerSection">
        <div class="row">
          <div class="col-12">
            <h1 class="display-3 text-white">Become a Speaker</h1>
          </div>
        </div>

        <div class="row text-white">
          <div class="col-12 col-md-6 py-2">
            <p class="body-copy">
              Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!
              Let us know how you’re shaping the future of Agile tools and methodologies and share your message.
              Talks range on a variety of topics, and for a better idea, check out examples of past keynotes below.
            </p>
            <p>
              <a class="text-info" target="_blank" :href="speakerResLink">Submit your application</a> to become a speaker at AgileCamp 2017 now!
            </p>
          </div>

          <div class="col-12 col-md-4 offset-md-1 py-2 text-center">
            <h3 class="text-uppercase">Resources</h3>
            <ul class="nav flex-column align-items-stretch">
              <li class="nav-item">
                <a class="nav-link bg-info text-white" target="_blank" :href="speakerResLink">Fill out the 2017 speaker application</a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-inverse text-white" :href="emailLink" @click="trackContact(emailLink, 'speakerResources')">Contact us with any questions</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2 text-center">
            <h1>Past Keynotes</h1>
            <p class="body-copy">
              To give you an idea about our conferences, in years past, our world-class speakers have included:
            </p>
          </div>
        </div>

        <div class="row py-2">
          <div class="col-12 col-sm-4 py-sm-2" v-for="keynote in shownKeynotes">
            <you-tube-card :video-id="keynote.videoId" :title="keynote.title" :key="keynote.videoId" v-if="keynote.videoId" />

            <!-- Faux video card -->
            <div class="card card-inverse" v-else>
              <div class="embed-responsive embed-responsive-16by9 bg-color-black text-center">
                <div class="card-block embed-responsive-item d-flex flex-column justify-content-center align-items-center text-center">
                  <p class="card-text small">{{ keynote.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-if="hasMoreKeynotes">
          <div class="col-12 py-2 text-center">
            <button type="button" class="btn btn-lg btn-info" @click="showAllKeynotes">Show All</button>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-gray-lt-1">
      <section class="container py-4" id="sponsorSection">
        <div class="row">
          <div class="col-12">
            <h1 class="display-3 text-white">Become a Sponsor</h1>
          </div>
        </div>

        <div class="row text-white">
          <div class="col-12 col-md-6 py-2">
            <p class="body-copy">
              AgileCamp can’t happen without our sponsors.
              To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our <a class="text-success" target="_blank" :href="sponsorResLink">Sponsorship Program</a> guide.
            </p>
            <p class="body-copy">
              AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!
            </p>
          </div>

          <div class="col-12 col-md-4 offset-md-1 py-2 text-center">
            <h3 class="text-uppercase">Resources</h3>
            <ul class="nav flex-column align-items-stretch">
              <li class="nav-item">
                <a class="nav-link bg-success text-white" target="_blank" :href="sponsorResLink">Download the 2017 sponsor guide</a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-inverse text-white" :href="emailLink" @click="trackContact(emailLink, 'sponsorResources')">Contact us with any questions</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://www.prudential.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-prudential-white.png" /></a>
            <a href="http://nike.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-nike-white.png" /></a>
            <a href="http://hyperdriveagile.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive-white.png" /></a>
            <a href="http://www.casthighlight.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-casthighlight-white.png" /></a>
            <a href="http://www.brattoninc.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-bratton-white.png" /></a>
            <a href="http://improving.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-improving-white.png" /></a>
            <a href="http://www.thei4group.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-i4group-white.png" /></a>
            <a href="https://icagile.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-ica-white.png" /></a>
          </div>

          <div class="col-sm-12 py-2 d-flex flex-row flex-nowrap align-items-center">
            <a href="https://agilecraft.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-agilecraft-white.png" /></a>
            <a href="https://www.digite.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-digite-white.png" /></a>
            <a href="https://disciplinedagileconsortium.org" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-dac-white.png" /></a>
            <a href="https://www.northeastern.edu/graduate/" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-nupjm-white.png" /></a>
            <a href="https://agilityhealthradar.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-agilityhealth-white.png" /></a>
            <a href="https://propellerconsulting.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-propeller-white.png" /></a>
            <a href="https://www.versionone.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-versionone-white.png" /></a>
            <a href="https://www.daugherty.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-teamdaugherty-white.png" /></a>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-color-white">
      <section class="container py-4">
        <div class="row">
          <div class="col-12 py-2 text-center">
            <h1>AgileCamp 2016</h1>
            <p class="body-copy">
              Want to learn more about the types of talks and activities that take place at AgileCamp?
              Check out the 2016 schedules and speaker lineups.
            </p>
          </div>

          <div class="col-12 py-2">
            <h1 class="display-4 text-center text-uppercase font-family-oswald-400">
              <a href="https://agilecampnewyorkmetro2016.sched.com" target="_blank" class="text-gray-dark">New York Metro</a> /
              <a href="https://agilecampsiliconvalley2016.sched.com" target="_blank" class="text-gray-dark">Silicon Valley</a> /
              <a href="https://agilecampdallas2016.sched.com" target="_blank" class="text-gray-dark">Dallas</a>
            </h1>
          </div>

          <div class="col-12 col-md-10 offset-md-1 py-2">
            <div class="card-group my-4">
              <you-tube-card video-id="zmxeoq5kOMw" />
              <you-tube-card video-id="v72vqLSDF6s" />
            </div>
          </div>

<!--
          <div class="col-12 py-2">
            <div class="card-group my-4">
              <div class="card">
                <img class="card-img img-fluid" src="~assets/images/agilecamp_audience.jpg" />
              </div>
              <div class="card">
                <img class="card-img img-fluid" src="~assets/images/agilecamp_attendees.jpg" />
              </div>
              <div class="card">
                <img class="card-img img-fluid" src="~assets/images/agilecamp_speaker.jpg" />
              </div>
            </div>
          </div>
 -->
        </div>
      </section>
    </div>

    <contact-section class-left="bg-color-green-dk-2" class-right="bg-color-green-dk-1" />
  </div>
</template>

<script>
import ContactSection from '../components/ContactSection'
import YouTubeCard from '../components/YouTubeCard'

export default {
  components: {
    ContactSection,
    YouTubeCard
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink,

      // Resource links
      speakerResLink: 'https://goo.gl/forms/9EObArOLmQTC1UTV2',
      sponsorResLink: 'https://drive.google.com/file/d/0B5TIEzT0DaqFYlhaSWs2QzhaclE/view',

      // Keynotes
      keynotesToShow: 3,
      keynotes: [
        {videoId: '4dUbvQ3Dl1E', title: 'David Marquet, bestselling author of Turn the Ship Around, Captain (ret) of the USS Sante Fe'},
        {videoId: 'o9lpvMU-e38', title: 'Mamie Jones, SVP at Intuit'},
        {videoId: 'gDwAbMo5wpI', title: 'Mark Randall, VP of Creativity at Adobe'},
        {videoId: '', title: 'Ken Rubin, author of Essential Scrum'},
        {videoId: 'wjU94YKKu1k', title: 'Rich Sheridan, author of Joy, Inc. and founder of Menlo Innovations'},
        {videoId: '', title: 'James Baresse, CTO at PayPal'},
        {videoId: '', title: 'Mark Cauwels, CTO at Capital One'},
        // {videoId: '', title: 'Souvik Das, CIO at Capital One'},
        {videoId: '4aWcchmMCE0', title: 'Luke Hohmann, author of Innovation Games'},
        {videoId: 'W0BDr1jHZ18', title: 'David Anderson, author of Kanban'},
        {videoId: 'v2ODRdh43sQ', title: 'Jeff Sutherland, Co-creator of Scrum'},
        {videoId: '6nmvB8khVyo', title: 'Jeff Gothelf, author of Sense & Respond and Lean UX'},
        {videoId: '8lDisTuLYMo', title: 'Jurgen Appelo, author of Management 3.0'}
      ]
    }
  },

  computed: {
    hasMoreKeynotes () {
      return this.keynotes.length > this.keynotesToShow
    },
    shownKeynotes () {
      return this.keynotes.slice(0, this.keynotesToShow)
    }
  },

  methods: {
    showAllKeynotes () {
      this.keynotesToShow = this.keynotes.length

      this.$root.$options.$tracker.trackAction('show_all_keynotes')
    }
  }
}
</script>
