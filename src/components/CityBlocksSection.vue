<template>
  <!-- <div class=""> -->

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-6 bg-ac-northwest px-0 py-4">
          <div class="container-half d-flex flex-column justify-content-end ml-auto px-4">
            <register-northwest class="mx-2 my-3"
              :shows-link-to-city-page="true"
              :shows-prminent-register="false" />
          </div>
        </div>

        <div class="col-12 col-sm-6 bg-ac-newyork px-0 py-4">
          <div class="container-half d-flex flex-column justify-content-end mr-auto px-4">
            <register-new-york-metro class="mx-2 my-3"
              :shows-link-to-city-page="true"
              :shows-prminent-register="false" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 bg-ac-dallas px-0 py-4">
          <div class="container-half d-flex flex-column justify-content-end ml-auto px-4">
            <register-dallas class="mx-2 my-3"
              :shows-link-to-city-page="false"
              :shows-prminent-register="false" />
          </div>
        </div>

        <div class="col-12 col-sm-6 bg-ac-sf px-0 py-4">
          <div class="container-half d-flex flex-column justify-content-end mr-auto px-4">
            <register-san-francisco class="mx-2 my-3"
              :shows-link-to-city-page="false"
              :shows-prminent-register="false" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RegisterDallas from '@/components/RegisterDallas'
import RegisterNewYorkMetro from '@/components/RegisterNewYorkMetro'
import RegisterNorthwest from '@/components/RegisterNorthwest'
import RegisterSanFrancisco from '@/components/RegisterSanFrancisco'

export default {
  components: {
    RegisterDallas,
    RegisterNewYorkMetro,
    RegisterNorthwest,
    RegisterSanFrancisco
  }
}
</script>

<style scoped>
.container-half {
  width: 100%;
}

@media (min-width: 576px) {
  .container-half {
    max-width: 270px;
  }
}

@media (min-width: 768px) {
  .container-half {
    max-width: 360px;
  }
}

@media (min-width: 992px) {
  .container-half {
    max-width: 480px;
  }
}

@media (min-width: 1500px) {
  .container-half {
    max-width: 720px;
  }
}  
</style>
