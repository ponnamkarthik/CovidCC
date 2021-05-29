import axios from "@/http/http";
import { Module, ActionTree } from "vuex";
import { default as ndjson } from "@/ndjson";

const actions: ActionTree<any, any> = {
  fetchUsers({ commit }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get("/v1/api/users");

        commit("setUsers", response.data);

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
  makeUserVolunteer({ dispatch }, user) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put(
          "/v1/activities/makeUserAsVolunteer/" + user
        );

        dispatch("fetchUsers");

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
  activateUser({ dispatch }, user) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put(
          "/v1/activities/activate/user/" + user
        );

        dispatch("fetchUsers");

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
const usersStore: Module<any, any> = {
  state: () => ({
    users: [],
  }),
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions,
  getters: {
    users(state) {
      return state.users;
    },
  },
};

export default usersStore;
