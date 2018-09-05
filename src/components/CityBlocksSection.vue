<template>
  <div class="container-fluid bg-secondary px-0">
    <div class="row">
      <div class="col-12">

        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 bg-ac-northwest px-4 py-4">
              <register-northwest class="h-100"
                :shows-link-to-city-page="true" />
            </div>

            <div class="col-12 col-md-6 bg-ac-newyork px-4 py-4">
              <register-new-york-metro class="h-100"
                :shows-link-to-city-page="true" />
            </div>

            <div class="col-12 col-md-6 bg-ac-dallas px-4 py-4">
              <register-dallas class="h-100"
                :shows-alert="true"
                :shows-link-to-city-page="true" />
            </div>

            <div class="col-12 col-md-6 bg-ac-sf px-4 py-4">
              <register-san-francisco class="h-100"
                :shows-link-to-city-page="true" />
            </div>
          </div>
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
/* TODO: Remove? */
/*
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
*/
</style>
