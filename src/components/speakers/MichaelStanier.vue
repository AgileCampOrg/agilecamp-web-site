<template>
  <div class="row py-2" :class="textClass" id="speakerMichaelStanier">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-michael-stanier-port.jpg" alt="Michael Bungay Stanier">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">Michael Bungay Stanier</h4>
      <p class="body-copy" :class="bodyClass">
        Michael Bungay Stanier [Pronounced: BUN-gay STAN-yer with a slight Australian accent] is the bestselling author of <em>The Coaching Habit</em> and founder of Box of Crayons &mdash; a company known for teaching 10-minute coaching to busy leaders and managers so they can build better teams and more effective organizational cultures.
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          He left Australia 26 years ago to be a Rhodes Scholar at Oxford University &mdash; where his only significant achievement was falling in love with a Canadian &mdash; which is why he now lives in Toronto, having spent time in London and Boston.
        </p>
        <p class="body-copy" key="p2">
          Michael has written a number of books. His latest, the Wall Street Journal bestseller <em>The Coaching Habit</em>, has sold over half a million copies &mdash; and been praised as one of the few business books that makes people laugh.
        </p>
        <p class="body-copy" key="p3">
          Balancing out these moments of success, he was banned from his high school graduation for &ldquo;the balloon incident,&rdquo; was sued by one of his law school lecturers for defamation, and his first published piece of writing was a Harlequin romance short story called &ldquo;The Male Delivery.&rdquo;
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
