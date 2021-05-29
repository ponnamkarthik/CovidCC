<template>
  <div class="flex flex-row justify-between items-center py-4">
    <div class="flex flex-col items-start space-y-1">
      <h3 class="uppercase">{{ resource }}</h3>
      <p class="font-bold text-left">{{ hospital }}</p>
      <p class="text-gray-400 text-left">{{ address }}</p>
    </div>
    <div class="flex flex-row space-x-4 items-center">
      <p class="text-gray-400">{{ timeAgo }}</p>
      <div class="bg-brand bg-opacity-20 px-4 rounded-full py-2" v-if="options">
        <p class="text-brand">{{ options.available }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicCardComponent",
  props: {
    resource: {
      default: "",
      type: String,
    },
    hospital: {
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
    options: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped></style>
