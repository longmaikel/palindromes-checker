<template>
  <div class="palindromes-list">
    <h2>History</h2>
    <ul v-for="item in history" :key="item.value">
      <list-element :value="item.value" :is-palindrome="item.isPalindrome"></list-element>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListElement from "@/components/ListElement";
export default {
  components: {
    ListElement
  },
  computed: {
    ...mapGetters({
      history: 'history'
    })
  }
};
</script>