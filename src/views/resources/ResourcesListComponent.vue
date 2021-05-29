<template>
  <div class="grid gap-x-4 gap-y-4 divide-y-2 divide-gray-100">
    <template v-for="(resource, index) in resources" :key="index">
      <basic-card-component
        :resource="resource.type"
        :hospital="resource.hospitalName"
        :options="resource.metadata"
        :time-ago="getTimeAgo(resource.updateAt)"
        :address="resource.description"
      >
      </basic-card-component>
    </template>
  </div>
</template>

<script>
import BasicCardComponent from "@/components/home/BasicCardComponent";
import * as timeago from "timeago.js";

export default {
  name: "ResourcesListComponent",
  components: { BasicCardComponent },
  props: {
    resources: {
      default: [],
    },
  },
  methods: {
    getTimeAgo(date) {
      return timeago.format(date);
    },
  },
};
</script>

<style scoped></style>
