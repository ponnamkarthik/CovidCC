<template>
  <div class="flex flex-row justify-between items-center py-4">
    <div class="flex flex-col items-start justify-start space-y-1">
      <h3 class="uppercase">{{ resource }}</h3>
      <p class="text-gray-700 text-left">{{ comment }}</p>
      <p class="text-gray-400 text-left">{{ address }}</p>
    </div>
    <div class="flex flex-col space-x-4 items-end">
      <p class="text-gray-400">{{ timeAgo }}</p>
      <div
        :class="getFormatColor(action)"
        class="bg-opacity-20 px-2 rounded-full py-1"
        v-if="action"
      >
        <p class="text-brand text-xs whitespace-nowrap">
          {{ formatString(action) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicRequestCardComponent",
  props: {
    resource: {
      default: "",
      type: String,
    },
    address: {
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
  methods: {
    formatString(value) {
      return value.replace("_", " ");
    },
    getFormatColor(action) {
      if (action === "IN_PROGRESS") {
        return "bg-brand";
      }
      if (action === "COMPLETED") {
        return "bg-red-300";
      }
      return "bg-brand";
    },
  },
};
</script>

<style scoped></style>
