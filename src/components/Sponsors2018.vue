<template>
  <div class="pb-2 pt-2">
    <div class="row justify-content-center">
      <hyperdrive />
      <nike />
      <prudential />
      <toyota-connected />
      <atlassian />
      <bratton />
    </div>

    <div class="row justify-content-center">
      <kforce />
      <i-c-a />
      <d-a-c />
      <scrum-alliance />
      <collab-net-v-o />
      <info-q />
    </div>

    <div class="row justify-content-center">
      <improving />
      <matrix />
      <eliassen-group />
      <slalom />
      <propeller />
      <s-o-s />
    </div>
  </div>
</template>

<script>
import Atlassian from '@/components/sponsors/Atlassian'
import Bratton from '@/components/sponsors/Bratton'
import CollabNetVO from '@/components/sponsors/CollabNetVO'
import DAC from '@/components/sponsors/DAC'
import EliassenGroup from '@/components/sponsors/EliassenGroup'
import Hyperdrive from '@/components/sponsors/Hyperdrive'
import ICA from '@/components/sponsors/ICA'
import Improving from '@/components/sponsors/Improving'
import InfoQ from '@/components/sponsors/InfoQ'
import Kforce from '@/components/sponsors/Kforce'
import Matrix from '@/components/sponsors/Matrix'
import Nike from '@/components/sponsors/Nike'
import Propeller from '@/components/sponsors/Propeller'
import Prudential from '@/components/sponsors/Prudential'
import ScrumAlliance from '@/components/sponsors/ScrumAlliance'
import Slalom from '@/components/sponsors/Slalom'
import SOS from '@/components/sponsors/SOS'
import ToyotaConnected from '@/components/sponsors/ToyotaConnected'

export default {
  components: {
    Atlassian,
    Bratton,
    CollabNetVO,
    DAC,
    EliassenGroup,
    Hyperdrive,
    ICA,
    Improving,
    InfoQ,
    Kforce,
    Matrix,
    Nike,
    Propeller,
    Prudential,
    ScrumAlliance,
    Slalom,
    SOS,
    ToyotaConnected
  }
}
</script>
