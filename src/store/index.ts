import { createStore } from "vuex";
import authStore from "@/store/auth/authStore";
import usersStore from "@/store/users/usersStore";
import resourcesStore from "@/store/resources/resourcesStore";
import requestsStore from "@/store/requests/requestsStore";

export default createStore({
  state: {
    isLoggedIn: false,
    isVolunteer: false,
    activeUser: {},
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_USER_DATA(state) {
      try {
        const user = localStorage.getItem("user");
        const json = JSON.parse(user || "{}");
        if (json) {
          state.isVolunteer = json.role == "volunteer";
        }
        state.activeUser = json;
      } catch (e) {
        state.activeUser = {};
      }
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    isVolunteer(state) {
      return state.isVolunteer;
    },
    activeUser(state) {
      return state.activeUser;
    },
  },
  actions: {
    checkLoginStatus({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        commit("SET_LOGGED_IN", true);
        commit("SET_USER_DATA");
      } else {
        commit("SET_LOGGED_IN", false);
        commit("SET_USER_DATA");
      }
    },
  },
  modules: {
    authStore,
    usersStore,
    resourcesStore,
    requestsStore,
  },
});
