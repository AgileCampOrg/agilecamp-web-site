<template>
  <div class="row py-4">
    <div
      class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white"
    >
      <h2>Become an AgileCamp Sponsor</h2>

      <p class="body-copy">
        AgileCamp provides a unique networking environment to connect with
        professionals and attract industry leaders, which makes the event an
        unparalleled space to promote your company and/or product!
      </p>

      <p class="body-copy">
        Our sponsors play a crucial role in the success of our conferences. If
        you’re interested in participating in our program, find out everything
        you need to know about our
        <a target="_blank" :href="sponsorResLink"
          >Sponsorship&nbsp;Program here</a
        >.
      </p>
    </div>

    <div
      class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center"
    >
      <p class="text-center">
        <a
          class="btn btn-primary px-3 mx-2 my-2"
          target="_blank"
          :href="sponsorResLink"
          >2020 Sponsorship Program</a
        >
        <a
          class="btn btn-light px-3 mx-2 my-2"
          :href="emailLink"
          @click="trackContact(emailLink, 'sponsorResources')"
          >Contact Us with Questions</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Social link
      emailLink: process.env.emailLink,

      // Resource link
      sponsorResLink: process.env.sponsorResLink
    }
  }
}
</script>
