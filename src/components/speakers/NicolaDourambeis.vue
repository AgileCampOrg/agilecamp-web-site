<template>
  <div id="speakerNicolaDourambeis" class="row py-2" :class="textClass">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img
          class="img-fluid img-brighten-120"
          src="~assets/images/speaker-nicola-dourambeis-port.jpg"
          alt="Nicola Dourambeis"
        />
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Nicola Dourambeis</h4>
      <p class="body-copy" :class="bodyClass">
        Nicola is an experienced technology executive with an extensive
        background in innovative technology delivery, agile transformation, and
        organizational strategy.
      </p>
      <read-more :class="bodyClass">
        <p key="p1" class="body-copy">
          As a VP at salesforce.com, she built one of the strongest enterprise
          agile programs in the industry, encompassing more than 200 teams
          spanning software and infrastructure during the time when the company
          was tripling in size and growing their product lines five-fold.
        </p>
        <p key="p2" class="body-copy">
          Nicola has worked for, and consulted with, companies as diverse as
          ThoughtWorks, Athena Health, Medium, eBay, Yahoo!, Twitter, Siemens
          Medical, and British Telecom.
        </p>
        <p key="p3" class="body-copy">
          Nicola has been recruited by Obama’s White House, is an invited
          keynote speaker and was named one of the &ldquo;21 Rising Technical
          SuperStars&rdquo;.
        </p>
      </read-more>
    </div>
  </div>
</template>

<script>
import ReadMore from '@/components/ReadMore'

export default {
  components: {
    ReadMore
  },
  props: {
    textClass: { default: '', type: String }
  },

  computed: {
    bodyClass() {
      return this.textClass || 'text-muted'
    }
  }
}
</script>
