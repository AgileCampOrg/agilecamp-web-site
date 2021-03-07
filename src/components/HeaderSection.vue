<template>
  <div class="bg-header pt-header pb-4">
    <div class="bg-header-shape bg-header-shape-red">
      <section class="container pt-header-shape">
        <div class="row">
          <div class="col-12 col-xl-10 offset-xl-1 pt-1 pb-2">
            <img
              class="logo-main"
              src="~assets/images/AgileCamp_2021_White.svg"
            />
            <p class="lead font-italic text-white mt-2 ml-md-4 pl-md-4">
              Welcome to AgileCamp &mdash; a place to be inspired by the Agile
              community with endless opportunities to learn, play and network!
            </p>
          </div>
        </div>
      </section>

      <modal-dialog :value="isVideoShown" @close="isVideoShown = false">
        <vimeo-player
          class="bg-color-black"
          :delay="500"
          :options="videoOptions"
        />
      </modal-dialog>

      <section
        class="container-fluid container-auto px-0 pt-3"
        style="position: relative"
      >
        <div class="row no-gutters">
          <div
            class="col-12 pb-4 d-flex flex-row justify-content-center align-items-center"
          >
            <div>
              <img src="~assets/images/header-1.jpg" class="img-fluid" />
            </div>
            <div>
              <img src="~assets/images/header-2.jpg" class="img-fluid" />
            </div>
          </div>
        </div>

        <div
          class="row no-gutters"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        >
          <div
            class="col-4 offset-4 pb-2 d-flex flex-row justify-content-center align-items-center"
          >
            <div>
              <img
                v-if="!isVideoShown"
                src="~assets/images/play-button.png"
                class="img-fluid"
                style="max-height: 261px"
                @click="isVideoShown = true"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="container pt-3 pb-4">
        <header-announcement />
      </section>
    </div>
  </div>
</template>

<script>
import HeaderAnnouncement from '@/components/HeaderAnnouncement'
// import HeaderLineup from '@/components/HeaderLineup'
// import HeaderStayTuned from '@/components/HeaderStayTuned'
import ModalDialog from '@/components/ModalDialog'
import VimeoPlayer from '@/components/VimeoPlayer'

export default {
  components: {
    HeaderAnnouncement,
    // HeaderLineup,
    // HeaderStayTuned,
    ModalDialog,
    VimeoPlayer
  },

  data() {
    return {
      isVideoShown: false,

      videoOptions: {
        id: 320406515,
        byline: false,
        responsive: true,
        title: false
      }
    }
  }
}
</script>
