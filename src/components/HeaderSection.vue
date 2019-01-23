<template>
  <div class="bg-ac-header pt-header pb-4">
    <div class="bg-red-header-shape">
      <section class="container pt-3">
        <div class="row">
          <div class="col-12 text-white text-right">
            <h4 class="font-weight-bold text-uppercase text-nowrap d-none d-md-block">New Events Coming Soon!</h4>
            <h6 class="font-weight-bold text-uppercase text-nowrap d-md-none">New Events Coming Soon!</h6>
          </div>
        </div>

        <div class="row">
          <div class="col-10 offset-sm-1 pt-4 pb-2 d-none d-sm-block" style="left: -50px;">
            <img src="~assets/images/AgileCamp_2019_White.svg" style="width: 400px;" />
          </div>

          <div class="col-12 pt-4 pb-2 d-block d-sm-none">
            <img src="~assets/images/AgileCamp_2019_White.svg" style="width: 300px;" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 pb-2 text-white">
            <p class="lead font-italic">Welcome to AgileCamp &mdash; a place to be inspired by the Agile community with endless opportunities to learn, play and network!</p>
          </div>
        </div>
      </section>

      <section class="container-fluid px-0 pt-3 d-block d-xl-none">
        <div class="row no-gutters">
          <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
            <div><img src="~assets/images/header-1.jpg" class="img-fluid" /></div>
            <div><img src="~assets/images/header-2.jpg" class="img-fluid" /></div>
          </div>
        </div>
      </section>

      <section class="container px-0 pt-3 d-none d-xl-block">
        <div class="row no-gutters">
          <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
            <div><img src="~assets/images/header-1.jpg" class="img-fluid" /></div>
            <div><img src="~assets/images/header-2.jpg" class="img-fluid" /></div>
          </div>
        </div>
      </section>

      <section class="container pt-3 pb-4">
        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 pb-4 text-white">
            <p class="lead font-italic font-weight-bold mb-1">This year’s theme is Business Agility: Platforms for&nbsp;Change.</p>
            <p class="lead font-italic font-weight-light">
              When embraced by the entire company, Agile is a foundation of change that improves strategy, product innovation, and culture.
              At&nbsp;AgileCamp 2019, we’ll cover all of these angles and more!
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 py-4 text-white">
            <a class="row pt-2 border-bottom border-danger link-blue" :href="event.chicago.registerLink" target="_blank">
              <div class="col-12 col-sm-8 pb-1">
                <h4 style="position: relative;">
                  <span class="font-weight-bold text-uppercase mr-2">Chicago</span> May&nbsp;6
                  <span class="font-weight-bold text-uppercase text-nowrap text-white ml-4 px-4 py-4 snipe" style="font-size: 80%;">Just added!</span>
                </h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </a>

            <a class="row pt-2 border-bottom border-danger link-blue" :href="event.portland.registerLink" target="_blank">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">Portland</span> Sep&nbsp;20</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </a>

            <a class="row pt-2 border-bottom border-danger link-blue" :href="event.newYorkMetro.registerLink" target="_blank">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">New York Metropolitan</span> Oct&nbsp;4</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </a>

            <a class="row pt-2 border-bottom border-danger link-blue" :href="event.dallas.registerLink" target="_blank">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">Dallas</span> Nov&nbsp;1</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </a>

            <a class="row pt-2 border-bottom border-danger link-blue" :href="event.sanFrancisco.registerLink" target="_blank">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">San Francisco</span> Dec&nbsp;6</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Event data
      event: process.env.events.year2019
    }
  }
}
</script>

<style scoped>
.snipe {
  background-repeat: no-repeat;
  background-image: url(~assets/images/red-snipe.svg);
  background-position: center center;
  transform: rotate(-10deg);
  position: absolute;
  top: -2.5rem;
}
</style>
