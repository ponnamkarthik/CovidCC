<template>
  <div class="flex md:hidden">
    <home-mobile
      @openAddResources="openAddResourceDialog"
      @openAddRequests="openAddRequestDialog"
      :resources="resources"
      :requests="requests"
    />
  </div>
  <div class="hidden md:grid grid-cols-2">
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
            <h1 class="text-xl font-bold py-2">Resource List</h1>
          </div>
          <div class="flex flex-row items-center space-x-4 justify-center">
            <div
              v-if="isLoggedIn && isVolunteer"
              @click="openAddResourceDialog"
              class="
                bg-brand
                text-white
                space-x-1
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
              <span>Add</span>
            </div>
            <p class="text-gray-400">{{ resources.length }} results</p>
          </div>
        </div>

        <resources-list-component :resources="resources" />

        <div
          v-if="isLoggedIn && isVolunteer"
          @click="openAddResourceDialog"
          class="cursor-pointer bg-brand text-white py-3 text-lg px-8 rounded"
        >
          Add Resource
        </div>
      </div>
    </div>
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
            <h1 class="text-xl font-bold py-2">Request List</h1>
          </div>
          <div class="flex flex-row items-center space-x-4 justify-center">
            <div
              @click="openAddRequestDialog"
              class="
                bg-brand
                text-white
                space-x-1
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
              <span>Add</span>
            </div>
            <p class="text-gray-400">{{ requests.length }} results</p>
          </div>
        </div>
        <requests-list-component :requests="requests" />

        <div
          @click="openAddRequestDialog"
          class="bg-brand text-white py-3 text-lg px-8 rounded cursor-pointer"
        >
          Add Request
        </div>
      </div>
    </div>
  </div>
  <!-- Add Request -->
  <TransitionRoot appear :show="showAddRequestDialog" as="template">
    <Dialog
      :open="showAddRequestDialog"
      as="div"
      @close="closeAddRequestDialog"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-5xl
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
            >
              <div class="flex flex-row justify-between items-center">
                <DialogTitle
                  as="div"
                  class="flex flex-col items-center justify-center w-full"
                >
                  <h2 class="text-3xl font-bold">Add Request</h2>
                  <p class="text-gray-400">
                    We will review and will add it to our request feed
                  </p>
                </DialogTitle>
                <div
                  class="flex p-4 cursor-pointer"
                  @click="closeAddRequestDialog"
                >
                  <XIcon class="h-4 w-4" />
                </div>
              </div>
              <div class="my-4">
                <add-new-request @close="closeAddRequestDialog(true)" />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- Add Resource -->
  <TransitionRoot appear :show="showAddResourceDialog" as="template">
    <Dialog
      :open="showAddResourceDialog"
      as="div"
      @close="closeAddResourceDialog"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <DialogOverlay class="fixed inset-0 bg-black opacity-30" />

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-5xl
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-white
                shadow-xl
                rounded-2xl
              "
            >
              <div class="flex flex-row justify-between items-center">
                <DialogTitle
                  as="div"
                  class="flex flex-col items-center justify-center w-full"
                >
                  <h2 class="text-3xl font-bold">Add Resource</h2>
                  <p class="text-gray-400">
                    We will review and will add it to our resource feed
                  </p>
                </DialogTitle>
                <div
                  class="flex p-4 cursor-pointer"
                  @click="closeAddResourceDialog"
                >
                  <XIcon class="h-4 w-4" />
                </div>
              </div>
              <div class="my-4">
                <add-new-resource @close="closeAddResourceDialog(true)" />
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { mapGetters } from "vuex";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon, PlusIcon } from "@heroicons/vue/solid";
import AddNewRequest from "@/views/requests/AddNewRequest";
import AddNewResource from "@/views/resources/AddNewResource";
import ResourcesListComponent from "@/views/resources/ResourcesListComponent";
import RequestsListComponent from "@/views/requests/RequestsListComponent";
import HomeMobile from "@/views/home/HomeMobile";

export default {
  name: "Home",
  components: {
    HomeMobile,
    RequestsListComponent,
    ResourcesListComponent,
    AddNewResource,
    AddNewRequest,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    XIcon,
    PlusIcon,
  },
  data() {
    return {
      activeTab: 0,
      showAddRequestDialog: false,
      showAddResourceDialog: false,
    };
  },
  computed: {
    ...mapGetters(["resources", "requests", "isLoggedIn", "isVolunteer"]),
  },
  methods: {
    openAddRequestDialog() {
      this.showAddRequestDialog = true;
    },
    closeAddRequestDialog(value) {
      this.showAddRequestDialog = false;
      if (value) {
        this.$store.dispatch("fetchRequests");
      }
    },
    openAddResourceDialog() {
      this.showAddResourceDialog = true;
    },
    closeAddResourceDialog(value) {
      this.showAddResourceDialog = false;
      if (value) {
        this.$store.dispatch("fetchResources");
      }
    },
  },
  created() {
    this.$store.dispatch("fetchResources");
    this.$store.dispatch("fetchRequests");
  },
};
</script>

<style scoped></style>
