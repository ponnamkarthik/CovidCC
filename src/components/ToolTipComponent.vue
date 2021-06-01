<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="relative z-30 inline-flex">
      <div
        @mouseleave="showToolTip = false"
        @mouseenter="showToolTip = true"
        class="
          rounded-md
          px-3
          py-2
          bg-indigo-500
          text-white
          cursor-pointer
          shadow
        "
      >
        Hover over me
      </div>
      <div class="relative">
        <div
          class="
            absolute
            top-0
            z-10
            w-32
            p-2
            -mt-1
            text-sm
            leading-tight
            text-white
            transform
            -translate-x-full -translate-y-full
            bg-orange-500
            rounded-lg
            shadow-lg
          "
        >
          Hi, I am Tooltip
        </div>
        <svg
          class="
            absolute
            z-10
            w-6
            h-6
            text-orange-500
            transform
            -translate-x-12 -translate-y-3
            fill-current
            stroke-current
          "
          width="8"
          height="8"
        >
          <rect x="12" y="-10" width="8" height="8" transform="rotate(45)" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ToolTipComponent",
  setup() {
    const showToolTip = ref(false);
    return {
      showToolTip,
    };
  },
};
</script>

<style scoped></style>
