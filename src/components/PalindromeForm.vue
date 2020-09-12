<template>
  <div class="palindrome-form">
    <form @submit.prevent="checkPalindrome">
      <label>
        <input
          type="text"
          name="palindrome"
          placeholder="Palindrome"
          v-model="palindrome"
          @focusin="clear"
        />
      </label>
      <span class="message" v-if="message">{{ message }}</span>
      <span class="error" v-if="error">{{ error }}</span>
      <button type="submit" :disabled="!palindrome">Check</button>
    </form>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      palindrome: null,
      message: null,
      error: null,
      isChecked: false
    };
  },
  methods: {
    clear() {
      if (this.isChecked) {
        this.palindrome = null;
        this.message = null;
        this.error = null;
        this.isChecked = false;
      }
    },
    checkPalindrome() {
      this.$store
        .dispatch("checkPalindrome", this.palindrome)
        .then(message => (this.message = message))
        .catch(error => (this.error = error))
        .finally(() => (this.isChecked = true));
    }
  }
};
</script>
