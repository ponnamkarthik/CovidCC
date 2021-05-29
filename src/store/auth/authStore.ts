import axios from "@/http/auth";
import http from "@/http/http";
import { Module, ActionTree } from "vuex";

const actions: ActionTree<any, any> = {
  performLogin({ commit, dispatch }, loginDetails: any) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("/auth/authenticate", loginDetails);
        commit("SET_LOGGED_IN", true);
        const json = response.data;
        commit("saveToken", json.token);
        dispatch("fetchUserDetails");
        resolve(response.data);
      } catch (e) {
        try {
          reject(e.response.data.error);
        } catch (e) {
          reject(e.message);
        }
      }
    });
  },
  fetchUserDetails({ commit }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await http.get("/v1/activities/currentUser");
        commit("saveUser", JSON.stringify(response.data));

        commit("SET_USER_DATA");
        resolve(response.data);
      } catch (e) {
        try {
          reject(e.response.data.error);
        } catch (e) {
          reject(e.message);
        }
      }
    });
  },
  performRegister({ commit }, registerDetails: any) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("/auth/createUser", registerDetails);
        resolve(response.data);
      } catch (e) {
        try {
          reject(e.response.data.error);
        } catch (e) {
          reject(e.message);
        }
      }
    });
  },
  verifyOTP({ commit }, otpDetails: any) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put("/auth/user/validateOTP", otpDetails);
        resolve(response.data);
      } catch (e) {
        try {
          reject(e.response.data.error);
        } catch (e) {
          reject(e.message);
        }
      }
    });
  },
};
const authStore: Module<any, any> = {
  state: () => ({}),
  mutations: {
    saveToken(state, token) {
      localStorage.setItem("token", token);
    },
    saveUser(state, user) {
      localStorage.setItem("user", user);
    },
  },
  actions,
  getters: {},
};

export default authStore;
