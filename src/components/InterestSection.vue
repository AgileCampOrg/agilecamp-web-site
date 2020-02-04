<template>
  <div class="bg-color-red">
    <section class="container">
      <div class="row text-white">
        <transition name="fade" mode="out-in">
          <div
            v-if="didSubmitInterest"
            key="didSubmitInterest"
            class="col-12 col-sm-10 offset-sm-1 py-2 py-4"
          >
            <strong>Thank you for sharing.</strong> We look forward to seeing
            you at AgileCamp 2019!
          </div>

          <div v-else class="col-12 col-sm-10 offset-sm-1 py-2 py-4">
            <label for="interestEmail" class="lead"
              >We’re currently planning AgileCamp 2020. Stay in touch with
              us!</label
            >

            <fieldset class="form-group ml-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    v-model="interestOpts.opportunities"
                    class="form-check-input"
                    type="checkbox"
                    true-value="yes"
                    false-value="no"
                  />
                  I’m interested in sponsorship/partnership opportunities
                </label>
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <input
                    v-model="interestOpts.city"
                    class="form-check-input"
                    type="checkbox"
                    true-value="yes"
                    false-value="no"
                  />
                  I want AgileCamp in my city
                </label>
              </div>

              <div class="form-check">
                <label class="form-check-label">
                  <input
                    v-model="interestOpts.volunteer"
                    class="form-check-input"
                    type="checkbox"
                    true-value="yes"
                    false-value="no"
                  />
                  I want to volunteer
                </label>
              </div>
            </fieldset>

            <div class="form-group row">
              <div class="col-12">
                <input
                  id="interestEmail"
                  v-model="interestEmail"
                  class="form-control form-control-danger form-control-danger-alt"
                  :class="interestEmailError ? 'is-invalid' : ''"
                  type="email"
                  placeholder="Email address"
                  @keyup.enter="submitInterest"
                />
              </div>
              <div class="col-12">
                <div v-if="interestEmailError" class="form-text text-danger">
                  {{ interestEmailError }}
                </div>
                <div v-else class="form-text text-muted">
                  We’ll never share this.
                </div>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary btn-sm px-3"
              @click="submitInterest"
            >
              Submit
            </button>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      didSubmitInterest: false,

      interestEmail: '',
      interestEmailError: null,
      interestOpts: {
        city: 'no',
        dates: 'yes',
        opportunities: 'no',
        speaker: 'no',
        volunteer: 'no'
      }
    }
  },

  watch: {
    interestEmail() {
      this.interestEmailError = null
    }
  },

  methods: {
    submitInterest() {
      const email = this.interestEmail

      if (/\S+@\S+\.\S+/.test(email)) {
        this.$root.$options.$tracker.identify({ email })
        this.$root.$options.$tracker.trackAction('interest', this.interestOpts)

        this.didSubmitInterest = true
      } else {
        this.interestEmailError =
          'Sorry, that doesn’t look like a valid email address.'
      }
    }
  }
}
</script>
