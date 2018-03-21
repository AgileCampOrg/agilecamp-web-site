<template>
  <div class="bg-color-blue">
    <section class="container">
      <div class="row">
        <div class="col-12 col-md-6 py-4 text-white">
          <h1 class="display-4">Contact Us</h1>

          <p class="body-copy">
            Please feel free to contact us with any questions at <a :href="emailLink" class="text-white" @click="trackContact(emailLink, 'contactSection')">info@agilecamp.org</a>
          </p>
        </div>

        <div class="col-12 col-md-6 py-4 text-white d-flex flex-column justify-content-end align-items-end">
          <p class="body-copy">
            Copyright &copy; 2013-2018 AgileCamp&trade;
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Social links
      emailLink: process.env.emailLink
    }
  }
}
</script>
