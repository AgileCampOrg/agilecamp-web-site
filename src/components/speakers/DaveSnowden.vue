<template>
  <div class="row py-2" :class="textClass" id="speakerDaveSnowden">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-dave-snowden-port.jpg" alt="Dave Snowden">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Dave Snowden</h4>
      <p class="body-copy" :class="bodyClass">
        Dave Snowden divides his time between two roles: founder, Director, and Chief Scientific Officer of Cognitive Edge and the founder and head of the Cynefin Centre.
        His work is international in nature and covers government and industry looking at complex issues relating to strategy, organizational decision making and decision making.
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          He has pioneered a science-based approach to organizations drawing on anthropology, neuroscience and complex adaptive systems theory.
          His paper with Boone on Leadership was the cover article for the Harvard Business Review in November 2007 and also won the Academy of Management award for the best practitioner paper in the same year.
        </p>
        <p class="body-copy" key="p2">
          He has previously won a special award from the Academy for originality in his work on knowledge management.
          During his tenure at IBM, he was selected as one of the six on demand thinkers for a worldwide advertising campaign.
        </p>
        <p class="body-copy" key="p3">
          His company Cognitive Edge exists to integrate academic thinking with practice in organizations throughout the world and operates on a network model working with Academics, Government, Commercial Organizations, NGOs and Independent Consultants.
          He is also the main designer of the SenseMaker® software suite, originally developed in the field of counter-terrorism and now being actively deployed in both Government and Industry to handle issues of impact measurement, customer/employee insight, narrative-based knowledge management, strategic foresight and risk management.
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
