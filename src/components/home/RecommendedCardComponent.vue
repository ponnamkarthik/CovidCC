<template>
  <div class="flex bg-white rounded-lg px-8 py-6 inner-card-shadow flex-row">
    <div class="flex flex-col">
      <div class="flex flex-row space-x-4">
        <div class="rounded-lg">
          <img class="h-12 w-12 rounded-lg object-cover" :src="image" />
        </div>
        <div class="text-left items-center pr-12">
          <p class="font-bold text-xl">{{ title }}</p>
          <p class="text-xs text-gray-400">UNLIMITED CALLS AND NET</p>
        </div>
      </div>
      <div class="w-full my-3 h-0.5 bg-gray-200 opacity-50"></div>

      <p class="font-bold text-lg text-left text-brand font-semibold">
        {{ amount }}
      </p>
    </div>
    <div class="flex items-center mt-4">
      <div class="bg-brand text-white rounded-xl cursor-pointer p-3">
        <CartIcon class="h-8 w-8" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<script>
import CartIcon from "@/components/icons/CartIcon";

export default {
  name: "RecommendedCardComponent",
  components: { CartIcon },
  props: {
    image: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
    amount: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped></style>
