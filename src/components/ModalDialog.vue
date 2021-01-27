<template>
  <div>
    <div v-if="value" class="modal-backdrop show" />

    <transition name="fade" mode="out-in">
      <div
        v-if="value"
        class="modal show"
        style="display: block"
        @click="close"
      >
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

  watch: {
    value(newValue) {
      if (newValue) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  },

  methods: {
    close() {
      this.$emit('close')
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
