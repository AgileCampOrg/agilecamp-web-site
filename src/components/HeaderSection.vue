<template>
  <div class="bg-header pt-header pb-4">
    <div class="bg-header-shape bg-header-shape-red">
      <section class="container pt-header-shape">
        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 pt-1 pb-2">
            <img class="logo-main" src="~assets/images/AgileCamp_2019_White.svg" />
            <p class="lead font-italic text-white mt-2 ml-md-4 pl-md-4">Welcome to AgileCamp &mdash; a place to be inspired by the Agile community with endless opportunities to learn, play and network!</p>
          </div>
        </div>
      </section>

      <modal-dialog :value="isVideoShown" @close="isVideoShown = false">
        <vimeo-player class="bg-color-black" :delay="500" :options="videoOptions" />
      </modal-dialog>

      <section class="container-fluid container-auto px-0 pt-3" style="position: relative;">
        <div class="row no-gutters">
          <div class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center">
            <div><img src="~assets/images/header-1.jpg" class="img-fluid" /></div>
            <div><img src="~assets/images/header-2.jpg" class="img-fluid" /></div>
          </div>
        </div>

        <div class="row no-gutters" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
          <div class="col-4 offset-4 pb-2 d-flex flex-row justify-content-center align-items-center">
            <div><img src="~assets/images/play-button.png" class="img-fluid" style="max-height: 261px;" v-if="!isVideoShown" @click="isVideoShown = true" /></div>
          </div>
        </div>
      </section>

      <section class="container pt-3 pb-4">
        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 text-white">
            <p class="lead font-italic font-weight-bold mb-1">This year’s theme is Business Agility: Platforms for&nbsp;Change.</p>
            <p class="lead font-italic">
              When embraced by the entire company, Agile is a foundation of change that improves strategy, product innovation, and culture.&nbsp;
              At&nbsp;AgileCamp 2019, we’ll cover all of these angles and more!
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 py-4 text-white">
            <router-link class="row pt-2 border-bottom border-danger link-blue" :to="{ name: '2019-chicago' }">
              <div class="col-12 col-sm-8 pb-1">
                <h4 style="position: relative;">
                  <span class="font-weight-bold text-uppercase mr-2">Chicago</span> May&nbsp;6
                  <!-- <span class="font-weight-bold text-uppercase text-nowrap text-white ml-4 px-4 py-4 snipe" style="font-size: 80%;">Just added!</span> -->
                </h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Details</h4>
              </div>
            </router-link>

            <router-link class="row pt-2 border-bottom border-danger link-blue" :to="{ name: '2019-portland' }">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">Portland</span> Sep&nbsp;20</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </router-link>

            <router-link class="row pt-2 border-bottom border-danger link-blue" :to="{ name: '2019-newyorkmetro' }">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">New York Metropolitan</span> Oct&nbsp;4</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </router-link>

            <router-link class="row pt-2 border-bottom border-danger link-blue" :to="{ name: '2019-dallas' }">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">Dallas</span> Nov&nbsp;1</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </router-link>

            <router-link class="row pt-2 border-bottom border-danger link-blue" :to="{ name: '2019-sanfrancisco' }">
              <div class="col-12 col-sm-8 pb-1">
                <h4><span class="font-weight-bold text-uppercase mr-2">San Francisco</span> Dec&nbsp;6</h4>
              </div>
              <div class="col-12 col-sm-4 pb-1">
                <h4 class="font-weight-light">Register / Details</h4>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ModalDialog from '@/components/ModalDialog'
import VimeoPlayer from '@/components/VimeoPlayer'

export default {
  components: {
    ModalDialog,
    VimeoPlayer
  },

  data () {
    return {
      isVideoShown: false,

      videoOptions: {
        id: 320406515,
        byline: false,
        responsive: true,
        title: false
      },

      // Event data
      event: process.env.events.year2019
    }
  }

  // mounted () {
  // },
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
