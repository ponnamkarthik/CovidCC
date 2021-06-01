<template>
  <div class="flex flex-row justify-between items-center py-4">
    <div class="flex flex-col items-start justify-start space-y-1">
      <h3 class="uppercase">{{ resource }}</h3>
      <p class="text-gray-700 text-left">{{ comment }}</p>
      <p class="text-gray-400 text-left">{{ address }}</p>

      <a :href="'tel:' + mobile">
        <p class="text-gray-400 text-left text-brand">{{ mobile }}</p>
      </a>
    </div>
    <div class="flex flex-col space-x-4 space-y-1 items-end">
      <p class="text-gray-400">{{ timeAgo }}</p>
      <div
        :class="getFormatColor(action)"
        class="bg-opacity-20 px-2 rounded-full py-1"
        v-if="action"
      >
        <p :class="getTextColor(action)" class="text-xs whitespace-nowrap">
          {{ action }}
        </p>
      </div>

      <div
        v-if="
          isVolunteer && action === 'ASSIGNED' && activeUser.id === assignedTo
        "
        @click="markRequestComplete"
        class="
          cursor-pointer
          bg-brand
          rounded-full
          px-4
          py-1
          text-white
          whitespace-nowrap
        "
      >
        Mark Complete
      </div>
      <div
        v-if="isVolunteer && action === 'IN PROGRESS'"
        @click="assignRequestToMe"
        class="
          cursor-pointer
          bg-brand
          rounded-full
          px-4
          py-1
          text-white
          whitespace-nowrap
        "
      >
        Assign to me
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BasicRequestCardComponent",
  props: {
    assignedTo: {
      default: "",
      type: String,
    },
    resource: {
      default: "",
      type: String,
    },
    address: {
      default: "",
      type: String,
    },
    mobile: {
      default: "",
      type: String,
    },
    timeAgo: {
      default: "",
      type: String,
    },
    comment: {
      default: "",
      type: String,
    },
    action: {
      default: "",
      type: String,
    },
  },
  computed: {
    ...mapGetters(["isVolunteer", "activeUser"]),
  },
  methods: {
    assignRequestToMe() {
      this.$emit("assignRequestToMe");
    },
    markRequestComplete() {
      this.$emit("markRequestComplete");
    },
    getTextColor(action) {
      if (action === "IN_PROGRESS") {
        return "text-brand";
      }
      if (action === "ASSIGNED") {
        return "text-green-500";
      }
      if (action === "COMPLETED") {
        return "text-red-500";
      }
      return "text-brand";
    },
    getFormatColor(action) {
      if (action === "IN_PROGRESS") {
        return "bg-brand";
      }
      if (action === "ASSIGNED") {
        return "bg-green-400";
      }
      if (action === "COMPLETED") {
        return "bg-red-400";
      }
      return "bg-brand";
    },
  },
};
</script>

<style scoped></style>
