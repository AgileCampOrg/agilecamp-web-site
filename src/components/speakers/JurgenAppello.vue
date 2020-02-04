<template>
  <div id="speakerJurgenAppello" class="row py-2" :class="textClass">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img
          class="img-fluid"
          src="~assets/images/speaker-jurgen-appello-port.jpg"
          alt="Jurgen Appello"
        />
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Jurgen Appelo</h4>
      <p class="body-copy" :class="bodyClass">
        As a serial founder, successful entrepreneur, author and speaker, Jurgen
        is pioneering management to help creative organizations survive and
        thrive in the 21st century. He offers concrete games, tools, and
        practices so you can introduce better management with fewer managers.
      </p>
      <read-more :class="bodyClass">
        <p key="p1" class="body-copy">
          Inc.com has called him a Top 50 Leadership Expert and a Top 100
          Leadership Speaker. Since 2008, Jurgen writes a popular blog at
          NOOP.NL, offering ideas on the creative economy, agile management,
          organizational change, and personal development.
        </p>
        <p key="p2" class="body-copy">
          He is the author of the book <em>Management 3.0</em>, which describes
          the role of the manager in agile organizations. Jurgen has a new book,
          <em>Start-up, Scale-up and Screw-up</em> soon to be released in April
          2019.
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
