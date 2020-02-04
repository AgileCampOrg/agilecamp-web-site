<template>
  <div class="bg-color-white">
    <section id="pastYearsSection" class="container py-4">
      <div class="row">
        <div class="col-12">
          <h2 class="text-uppercase">AgileCamps Past</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <p class="body-copy">
            Get a flavor of our conferences. Learn about previous AgileCamp
            conferences including speakers and session tracks. And, don’t miss
            out on AgileCamp 2020. Reserve your spot by registering today.
          </p>
        </div>
      </div>

      <div class="row pb-4 mb-4 border-bottom">
        <div class="col-12 col-md-6 py-2">
          <div class="card">
            <div class="h4 card-header">
              AgileCamp 2019
            </div>

            <div class="list-group list-group-flush">
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2019-chicago' }"
                >Chicago</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2019-portland' }"
                >Portland</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2019-newyorkmetro' }"
                >New York Metropolitan</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2019-dallas' }"
                >Dallas</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2019-sanfrancisco' }"
                >San Francisco</router-link
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 py-2">
          <div class="card">
            <div class="h4 card-header">
              AgileCamp 2018
            </div>

            <div class="list-group list-group-flush">
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2018-northwest' }"
                >Northwest/Portland</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2018-newyorkmetro' }"
                >New York Metro Area</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2018-dallas' }"
                >Dallas-Fort Worth</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2018-sanfrancisco' }"
                >San Francisco</router-link
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 py-2">
          <div class="card">
            <div class="h4 card-header">
              AgileCamp 2017
            </div>

            <div class="list-group list-group-flush">
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2017-northwest' }"
                >Northwest</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2017-newyorkmetro' }"
                >New York Metro</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2017-siliconvalley' }"
                >Silicon Valley</router-link
              >
              <router-link
                class="list-group-item list-group-item-action text-uppercase"
                :to="{ name: '2017-dallas' }"
                >Dallas</router-link
              >
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 py-2">
          <div class="card">
            <div class="h4 card-header">
              AgileCamp 2016
            </div>

            <div class="list-group list-group-flush">
              <a
                href="https://agilecampnewyorkmetro2016.sched.com"
                target="_blank"
                class="list-group-item list-group-item-action text-uppercase"
                >New York Metro</a
              >
              <a
                href="https://agilecampsiliconvalley2016.sched.com"
                target="_blank"
                class="list-group-item list-group-item-action text-uppercase"
                >Silicon Valley</a
              >
              <a
                href="https://agilecampdallas2016.sched.com"
                target="_blank"
                class="list-group-item list-group-item-action text-uppercase"
                >Dallas</a
              >
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
        <div
          v-for="(keynote, index) in shownKeynotes"
          :key="index"
          class="col-12 col-md-4 py-sm-2"
        >
          <you-tube-card
            v-if="keynote.videoId"
            :key="keynote.videoId"
            :video-id="keynote.videoId"
            :title="keynote.title"
          />

          <!-- Faux video card -->
          <div v-else class="card text-white">
            <div
              class="embed-responsive embed-responsive-16by9 bg-color-black text-center"
            >
              <div
                class="card-block embed-responsive-item d-flex flex-column justify-content-center align-items-center text-center"
              >
                <p class="card-text small">{{ keynote.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="hasMoreKeynotes" class="row">
        <div class="col-12 py-2 text-center">
          <button
            type="button"
            class="btn btn-lg btn-secondary"
            @click="showAllKeynotes"
          >
            Show All
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import YouTubeCard from '@/components/YouTubeCard'

export default {
  components: {
    YouTubeCard
  },

  data() {
    return {
      // Keynotes
      keynotesToShow: 3,
      keynotes: [
        {
          videoId: '4dUbvQ3Dl1E',
          title:
            'David Marquet, bestselling author of Turn the Ship Around, Captain (ret) of the USS Sante Fe'
        },
        { videoId: 'o9lpvMU-e38', title: 'Mamie Jones, SVP at Intuit' },
        {
          videoId: 'gDwAbMo5wpI',
          title: 'Mark Randall, VP of Creativity at Adobe'
        },
        { videoId: '', title: 'Ken Rubin, author of Essential Scrum' },
        {
          videoId: 'wjU94YKKu1k',
          title:
            'Rich Sheridan, author of Joy, Inc. and founder of Menlo Innovations'
        },
        { videoId: '', title: 'James Baresse, CTO at PayPal' },
        { videoId: '', title: 'Mark Cauwels, CTO at Capital One' },
        // { videoId: '', title: 'Souvik Das, CIO at Capital One' },
        {
          videoId: '4aWcchmMCE0',
          title: 'Luke Hohmann, author of Innovation Games'
        },
        { videoId: 'W0BDr1jHZ18', title: 'David Anderson, author of Kanban' },
        {
          videoId: 'v2ODRdh43sQ',
          title: 'Jeff Sutherland, Co-creator of Scrum'
        },
        {
          videoId: '6nmvB8khVyo',
          title: 'Jeff Gothelf, author of Sense & Respond and Lean UX'
        },
        {
          videoId: '8lDisTuLYMo',
          title: 'Jurgen Appelo, author of Management 3.0'
        }
      ]
    }
  },

  computed: {
    hasMoreKeynotes() {
      return this.keynotes.length > this.keynotesToShow
    },
    shownKeynotes() {
      return this.keynotes.slice(0, this.keynotesToShow)
    }
  },

  methods: {
    showAllKeynotes() {
      this.keynotesToShow = this.keynotes.length

      this.$root.$options.$tracker.trackAction('show_all_keynotes')
    }
  }
}
</script>
