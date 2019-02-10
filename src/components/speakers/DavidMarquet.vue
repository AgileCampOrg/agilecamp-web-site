<template>
  <div class="row py-2" :class="textClass" id="speakerDavidMarquet">
    <div class="col-12 col-md-3">
      <div class="img-wrap-ac-speaker-port m-auto">
        <img class="img-fluid" src="~assets/images/speaker-david-marquet-port.jpg" alt="David Marquet">
      </div>
    </div>
    <div class="col-12 col-md-9 mt-2 text-center text-md-left">
      <h4 class="mt-2 mt-md-0">David Marquet</h4>
      <p class="body-copy" :class="bodyClass">
        David Marquet is an expert on leadership and organizational design, former submarine commander, and author of Amazon #1 Best Seller: <em>Turn the Ship Around!</em> and <em>Turn Your Ship Around!</em>
      </p>
      <read-more :class="bodyClass">
        <p class="body-copy" key="p1">
          David Marquet imagines a work place where everyone engages and contributes their full intellectual capacity, a place where people are healthier and happier because they have more control over their work &mdash; a place where everyone is a leader.
        </p>
        <p class="body-copy" key="p2">
          A 1981 U.S. Naval Academy graduate, Captain Marquet served in the U.S. submarine force for 28 years.
          After being assigned to command the nuclear powered submarine USS Santa Fe &mdash; then ranked last in retention and operational standing &mdash; he realized the traditional leadership approach of &ldquo;take control, give orders,&rdquo; wouldn’t work.
          He &ldquo;turned the ship around&rdquo; by treating the crew as leaders, not followers, and giving control, not taking control.
          This approach took the Santa Fe from &ldquo;worst to first,&rdquo; achieving the highest retention and operational standings in the navy.
        </p>
        <p class="body-copy" key="p3">
          After Captain Marquet’s departure, the Santa Fe continued to win awards and promoted a disproportionate number of officers and enlisted men to leadership positions, including ten subsequent submarine captains.
          Stephen R. Covey said it was the most empowering organization he’d ever seen and wrote about Captain Marquet’s leadership practices in his book, <em>The 8th Habit</em>.
        </p>
        <p class="body-copy" key="p4">
          Captain Marquet is the author of <em>Turn the Ship Around! A True Story of Turning Followers Into Leaders.</em> Fortune magazine named it the #1 must-read business book of the year, and USA Today listed it as one of the top 12 business books of all time.
          He is also the author of <em>Turn Your Ship Around! A workbook for implementing Intent-Based Leadership.</em>
        </p>
        <p class="body-copy" key="p5">
          Captain Marquet retired from the Navy in 2009, and now speaks to audiences around the globe who want to create empowering work environments that release the passion, initiative, and intellect of each person.
          This bold and highly effective framework is summarized as &ldquo;give control, create leaders.&rdquo;
          He is a life member of the Council on Foreign Relations, and in 2015 was named to the American Management Association’s &ldquo;Leaders to Watch&rdquo; list.
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
