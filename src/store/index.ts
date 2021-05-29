import { createStore } from "vuex";
import authStore from "@/store/auth/authStore";
import resourcesStore from "@/store/resources/resourcesStore";
import requestsStore from "@/store/requests/requestsStore";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    checkLoginStatus({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        commit("SET_LOGGED_IN", true);
      } else {
        commit("SET_LOGGED_IN", false);
      }
    },
  },
  modules: {
    authStore,
    resourcesStore,
    requestsStore,
  },
});
