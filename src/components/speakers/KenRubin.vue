<template>
  <div class="row py-2" :class="textClass" id="speakerKenRubin">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid img-brighten-120" src="~assets/images/speaker-ken-rubin-port.jpg" alt="Ken Rubin">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Ken Rubin</h4>
      <p class="body-copy" :class="bodyClass">
        Ken Rubin is the author of Amazon’s #1 best-selling book <em>Essential Scrum: A Practical Guide to the Most Popular Agile Process</em>.
        As an agile thought leader, Ken founded Innolution where he helps organizations thrive through the application of agile principles in an effective and economically sensible way.
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          He has coached over 200 companies ranging from startups to Fortune 10, and is an angel investor and mentor to numerous exciting startups.
        </p>
        <p class="body-copy" key="p2">
          As a Certified Scrum Trainer, Ken has trained over 27,000 people in agile as well as object-oriented technology.
          He was also the first managing director of the worldwide Scrum Alliance.
        </p>
      </read-more>
    </div>
  </div>
</template>

<script>
import ReadMore from '@/components/ReadMore'

export default {
  props: {
    textClass: String
  },

  components: {
    ReadMore
  },

  computed: {
    bodyClass () {
      return this.textClass || 'text-muted'
    }
  }
}
</script>
