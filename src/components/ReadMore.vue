<template>
  <div>
    <transition-group name="fade">
      <slot v-if="isMoreShown"></slot>
    </transition-group>
    <p v-if="!isMoreShown" class="body-copy">
      <button
        type="button"
        class="btn btn-sm px-3"
        :class="buttonClass"
        @click="isMoreShown = true"
      >
        Read More
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: { default: 'btn-secondary', type: String }
  },

  data() {
    return {
      isMoreShown: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
