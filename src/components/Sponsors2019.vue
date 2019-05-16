<template>
  <div class="pb-2 pt-2">
    <div class="row justify-content-center">
      <hyperdrive />
      <j-p-morgan-chase />
      <nike />
    </div>

    <div class="row justify-content-center">
      <scrum-alliance />
      <certiprof />
      <matrix />
      <improving />
    </div>

    <div class="row justify-content-center">
      <eliassen-group />
      <objective-group />
      <i-c-a />
    </div>
  </div>
</template>

<script>
import Certiprof from '@/components/sponsors/Certiprof'
import EliassenGroup from '@/components/sponsors/EliassenGroup'
import Hyperdrive from '@/components/sponsors/Hyperdrive'
import ICA from '@/components/sponsors/ICA'
import Improving from '@/components/sponsors/Improving'
import JPMorganChase from '@/components/sponsors/JPMorganChase'
import Matrix from '@/components/sponsors/Matrix'
import Nike from '@/components/sponsors/Nike'
import ObjectiveGroup from '@/components/sponsors/ObjectiveGroup'
import ScrumAlliance from '@/components/sponsors/ScrumAlliance'

export default {
  components: {
    Certiprof,
    EliassenGroup,
    Hyperdrive,
    ICA,
    Improving,
    JPMorganChase,
    Matrix,
    Nike,
    ObjectiveGroup,
    ScrumAlliance
  }
}
</script>
