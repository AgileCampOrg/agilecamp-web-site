<template>
  <div class="bg-gradient-gray">
    <section class="container">
      <div class="row py-4">
        <div class="col-10 offset-1" style="position: relative;">
          <!-- HACK: Reserve space for the "longest" quote -->
          <div style="visibility: hidden;">
            <blockquote class="blockquote font-size-150 text-center">“In the space of one day, you can probably get years-worth of learning, and leverage all the experiences of other scrum masters that may be available here, that you wouldn’t be able to get at any other conference.”</blockquote>
            <footer class="blockquote-footer text-right">Matt Sakaguchi, Site Reliability Manager, Google</footer>
          </div>

          <div class="d-flex flex-column justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;">
            <!-- TODO: Move to quote machine component -->
            <transition name="fade" mode="out-in">
              <div v-if="currentIndex === 0" key="quote0">
                <blockquote class="blockquote font-size-150 text-center">“I would describe AgileCamp as thought leaders coming together to expand the&nbsp;practice.”</blockquote>
                <footer class="blockquote-footer text-right">Sean Lemson, Nike</footer>
              </div>

              <div v-if="currentIndex === 1" key="quote1">
                <blockquote class="blockquote font-size-150 text-center">“This is an opportunity for deep learning. Learning from experts on really how to take a very specific skill, learn from others, and then be able to go apply it into your organization.”</blockquote>
                <footer class="blockquote-footer text-right">Mamie Jones, SVP of Product Development, Intuit </footer>
              </div>

              <div v-if="currentIndex === 2" key="quote2">
                <blockquote class="blockquote font-size-150 text-center">“In the space of one day, you can probably get years-worth of learning, and leverage all the experiences of other scrum masters that may be available here, that you wouldn’t be able to get at any other conference.”</blockquote>
                <footer class="blockquote-footer text-right">Matt Sakaguchi, Site Reliability Manager, Google</footer>
              </div>

              <div v-if="currentIndex === 3" key="quote3">
                <blockquote class="blockquote font-size-150 text-center">“What I liked most about AgileCamp is the opportunity to learn from other people. It’s been really interesting to hear how they’re applying Agile methodologies, design thinking...”</blockquote>
                <footer class="blockquote-footer text-right">Chris Hodge – Product Manager &amp; Innovation Leader, Intuit</footer>
              </div>

              <div v-if="currentIndex === 4" key="quote4">
                <blockquote class="blockquote font-size-150 text-center">“Events like this are critical, actually, for the community because if we understand Agile as a mindset, not as a process, then education is a huge part of changing people’s mindset.”</blockquote>
                <footer class="blockquote-footer text-right">Admed Sidky, Ph.D., Head of Development Management, Riot Games</footer>
              </div>

              <div v-if="currentIndex === 5" key="quote5">
                <blockquote class="blockquote font-size-150 text-center">“AgileCamp is a great opportunity for team members to learn with others, and bring that knowledge back to Toyota Connected to help us be even more Agile.”</blockquote>
                <footer class="blockquote-footer text-right">Nigel Thurlow, Chief of Agile, Toyota Corporation</footer>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import random from 'lodash/random'

const MAX_INDEX = 5

export default {
  data () {
    return {
      currentIndex: random(0, MAX_INDEX)
    }
  },

  mounted () {
    this.startTimer()
  },

  beforeDestroy () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
      delete this.timeoutId
    }
  },

  methods: {
    startTimer () {
      this.timeoutId = setTimeout(() => {
        this.currentIndex = random(0, MAX_INDEX)
        this.startTimer()
      }, 10000)
    }
  }
}
</script>
