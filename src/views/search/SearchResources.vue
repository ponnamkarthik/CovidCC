<template>
  <div class="flex flex-col">
    <div class="flex flex-col justify-between items-start mx-6 mt-4">
      <div class="">
        <h1 class="text-4xl font-bold py-2">{{ query }}</h1>
      </div>
      <p class="text-gray-400">{{ resources.length }} results</p>
    </div>
    <div class="grid grid-cols-1">
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
          <resources-list-component :resources="resources" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ResourcesListComponent from "@/views/resources/ResourcesListComponent";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    ResourcesListComponent,
  },
  watch: {
    "$route.query"(data) {
      this.query = data.q;
      this.fetchResults();
    },
  },
  data() {
    return {
      query: "",
    };
  },
  computed: {
    ...mapGetters(["resources", "isLoggedIn"]),
  },
  created() {
    this.query = this.$route.query.q;
    this.fetchResults();
  },
  methods: {
    fetchResults() {
      let payload = {
        keyword: this.query,
      };
      this.$store.dispatch("fetchResources", payload);
    },
  },
};
</script>

<style scoped></style>
