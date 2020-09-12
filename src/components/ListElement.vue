<template>
  <li :class="isPalindrome ? 'palindrome' : 'non-palindrome'">
    {{ value }}
  </li>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    isPalindrome: {
      type: Boolean,
      required: true
    }
  }
}
</script>