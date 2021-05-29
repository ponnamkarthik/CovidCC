<template>
  <div class="flex flex-col w-full">
    <div class="bg-brand w-full mx-auto pt-2 pb-28 px-4 items-start">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row space-x-2">
          <div
            @click="activeTab = 0"
            :class="{
              'border-b-4 border-white text-white opacity-100': activeTab === 0,
            }"
            class="
              font-bold
              py-2
              px-2
              text-lg text-white
              opacity-80
              cursor-pointer
            "
          >
            Resources
          </div>
          <div
            @click="activeTab = 1"
            :class="{
              'border-b-4 border-white text-white opacity-100': activeTab === 1,
            }"
            class="
              font-bold
              py-2
              px-2
              text-lg text-white
              opacity-80
              cursor-pointer
            "
          >
            Requests
          </div>
        </div>
        <div
          v-if="activeTab === 0 && isLoggedIn && isVolunteer"
          @click="emitRequestResource"
          class="
            bg-brand-light
            text-white
            space-x-1
            shadow-lg
            flex flex-row
            items-center
            justify-center
            py-1
            text-lg
            px-4
            rounded-full
            cursor-pointer
          "
        >
          <PlusIcon class="h-6 w-6" />
          <span>Add Resource</span>
        </div>
        <div
          v-if="activeTab === 1"
          @click="emitRequestResource"
          class="
            bg-brand-light
            text-white
            space-x-1
            shadow-lg
            flex flex-row
            items-center
            justify-center
            py-1
            text-lg
            px-4
            rounded-full
            cursor-pointer
          "
        >
          <PlusIcon class="h-6 w-6" />
          <span>Add Request</span>
        </div>
      </div>
    </div>
    <div class="bg-white mx-4 z-10 px-6 -mt-20 mb-20 rounded">
      <resources-list-component :resources="resources" v-if="activeTab === 0" />
      <requests-list-component :requests="requests" v-if="activeTab === 1" />
    </div>
  </div>
</template>

<script>
import ResourcesListComponent from "@/views/resources/ResourcesListComponent";
import RequestsListComponent from "@/views/requests/RequestsListComponent";
import { mapGetters } from "vuex";
import { PlusIcon } from "@heroicons/vue/solid";

export default {
  name: "HomeMobile",
  components: { RequestsListComponent, ResourcesListComponent, PlusIcon },
  computed: {
    ...mapGetters(["isLoggedIn", "isVolunteer"]),
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  props: {
    resources: {
      default: [],
    },
    requests: {
      default: [],
    },
  },
  methods: {
    emitRequestResource() {
      if (this.activeTab === 0) {
        this.$emit("openAddResources");
      } else if (this.activeTab === 1) {
        this.$emit("openAddRequests");
      }
    },
  },
};
</script>

<style scoped></style>
