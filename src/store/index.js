import Vue from "vue";
import Vuex from "vuex";

import Palindromes from "@/store/modules/Palindromes";
import Auth from "@/store/modules/Auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Palindromes,
    Auth
  }
});
