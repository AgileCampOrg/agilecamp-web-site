<template>
  <div>
    <div class="modal-backdrop show" v-if="value" />

    <transition name="fade" mode="out-in">
      <div class="modal show" style="display: block;" v-if="value" @click="close">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  methods: {
    close () {
      this.$emit('close')
    }
  },

  watch: {
    value (newValue) {
      if (newValue) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 980px;
    margin: 1.75rem auto;
  }
  .modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2));
  }
}
</style>
