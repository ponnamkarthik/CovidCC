<template>
  <div class="grid gap-x-4 gap-y-4 divide-y-2 divide-gray-100">
    <template v-for="(request, index) in requests" :key="index">
      <basic-request-card-component
        :resource="request.type"
        :comment="request.comments.join('\n')"
        :action="request.action"
        beds=""
        :time-ago="getTimeAgo(request.updateAt)"
        :address="request.locationAddress"
      >
      </basic-request-card-component>
    </template>
  </div>
</template>

<script>
import BasicRequestCardComponent from "@/components/home/BasicRequestCardComponent";
import * as timeago from "timeago.js";

export default {
  name: "RequestsListComponent",
  components: { BasicRequestCardComponent },
  props: {
    requests: {
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
