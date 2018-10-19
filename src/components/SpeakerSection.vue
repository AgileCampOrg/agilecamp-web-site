<template>
  <div class="bg-ac-main-blur">
    <section class="container py-4" id="speakerSection">
      <div class="row py-4">
        <div class="col-12 col-lg-8 d-flex flex-column justify-content-center text-white">
          <h2>Accepting 2018 Speaker Submissions</h2>

          <p class="body-copy">
            Speaking at AgileCamp is a great way to contribute and make an impact on the Agile and Lean community!
            Let us know how you’re shaping the future of Agile tools and methodologies and share your message.
            Talks range on a variety of topics, and for a better idea, check out examples of past keynotes below.
          </p>

          <p class="body-copy">
            <a class="text-white" target="_blank" :href="speakerResLink">Submit your application now!</a>
          </p>

          <p class="">
            <a class="btn btn-info px-3 mx-1 my-1" :href="emailLink" @click="trackContact(emailLink, 'speakerResources')">Contact us with questions</a>
            <a class="btn btn-primary px-3 mx-1 my-1" target="_blank" :href="speakerResLink">2018 speaker application</a>
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
