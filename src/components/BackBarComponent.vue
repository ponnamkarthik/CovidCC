<template>
  <div class="flex flex-row py-2 space-x-4">
    <ArrowLeftIcon class="h-6 w-6 cursor-pointer" @click="goBack" />
    <slot name="content" />
  </div>
</template>

<script>
import { ArrowLeftIcon } from "@heroicons/vue/solid";

export default {
  name: "BackBarComponent",
  components: {
    ArrowLeftIcon,
  },
  props: {
    customBack: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    goBack() {
      if (this.customBack) {
        this.$emit("onBack");
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style scoped></style>
