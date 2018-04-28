<template>
  <div class="bg-ac-main-blur">
    <section class="container py-4" id="sponsorSection">
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
            <a class="btn btn-primary px-4 mx-1 my-1" target="_blank" :href="sponsorResLink">2018 sponsorship program</a>
            <a class="btn btn-info px-4 mx-1 my-1" :href="emailLink" @click="trackContact(emailLink, 'sponsorResources')">Contact us with questions</a>
          </p>
        </div>
      </div>

      <div class="row pt-4 border-top border-light">
        <div class="col-12 text-white">
          <h4>2018 AgileCamp Sponsors</h4>
        </div>
      </div>

      <div class="row pb-2">
        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://nike.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-nike-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.prudential.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-prudential-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://hyperdriveagile.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-hyperdrive-white.png" /></a>
        </div>

<!--
        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.capitalone.com" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-capitalone-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.ca.com/us.html" target="_blank" class="mx-2"><img class="img-fluid" src="~assets/images/sponsor-catechnologies-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://agilecraft.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-agilecraft-white.png" /></a>
        </div>
 -->

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://improving.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-improving-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.infoq.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-infoq-white.png" /></a>
        </div>

<!--
        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://agilityhealthradar.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-agilityhealth-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.axelos.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-axelos-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.intuit.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-intuit-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://propellerconsulting.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-propeller-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.versionone.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-versionone-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.daugherty.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-teamdaugherty-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://www.thei4group.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-i4group-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://www.brattoninc.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-bratton-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://icagile.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-ica-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://www.eliassen.com/agile/" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-eliassengroup-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://disciplinedagileconsortium.org" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-dac-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.scrumalliance.org" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-scrumalliance-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.digite.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-digite-white.png" /></a>
        </div>

        <div class="col-12 col-md-6 col-lg-4 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://www.northeastern.edu/graduate/" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-nupjm-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://www.casthighlight.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-casthighlight-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="https://monarchagile.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-monarch-white.png" /></a>
        </div>

        <div class="col-6 col-md-3 col-lg-2 px-4 py-4 d-flex flex-row flex-nowrap align-items-center">
          <a href="http://scottambler.com" target="_blank"><img class="img-fluid" src="~assets/images/sponsor-scottambler-white.png" /></a>
        </div>
-->
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
      sponsorResLink: process.env.sponsorResLink
    }
  }
}
</script>
