<template>
  <div class="flex flex-col bg-background min-h-screen justify-between">
    <div class="flex flex-col">
      <div class="relative pb-32 w-full bg-brand">
        <div
          class="
            flex flex-col
            text-white
            justify-start
            w-full
            container
            mx-auto
            items-start
            mt-28
            md:px-24
            px-12
          "
        >
          <h1 class="text-4xl font-bold">{{ $t("forgotYourPassword") }}</h1>
          <p>{{ $t("forgotPasswordHelp") }}</p>
        </div>
      </div>
      <div
        class="
          bg-white
          container
          w-full
          sm:w-2/3
          mx-auto
          rounded-md
          -mt-24
          z-10
          py-4
          px-6
          items-start
        "
      >
        <transition name="slide-right">
          <div class="flex flex-col w-full py-6 space-y-8 items-start">
            <input
              type="email"
              :placeholder="$t('enterEmail')"
              class="
                form-input
                px-4
                py-4
                rounded
                bg-input-grey
                border-0
                w-full
                focus:ring-brand
              "
            />

            <div class="bg-brand w-full rounded px-4 py-4 text-white font-bold">
              {{ $t("resetPassword") }}
            </div>

            <router-link tag="div" to="/auth/login">
              {{ $t("backTo") }}
              <span class="text-brand font-bold">{{ $t("login") }}</span>
            </router-link>
          </div>
        </transition>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../../components/FooterComponent";
export default {
  name: "ForgotPassword",
  components: { FooterComponent },
  data() {
    return {
      activeTab: 0,
    };
  },

  methods: {
    openLogin() {
      this.$router.push("/auth/forgot-password");
    },
  },
};
</script>

<style scoped></style>
