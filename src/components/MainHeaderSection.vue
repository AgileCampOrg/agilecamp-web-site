<template>
  <div class="bg-ac-main pt-header">
    <section class="container py-4">
      <div class="row">
        <div class="col-12 col-md-10 offset-md-1">
          <div class="d-flex flex-column px-4 py-4 bg-color-black-alpha-80 text-white">
            <div class="mb-3 pb-3 border-bottom border-light text-center">
              <span class="lead">Join the world's most inspired gathering of Agile Leaders at AgileCamp 2018</span>
            </div>

            <router-link class="d-flex flex-column flex-md-row align-items-center align-items-md-start my-2 h2" :to="{name: '2018-northwest'}">
              <img class="img-red-star mx-3 my-1" src="~assets/images/red-star.png" />
              <span class="mr-md-auto my-1 text-uppercase text-center text-md-left">Northwest/<wbr />Portland</span>
              <span class="col-md-3 my-1 text-center text-md-left">Sep 14</span>
            </router-link>

            <router-link class="d-flex flex-column flex-md-row align-items-center align-items-md-start my-2 h2" :to="{name: '2018-newyorkmetro'}">
              <img class="img-red-star mx-3 my-1" src="~assets/images/red-star.png" />
              <span class="mr-md-auto my-1 text-uppercase text-center text-md-left">New York Metro Area</span>
              <span class="col-md-3 my-1 text-center text-md-left">Sep 24</span>
            </router-link>

            <a class="d-flex flex-column flex-md-row align-items-center align-items-md-start my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-dallas-2018-registration-43798159474" target="_blank">
              <img class="img-red-star mx-3 my-1" src="~assets/images/red-star.png" />
              <span class="mr-md-auto my-1 text-uppercase text-center text-md-left">Dallas–Fort Worth</span>
              <span class="col-md-3 my-1 text-center text-md-left">Nov 2</span>
            </a>

            <a class="d-flex flex-column flex-md-row align-items-center align-items-md-start my-2 h2" href="https://www.eventbrite.com/e/agile-agilecamp-san-francisco-bay-area-2018-registration-43798886649" target="_blank">
              <img class="img-red-star mx-3 my-1" src="~assets/images/red-star.png" />
              <span class="mr-md-auto my-1 text-uppercase text-center text-md-left">San Francisco</span>
              <span class="col-md-3 my-1 text-center text-md-left">Nov 30</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
