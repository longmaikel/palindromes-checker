<template>
  <form @submit.prevent="checkPalindrome" class="palindrome-form">
    <span class="message">{{ message }}</span>
    <input
      type="text"
      name="palindrome"
      placeholder="Palindrome"
      v-model="palindrome"
      @focusin="clear"
    />
    <button type="submit" :disabled="!palindrome">Check</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      palindrome: null,
      message: null,
      isChecked: false
    };
  },
  methods: {
    clear() {
      if (this.isChecked) {
        this.palindrome = null;
        this.message = null;
        this.isChecked = false;
      }
    },
    checkPalindrome() {
      this.$store
        .dispatch("checkPalindrome", this.palindrome)
        .then(message => (this.message = message))
        .catch(error => (this.message = error))
        .finally(() => (this.isChecked = true));
    }
  }
};
</script>
