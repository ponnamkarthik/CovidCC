<template>
  <div class="hidden md:grid grid-cols-1">
    <div class="flex flex-col">
      <div
        class="
          bg-background2
          rounded-md
          shadow-lg
          mx-4
          my-8
          px-8
          py-4
          space-y-4
        "
      >
        <div class="flex flex-row justify-between items-center">
          <div class="border-b-4 border-green-400 pr-12">
            <h1 class="text-xl font-bold py-2">Users List</h1>
          </div>
          <div class="flex flex-row items-center space-x-4 justify-center">
            <p class="text-gray-400">{{ users.length }} results</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <div v-for="(user, index) in users" :key="index">
            <user-card-component
              :user="user"
              @make="makeVolunteer(user)"
              @activate="activateUser(user)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCardComponent from "@/components/home/UserCardComponent";

export default {
  name: "UsersList",
  components: { UserCardComponent },
  computed: {
    ...mapGetters(["users"]),
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    makeVolunteer(user) {
      this.$store.dispatch("makeUserVolunteer", user.id);
    },
    activateUser(user) {
      this.$store.dispatch("activateUser", user.id);
    },
  },
};
</script>

<style scoped></style>
