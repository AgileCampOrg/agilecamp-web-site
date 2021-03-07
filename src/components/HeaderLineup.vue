<template>
  <div class="row">
    <div class="col-12 col-xl-10 offset-xl-1 py-4 text-white">
      <router-link
        class="row pt-2 border-bottom border-danger link-blue"
        :to="{ name: '2019-chicago' }"
      >
        <div class="col-12 col-sm-8 pb-1">
          <h4 style="position: relative">
            <span class="font-weight-bold text-uppercase mr-2">Chicago</span>
            May&nbsp;6
            <span
              class="font-weight-bold text-uppercase text-nowrap text-white ml-4 px-4 py-4 snipe"
              style="font-size: 80%"
              >Just added!</span
            >
          </h4>
        </div>
        <div class="col-12 col-sm-4 pb-1">
          <h4 class="font-weight-light">Details</h4>
        </div>
      </router-link>

      <router-link
        class="row pt-2 border-bottom border-danger link-blue"
        :to="{ name: '2019-portland' }"
      >
        <div class="col-12 col-sm-8 pb-1">
          <h4>
            <span class="font-weight-bold text-uppercase mr-2">Portland</span>
            Sep&nbsp;20
          </h4>
        </div>
        <div class="col-12 col-sm-4 pb-1">
          <h4 class="font-weight-light">Details</h4>
        </div>
      </router-link>

      <router-link
        class="row pt-2 border-bottom border-danger link-blue"
        :to="{ name: '2019-newyorkmetro' }"
      >
        <div class="col-12 col-sm-8 pb-1">
          <h4>
            <span class="font-weight-bold text-uppercase mr-2"
              >New York Metropolitan</span
            >
            Oct&nbsp;4
          </h4>
        </div>
        <div class="col-12 col-sm-4 pb-1">
          <h4 class="font-weight-light">Details</h4>
        </div>
      </router-link>

      <router-link
        class="row pt-2 border-bottom border-danger link-blue"
        :to="{ name: '2019-dallas' }"
      >
        <div class="col-12 col-sm-8 pb-1">
          <h4>
            <span class="font-weight-bold text-uppercase mr-2">Dallas</span>
            Nov&nbsp;1
          </h4>
        </div>
        <div class="col-12 col-sm-4 pb-1">
          <h4 class="font-weight-light">Details</h4>
        </div>
      </router-link>

      <router-link
        class="row pt-2 border-bottom border-danger link-blue"
        :to="{ name: '2019-sanfrancisco' }"
      >
        <div class="col-12 col-sm-8 pb-1">
          <h4>
            <span class="font-weight-bold text-uppercase mr-2"
              >San Francisco</span
            >
            Dec&nbsp;6
          </h4>
        </div>
        <div class="col-12 col-sm-4 pb-1">
          <h4 class="font-weight-light">Register / Details</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

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
