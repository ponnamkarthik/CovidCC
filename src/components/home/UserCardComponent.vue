<template>
  <div class="flex flex-row justify-between items-center py-4">
    <div class="flex flex-col items-start justify-start space-y-0.5">
      <h3 class="uppercase">{{ user.email }}</h3>
      <p class="text-gray-700 text-left">{{ user.phone }}</p>
      <p class="text-gray-400 text-left">{{ user.role }}</p>
    </div>
    <div class="flex flex-col space-y-1 items-end">
      <div
        class="bg-brand px-4 rounded-full py-2 cursor-pointer"
        v-if="!user.activated"
        @click="activateUser"
      >
        <p class="text-white text-sm whitespace-nowrap">Activate</p>
      </div>
      <div
        class="bg-red-400 px-4 rounded-full py-2 cursor-pointer"
        v-if="user.role === 'user'"
        @click="makeVolunteer"
      >
        <p class="text-white text-sm whitespace-nowrap">Make Volunteer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardComponent",
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    makeVolunteer() {
      this.$emit("make");
    },
    activateUser() {
      this.$emit("activate");
    },
  },
};
</script>

<style scoped></style>
