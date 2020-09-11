<template>
  <div class="home">
    <h1>Palindromes checker</h1>
    <palindrome-form></palindrome-form>
    <palindromes-list></palindromes-list>
  </div>
</template>

<script>
import PalindromeForm from "@/components/PalindromeForm";
import PalindromesList from "@/components/PalindromesList";
export default {
  name: "Home",
  components: {
    PalindromeForm,
    PalindromesList
  }
};
</script>
