<template>
  <div class="flex pt-4 pb-2">
    <request-filter-chips-component />
  </div>
  <div class="grid gap-x-4 gap-y-4 divide-y-2 divide-gray-100">
    <template v-for="(request, index) in requests" :key="index">
      <basic-request-card-component
        :resource="request.type"
        :comment="request.comments.join('\n')"
        :action="request.action"
        :mobile="request.mobileNumber"
        :assigned-to="(request.volunteerAssigned || {}).id"
        v-on:markRequestComplete="markRequestComplete(request)"
        :time-ago="getTimeAgo(request.updateAt)"
        :address="request.locationAddress"
        v-on:assignRequestToMe="assignRequestToMe(request)"
      >
      </basic-request-card-component>
    </template>
  </div>
</template>

<script>
import BasicRequestCardComponent from "@/components/home/BasicRequestCardComponent";
import * as timeago from "timeago.js";
import { default as toast } from "@/utils/toastUtils";
import RequestFilterChipsComponent from "@/views/requests/RequestFilterChipsComponent";

export default {
  name: "RequestsListComponent",
  components: { RequestFilterChipsComponent, BasicRequestCardComponent },
  props: {
    requests: {
      default: [],
    },
  },
  methods: {
    getTimeAgo(date) {
      return timeago.format(date);
    },
    assignRequestToMe(request) {
      this.$store
        .dispatch("assignRequest", request.id)
        .then((data) => {
          toast.success("Request assigned");
          this.$store.dispatch("fetchRequests");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
    markRequestComplete(request) {
      this.$store
        .dispatch("markRequestComplete", request.id)
        .then((data) => {
          toast.success("Request marked as completed");
          this.$store.dispatch("fetchRequests");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
  },
};
</script>

<style scoped></style>
