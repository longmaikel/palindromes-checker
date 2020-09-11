import Vue from "vue";
import Vuex from "vuex";

import Auth from "@/store/modules/Auth";
import Palindromes from "@/store/modules/Palindromes";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Palindromes
  }
});
