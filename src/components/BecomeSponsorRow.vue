<template>
  <div class="row py-4">
    <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
      <h2>Become an AgileCamp Sponsor</h2>

      <p class="body-copy">
        AgileCamp can’t happen without our sponsors.
        To find out more about current sponsorship opportunities like exhibition booths, branded communications and custom engagements, please download our <a target="_blank" :href="sponsorResLink">Sponsorship Program</a> guide.
      </p>

      <p class="body-copy">
        AgileCamp attracts industry leading professionals and the next generation of leaders, making it the perfect place to promote your company or product!
      </p>
    </div>

    <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
      <p class="text-center">
        <a class="btn btn-primary px-3 mx-2 my-2" target="_blank" :href="sponsorResLink">2019 Sponsorship Program</a>
        <a class="btn btn-light px-3 mx-2 my-2" :href="emailLink" @click="trackContact(emailLink, 'sponsorResources')">Contact Us with Questions</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Social link
      emailLink: process.env.emailLink,

      // Resource link
      sponsorResLink: process.env.sponsorResLink
    }
  }
}
</script>
