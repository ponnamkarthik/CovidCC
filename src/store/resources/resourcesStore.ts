import axios from "@/http/http";
import { Module, ActionTree } from "vuex";
import { default as ndjson } from "@/ndjson";

const actions: ActionTree<any, any> = {
  fetchResources({ commit }, payload = {}) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("/v1/api/resources/search", payload);

        let json = [];
        if (typeof response.data == "object") {
          json = [response.data];
        } else {
          json = ndjson(response.data as string);
        }
        commit("setResources", json);
        resolve(json);
      } catch (e) {
        try {
          reject(e.response.data.error);
        } catch (e) {
          reject(e.message);
        }
      }
    });
  },
  addResource({ commit }, payload = {}) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("/v1/activities", payload);

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
const resourcesStore: Module<any, any> = {
  state: () => ({
    resources: [],
  }),
  mutations: {
    setResources(state, data) {
      state.resources = data;
    },
  },
  actions,
  getters: {
    resources(state) {
      return state.resources;
    },
  },
};

export default resourcesStore;
