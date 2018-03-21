<template>
  <div>
    <transition-group name="fade">
      <slot v-if="isMoreShown"></slot>
    </transition-group>
    <p class="body-copy" v-if="!isMoreShown">
      <button type="button" class="btn btn-sm btn-secondary" @click="isMoreShown = true">Read More</button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isMoreShown: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
