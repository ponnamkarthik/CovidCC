<template>
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
        <h1 class="text-4xl font-bold">Welcome Back</h1>
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
      <div class="flex flex-row space-x-4">
        <div
          :class="{
            'border-b-4 border-brand-light text-brand': activeTab === 0,
          }"
          @click="openLogin"
          class="font-bold py-2 px-4 text-lg cursor-pointer"
        >
          Login
        </div>
        <div
          :class="{
            'border-b-4 border-brand-light text-brand': activeTab === 1,
          }"
          @click="openRegister"
          class="font-bold py-2 px-4 text-lg cursor-pointer"
        >
          Become a volunteer
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {
  useForm,
  useIsFormValid,
  Field,
  Form,
  ErrorMessage,
} from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });

    const { meta, errors } = useForm({
      validationSchema: schema,
    });

    return {
      schema,
      meta,
    };
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === "/auth/login") {
        this.activeTab = 0;
      } else if (to.path === "/auth/register") {
        this.activeTab = 1;
      }
    },
  },
  methods: {
    openLogin() {
      this.activeTab = 0;
      this.$router.push("/auth/login");
    },
    openRegister() {
      this.activeTab = 1;
      this.$router.push("/auth/register");
    },
  },
};
</script>

<style scoped></style>
