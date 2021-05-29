<template>
  <div class="flex bg-white rounded-lg px-8 py-6 inner-card-shadow flex-row">
    <div class="flex flex-row space-x-4 items-center">
      <div class="rounded-lg">
        <img class="h-12 w-12 rounded-lg object-cover" :src="image" />
      </div>
      <div class="text-left pr-12 items-center">
        <p class="font-bold text-xl">{{ title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCardComponent",
  props: {
    image: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped></style>
