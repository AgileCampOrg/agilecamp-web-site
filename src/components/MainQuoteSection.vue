<template>
  <div class="bg-gradient-gray">
    <section class="container">
      <div class="row py-4">
        <div class="col-10 offset-1" style="position: relative;">
          <!-- HACK: Reserve space for the "longest" quote -->
          <div style="visibility: hidden;">
            <blockquote class="blockquote font-size-150 text-center">“We brought 20 team members from Toyota Connected... it’s a great opportunity for them to learn from&nbsp;others.”</blockquote>
            <footer class="blockquote-footer text-right">Nigel Thurlow, Chief of Agile - Toyota Connected</footer>
          </div>

          <div class="d-flex flex-column justify-content-center align-items-center" style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;">
            <!-- TODO: Move to quote machine component -->
            <transition name="fade" mode="out-in">
              <div v-if="quoteIndex === 0" key="quote0">
                <blockquote class="blockquote font-size-150 text-center">“The quality at AgileCamp is extremely high. If you look at the speakers, the keynotes, these are top level&nbsp;people.”</blockquote>
                <footer class="blockquote-footer text-right">Jorgen H., Attendee</footer>
              </div>

              <div v-if="quoteIndex === 1" key="quote1">
                <blockquote class="blockquote font-size-150 text-center">“We brought 20 team members from Toyota Connected... it’s a great opportunity for them to learn from&nbsp;others.”</blockquote>
                <footer class="blockquote-footer text-right">Nigel Thurlow, Chief of Agile - Toyota Connected</footer>
              </div>

              <div v-if="quoteIndex === 2" key="quote2">
                <blockquote class="blockquote font-size-150 text-center">“What makes this conference more unique than others? It’s an opportunity for deep&nbsp;learning.”</blockquote>
                <footer class="blockquote-footer text-right">Mamie Jones, SVP - Intuit</footer>
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

const MAX_QUOTE_INDEX = 2

export default {
  data () {
    return {
      quoteIndex: random(0, MAX_QUOTE_INDEX),
    }
  },

  mounted () {
    this.startQuoteTimer()
  },

  beforeDestroy () {
    if (this.quoteTid) clearTimeout(this.quoteTid)
  },

  methods: {
    startQuoteTimer () {
      this.quoteTid = setTimeout(() => {
        this.quoteIndex = random(0, MAX_QUOTE_INDEX)
        this.startQuoteTimer()
      }, 10000)
    }
  }
}
</script>
