<template>
  <div class="pb-2 pt-2">
    <div class="row justify-content-center">
      <hyperdrive />
      <nike />
      <j-p-morgan-chase />
      <improving />
    </div>
  </div>
</template>

<script>
import Hyperdrive from '@/components/sponsors/Hyperdrive'
import Improving from '@/components/sponsors/Improving'
import JPMorganChase from '@/components/sponsors/JPMorganChase'
import Nike from '@/components/sponsors/Nike'

export default {
  components: {
    Hyperdrive,
    Improving,
    JPMorganChase,
    Nike
  }
}
</script>
