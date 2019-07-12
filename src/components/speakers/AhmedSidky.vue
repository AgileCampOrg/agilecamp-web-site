<template>
  <div class="row py-2" :class="textClass" id="speakerAhmedSidky">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-ahmed-sidky-port.jpg" alt="Ahmed Sidky">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Ahmed Sidky</h4>
      <p class="body-copy" :class="bodyClass">
        Ahmed Sidky, Ph.D., is a global thought-leader in Business Agility.
        He has been at Riot Games for about 5 years where is was the Head of Development Management and is now the the Head of Business Agility.
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          Before Riot, Ahmed was a enterprise agile consultant for a number of Fortune 100 companies, guiding enterprise Agile transformations, educated leaders on the Agile mindset, and creating customer-centric cultures of learning.
        </p>
        <p class="body-copy" key="p2">
          He is the President of the International Consortium for Agile (ICAgile) and the co-founder of the Business Agility Institute; co-author of <em>Becoming Agile in an Imperfect World</em>; and a seasoned international keynote speaker.
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
