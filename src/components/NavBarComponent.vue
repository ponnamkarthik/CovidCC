<template>
  <div
    class="flex flex-row md:hidden bg-brand py-4 px-2 items-center text-white"
    v-if="showSearchBar"
  >
    <a class="px-4 py-2" @click="showSearchBar = false">
      <XIcon class="h-6 w-6 fill-current" aria-hidden="true" />
    </a>
    <form class="w-full text-left text-white" @submit="submitSearch">
      <input
        v-model="search"
        type="text"
        name="search"
        placeholder="Search"
        class="
          form-input
          px-4
          py-4
          placeholder-current
          rounded
          bg-brand-light
          border-0
          w-full
          focus:ring-0
        "
      />
    </form>
    <a @click="submitSearch" class="px-4 py-2">
      <SearchIcon class="h-6 w-6 fill-current" aria-hidden="true" />
    </a>
  </div>
  <Popover v-else open="true" class="relative bg-brand text-white">
    <div class="mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          md:justify-start
          md:space-x-10
        "
      >
        <!-- Logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/" class="flex flex-col items-start">
            <p class="text-xl uppercase font-extrabold">Covid Help</p>
            <p class="text-xs opacity-70">COMMONS COLLECTIVE</p>
          </a>
        </div>
        <!-- Menu Icon -->
        <div class="-mr-2 -my-2 md:hidden flex flex-row items-center">
          <a @click="showSearchBar = true">
            <SearchIcon class="h-6 w-6 fill-current" aria-hidden="true" />
          </a>
          <PopoverButton
            class="
              text-white
              rounded-md
              p-4
              inline-flex
              items-center
              justify-center
              focus:outline-none
              focus:ring-0
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 fill-current" aria-hidden="true" />
          </PopoverButton>
        </div>
        <!-- Login / CreateAccount  (hidden md:)-->
        <div
          class="
            hidden
            md:flex
            items-center
            justify-end
            md:flex-1
            lg:w-0
            space-x-8
          "
        >
          <form class="w-full text-left text-white" @submit="submitSearch">
            <input
              v-model="search"
              type="text"
              name="search"
              placeholder="Search"
              class="
                form-input
                px-4
                py-4
                placeholder-current
                rounded
                bg-brand-light
                border-0
                w-full
                focus:ring-0
              "
            />
          </form>

          <div class="space-x-8 flex flex-row items-center" v-if="!isLoggedIn">
            <router-link
              to="/auth/login"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-white
                opacity-90
                hover:opacity-100
              "
            >
              Login
            </router-link>
            <router-link
              to="/auth/register"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-white
                opacity-90
                hover:opacity-100
              "
            >
              Become a volunteer
            </router-link>
          </div>
          <div class="space-x-8 flex flex-row items-center" v-if="isLoggedIn">
            <router-link
              v-if="activeUser.role === 'volunteer'"
              to="/users"
              class="
                whitespace-nowrap
                text-base
                font-medium
                text-white
                opacity-90
                hover:opacity-100
              "
            >
              Users
            </router-link>
            <PopoverGroup as="nav" class="hidden md:flex space-x-10">
              <Popover class="relative" v-slot="{ open }">
                <PopoverButton>
                  <UserCircleIcon
                    :class="[open ? 'opacity-50' : 'opacity-100', 'h-6 w-6']"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel
                    class="
                      absolute
                      z-10
                      -ml-4
                      mt-3
                      transform
                      px-2
                      w-64
                      sm:px-0
                      lg:ml-0
                      -translate-x-90p
                    "
                  >
                    <div
                      class="
                        rounded-lg
                        shadow-lg
                        ring-1 ring-black ring-opacity-5
                        overflow-hidden
                      "
                    >
                      <div class="relative grid gap-y-4 bg-white px-4 py-6">
                        <h1
                          class="text-black text-left"
                          v-if="activeUser.email"
                        >
                          {{ activeUser.email }}
                        </h1>
                        <a
                          @click="logout"
                          class="
                            -m-3
                            p-3
                            cursor-pointer
                            flex
                            items-start
                            rounded-lg
                            hover:bg-gray-50
                          "
                        >
                          <p class="text-base font-medium text-gray-900">
                            Logout
                          </p>
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </PopoverGroup>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
          z-50
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <a href="/" class="text-brand flex items-start flex-col">
                <p class="text-xl uppercase font-extrabold">Covid Help</p>
                <p class="text-xs opacity-70">COMMONS COLLECTIVE</p>
              </a>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-brand
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8 items-start">
                <template v-if="!isLoggedIn">
                  <PopoverButton>
                    <router-link
                      to="/auth/login"
                      class="
                        -m-3
                        p-3
                        flex
                        items-center
                        rounded-md
                        hover:bg-gray-50
                      "
                    >
                      <span class="ml-3 text-base font-medium text-gray-900">
                        Login
                      </span>
                    </router-link>
                  </PopoverButton>
                  <PopoverButton>
                    <router-link
                      to="/auth/register"
                      class="
                        -m-3
                        p-3
                        flex
                        items-center
                        rounded-md
                        hover:bg-gray-50
                      "
                    >
                      <span class="ml-3 text-base font-medium text-gray-900">
                        Become a volunteer
                      </span>
                    </router-link>
                  </PopoverButton>
                </template>
                <template v-if="isLoggedIn">
                  <h1 class="text-black text-left">
                    {{ activeUser.email }}
                  </h1>

                  <PopoverButton v-if="isVolunteer">
                    <router-link
                      to="/users"
                      class="
                        -m-3
                        p-3
                        flex
                        items-center
                        rounded-md
                        hover:bg-gray-50
                      "
                    >
                      <span class="ml-3 text-base font-medium text-gray-900">
                        Users
                      </span>
                    </router-link>
                  </PopoverButton>
                  <PopoverButton>
                    <a
                      @click="logout"
                      class="
                        -m-3
                        p-3
                        flex
                        items-center
                        rounded-md
                        hover:bg-gray-50
                      "
                    >
                      <span class="ml-3 text-base font-medium text-gray-900">
                        Logout
                      </span>
                    </a>
                  </PopoverButton>
                </template>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  UserCircleIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import { mapGetters, useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "NavBarComponent",
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    UserCircleIcon,
    MenuIcon,
    XIcon,
    SearchIcon,
  },
  data() {
    return {
      search: "",
      showSearchBar: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "activeUser", "isVolunteer"]),
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("SET_LOGGED_IN", false);
      if (this.$router.currentRoute.value.path == "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
    submitSearch(e) {
      e.preventDefault();
      if (this.search != "") {
        this.$router.push({ name: "search", query: { q: this.search } });
        this.search = "";
      }
    },
  },
};
</script>

<style scoped></style>
