<template>
  <div class="pb-2 pt-2">
    <div class="row justify-content-center">
      <hyperdrive />
      <toyota-connected />
      <j-p-morgan-chase />
      <nike />
    </div>

    <div class="row justify-content-center">
      <scrum-alliance />
      <propeller />
      <improving />
      <scrum-org />
      <slalom />
    </div>

    <div class="row justify-content-center">
      <kforce />
      <matrix />
      <eliassen-group />
      <objective-group />
      <certiprof />
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
import Kforce from '@/components/sponsors/Kforce'
import Matrix from '@/components/sponsors/Matrix'
import Nike from '@/components/sponsors/Nike'
import ObjectiveGroup from '@/components/sponsors/ObjectiveGroup'
import Propeller from '@/components/sponsors/Propeller'
import ScrumAlliance from '@/components/sponsors/ScrumAlliance'
import ScrumOrg from '@/components/sponsors/ScrumOrg'
import Slalom from '@/components/sponsors/Slalom'
import ToyotaConnected from '@/components/sponsors/ToyotaConnected'

export default {
  components: {
    Certiprof,
    EliassenGroup,
    Hyperdrive,
    ICA,
    Improving,
    JPMorganChase,
    Kforce,
    Matrix,
    Nike,
    ObjectiveGroup,
    Propeller,
    ScrumAlliance,
    ScrumOrg,
    Slalom,
    ToyotaConnected
  }
}
</script>
