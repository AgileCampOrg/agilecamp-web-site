<template>
  <div>
    <main-header-section />
    <main-quote-section />
    <main-sponsor-section />
    <org-transform-section />

    <speaker-section />
    <important-dates-section />

    <discover-section />
    <practitioners-section />

    <div class="bg-color-white">
      <section class="container py-4" id="pastYearsSection">
        <div class="row">
          <div class="col-12 text-center">
            <p class="body-copy">
              Want to learn more about the types of talks and activities that take place at AgileCamp?
              Check out the schedules and speaker lineups from previous years.
            </p>
          </div>
        </div>

        <div class="row pb-4">
          <div class="col-12 col-md-6 py-2">
            <div class="card">
              <div class="h4 card-header">
                AgileCamp 2017
              </div>

              <div class="list-group list-group-flush">
                <router-link class="list-group-item list-group-item-action text-uppercase" :to="{name: '2017-northwest'}">Northwest</router-link>
                <router-link class="list-group-item list-group-item-action text-uppercase" :to="{name: '2017-newyorkmetro'}">New York Metro</router-link>
                <router-link class="list-group-item list-group-item-action text-uppercase" :to="{name: '2017-siliconvalley'}">Silicon Valley</router-link>
                <router-link class="list-group-item list-group-item-action text-uppercase" :to="{name: '2017-dallas'}">Dallas</router-link>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 py-2">
            <div class="card">
              <div class="h4 card-header">
                AgileCamp 2016
              </div>

              <div class="list-group list-group-flush">
                <a href="https://agilecampnewyorkmetro2016.sched.com" target="_blank" class="list-group-item list-group-item-action text-uppercase">New York Metro</a>
                <a href="https://agilecampsiliconvalley2016.sched.com" target="_blank" class="list-group-item list-group-item-action text-uppercase">Silicon Valley</a>
                <a href="https://agilecampdallas2016.sched.com" target="_blank" class="list-group-item list-group-item-action text-uppercase">Dallas</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <h1>Past Keynotes</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 py-sm-2" v-for="keynote in shownKeynotes">
            <you-tube-card :video-id="keynote.videoId" :title="keynote.title" :key="keynote.videoId" v-if="keynote.videoId" />

            <!-- Faux video card -->
            <div class="card text-white" v-else>
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
            <button type="button" class="btn btn-lg btn-secondary" @click="showAllKeynotes">Show All</button>
          </div>
        </div>
      </section>
    </div>

    <sponsor-section />

    <div class="bg-color-yellow">
      <section class="container">
        <div class="row">
          <transition name="fade" mode="out-in">
            <div class="col-12 col-sm-10 offset-sm-1 py-2 py-4" v-if="didSubmitInterest" key="didSubmitInterest">
              <strong>Thank you for sharing.</strong> We look forward to seeing you at AgileCamp 2018!
            </div>

            <div class="col-12 col-sm-10 offset-sm-1 py-2 py-4" v-else>
              <label for="interestEmail" class="lead">We’re currently planning AgileCamp 2018. Stay in touch with us!</label>

              <fieldset class="form-group ml-4">
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.opportunities" true-value="yes" false-value="no" />
                    I’m interested in sponsorship/partnership opportunities
                  </label>
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.city" true-value="yes" false-value="no" />
                    I want AgileCamp in my city
                  </label>
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                      v-model="interestOpts.volunteer" true-value="yes" false-value="no" />
                    I want to volunteer
                  </label>
                </div>
              </fieldset>

              <div class="form-group row">
                <div class="col-12">
                  <input class="form-control form-control-danger" :class="interestEmailError ? 'is-invalid' : ''"
                    type="email" id="interestEmail" placeholder="Email address"
                    v-model="interestEmail" @keyup.enter="submitInterest">
                </div>
                <div class="col-12">
                  <div class="form-text text-danger" v-if="interestEmailError">{{ interestEmailError }}</div>
                  <div class="form-text text-muted" v-else>We’ll never share this.</div>
                </div>
              </div>

              <button type="button" class="btn btn-primary btn-sm px-4" @click="submitInterest">Submit</button>
            </div>
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import DiscoverSection from '../components/DiscoverSection'
import ImportantDatesSection from '../components/ImportantDatesSection'
import MainHeaderSection from '../components/MainHeaderSection'
import MainQuoteSection from '../components/MainQuoteSection'
import MainSponsorSection from '../components/MainSponsorSection'
import OrgTransformSection from '../components/OrgTransformSection'
import PractitionersSection from '../components/PractitionersSection'
import SpeakerSection from '../components/SpeakerSection'
import SponsorSection from '../components/SponsorSection'
import YouTubeCard from '../components/YouTubeCard'

export default {
  components: {
    DiscoverSection,
    ImportantDatesSection,
    MainHeaderSection,
    MainQuoteSection,
    MainSponsorSection,
    OrgTransformSection,
    PractitionersSection,
    SpeakerSection,
    SponsorSection,
    YouTubeCard
  },

  data () {
    return {
      didSubmitInterest: false,

      interestEmail: '',
      interestEmailError: null,
      interestOpts: {
        city: 'no',
        dates: 'yes',
        opportunities: 'no',
        speaker: 'no',
        volunteer: 'no'
      },

      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink,

      // Resource links
      speakerResLink: 'https://goo.gl/forms/9RieyAgmdrMU6fzX2',
      sponsorResLink: 'https://drive.google.com/file/d/1ErqD6KCYEhwcQRqi3tmySkpdlVQoFeoT/view',

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
    },

    submitInterest () {
      const email = this.interestEmail

      if (/\S+@\S+\.\S+/.test(email)) {
        this.$root.$options.$tracker.identify({email})
        this.$root.$options.$tracker.trackAction('interest', this.interestOpts)

        this.didSubmitInterest = true
      } else {
        this.interestEmailError = 'Sorry, that doesn’t look like a valid email address.'
      }
    }
  },

  watch: {
    interestEmail () {
      this.interestEmailError = null
    }
  }
}
</script>
