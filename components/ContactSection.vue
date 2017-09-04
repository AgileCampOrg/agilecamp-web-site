<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6 py-4 text-white" :class="classLeft">
        <h1 class="display-3">Contact</h1>
        <p class="body-copy">
          Please feel free to contact us with any questions at <a :href="emailLink" class="text-white" @click="trackContact(emailLink, 'contactSection')">info@agilecamp.org</a>
        </p>
      </div>
      <div class="col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-center align-items-center" :class="classRight">
        <div class="btn-group">
          <a class="btn btn-lg btn-outline-secondary text-white" target="_blank" :href="facebookLink" role="button"><i class="fa fa-3x fa-fw fa-facebook-f" aria-hidden="true"></i></a>
          <a class="btn btn-lg btn-outline-secondary text-white" target="_blank" :href="twitterLink" role="button"><i class="fa fa-3x fa-fw fa-twitter" aria-hidden="true"></i></a>
          <a class="btn btn-lg btn-outline-secondary text-white" target="_blank" :href="googlePlusLink" role="button"><i class="fa fa-3x fa-fw fa-google-plus" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    classLeft: String,
    classRight: String
  },

  data () {
    return {
      // Social links
      emailLink: process.env.emailLink,
      facebookLink: process.env.facebookLink,
      googlePlusLink: process.env.googlePlusLink,
      twitterLink: process.env.twitterLink
    }
  }
}
</script>
