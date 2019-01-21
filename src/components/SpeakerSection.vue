<template>
  <div class="bg-ac-main-blur">
    <section class="container py-4" id="speakerSection">
      <div class="row py-4">
        <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
          <h2>Accepting 2019 Speaker Submissions</h2>

          <p class="body-copy">
            Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!
            This is a distinct opportunity to increase your brand awareness while growing your personal brand exponentially.
          </p>

          <p class="body-copy">
            Our past speakers have included an incredible group of inspirational thought leaders whose talks were designed to inspire action and fuel innovation.
          </p>

          <p class="body-copy">
            <a class="text-white" target="_blank" :href="speakerResLink">Apply now!</a>
          </p>

          <p class="">
            <a class="btn btn-light px-3 mx-2 my-2" :href="emailLink" @click="trackContact(emailLink, 'speakerResources')">Contact Us with Questions</a>
            <a class="btn btn-primary px-3 mx-2 my-2" target="_blank" :href="speakerResLink">2019 Speaker Application</a>
          </p>
        </div>

        <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <img src="~assets/images/speaker-3.jpg" class="img-fluid img-discover d-none d-lg-block" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Social link
      emailLink: process.env.emailLink,

      // Resource link
      speakerResLink: process.env.speakerResLink
    }
  }
}
</script>
