<template>
  <div class="flex flex-col items-center justify-center px-12 space-y-2 py-4">
    <div class="text-brand pb-4">
      <slot name="image"></slot>
    </div>
    <div class="font-bold text-xl">
      <slot name="title"></slot>
    </div>
    <div class="">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrustItemComponent",
};
</script>

<style scoped></style>
