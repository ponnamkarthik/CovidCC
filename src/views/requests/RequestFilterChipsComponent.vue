<template>
  <div class="flex flex-wrap gap-4">
    <div
      @click="updateRequestFilter('')"
      class="px-3 py-1 bg-gray-200 rounded-2xl cursor-pointer"
      :class="[{ 'bg-brand text-white': requestFilter === '' }]"
    >
      <p>ALL</p>
    </div>
    <div
      v-for="(filter, index) in filters"
      :key="index"
      @click="updateRequestFilter(filter)"
      class="px-3 py-1 bg-gray-200 rounded-2xl cursor-pointer"
      :class="[{ 'bg-brand text-white': requestFilter === filter }]"
    >
      <p>{{ filter }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RequestFilterChipsComponent",
  computed: {
    ...mapGetters(["requestFilter"]),
  },
  setup() {
    return {
      filters: ["IN PROGRESS", "ASSIGNED", "COMPLETED"],
    };
  },
  methods: {
    updateRequestFilter(filter = "") {
      this.$store.commit("setRequestFilter", filter);
      this.$store.dispatch("fetchRequests");
    },
  },
};
</script>

<style scoped></style>
