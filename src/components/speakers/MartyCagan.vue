<template>
  <div class="row py-2" :class="textClass" id="speakerMartyCagan">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-marty-cagan-port.jpg" alt="Jurgen Appello">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Marty Cagan</h4>
      <p class="body-copy" :class="bodyClass">
        Marty Cagan is the founder of the Silicon Valley Product Group (SVPG).
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          Before founding SVPG to pursue his interests in helping others create successful products through his writing, speaking, coaching and advising, Marty was most recently senior vice-president of product and design for eBay, where he was responsible for defining products and services for the company’s global e-commerce trading site.
        </p>
        <p class="body-copy" key="p2">
          Marty is a guest speaker at conferences and major tech companies around the globe, and is the author of the book <em>INSPIRED: How To Create Tech Products Customers Love.</em>
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
