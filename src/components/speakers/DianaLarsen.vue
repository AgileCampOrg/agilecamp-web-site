<template>
  <div class="row py-2" :class="textClass" id="speakerDianaLarsen">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-diana-larsen-port.jpg" alt="Diana Larsen">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Diana Larsen</h4>
      <p class="body-copy" :class="bodyClass">
        A visionary pragmatist, Diana Larsen co-founded and collaborates in leadership of Agile Fluency Project.
        Diana co-authored the books <em>Agile Retrospectives: Making Good Teams Great</em>; <em>Liftoff: Start and Sustain Successful Agile Teams</em>; <em>Five Rules for Accelerated Learning</em>; and the seminal &ldquo;Agile Fluency Model: A Brief Guide to Success with Agile&rdquo; article.
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          Through the Agile Fluency Project’s programs for training and mentoring agile coaches and consultants, Diana shares the wisdom she’s gained in over 25 years of working with leaders, teams, and organizations.
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
