<template>
  <div class="bg-color-blue">
    <section class="container py-4">
      <div class="row">
        <div class="col-6 d-flex flex-column text-white text-uppercase">
          <span class="py-2"><a :href="emailLink" class="text-white" @click="trackContact(emailLink, 'contactSection')">Contact Us</a></span>
          <span class="py-2"><router-link class="text-white" :to="{name: 'codeofconduct'}">Code of Conduct</router-link></span>
        </div>

        <div class="col-6 d-flex flex-column align-items-end text-white text-right">
          <span class="py-2">Copyright &copy; 2013-2018 AgileCamp&trade;</span>
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
