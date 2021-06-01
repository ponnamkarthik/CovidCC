import axios from "@/http/http";
import { Module, ActionTree } from "vuex";
import { default as ndjson } from "@/ndjson";

const actions: ActionTree<any, any> = {
  fetchRequests({ commit }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get("/v1/api/request");

        let json = [];
        if (typeof response.data == "object") {
          json = [response.data];
        } else {
          json = ndjson(response.data as string);
        }
        commit("setRequests", json);

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
  addRequest({ commit }, payload) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post("/v1/api/request", payload);

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
  assignRequest({ commit }, requestId) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `/v1/activities/request/${requestId}/assignToVolunteer`
        );

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
  markRequestComplete({ commit }, requestId) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.put(
          `/v1/activities/updateRequestAction/${requestId}?action=COMPLETED`
        );

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
const requestsStore: Module<any, any> = {
  state: () => ({
    requests: [],
  }),
  mutations: {
    setRequests(state, data) {
      state.requests = data;
    },
  },
  actions,
  getters: {
    requests(state) {
      return state.requests;
    },
  },
};

export default requestsStore;
