<template>
<div class="palindrome-form">
  <form @submit.prevent="checkPalindrome">
    <span class="message">{{ message }}</span>
    <input type="text" name="palindrome" placeholder="Palindrome" v-model="palindrome">
    <button type="submit">Check</button>
  </form>
</div>
</template>
<script>
export default {
  data: () => {
    return {
      palindrome: null,
      message: null
    };
  },
  methods: {
    checkPalindrome() {
      this.$store.dispatch('checkPalindrome', this.palindrome);
    }
  }
};
</script>