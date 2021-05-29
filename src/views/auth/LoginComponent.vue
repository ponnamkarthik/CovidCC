<template>
  <div class="flex flex-col w-full py-6 space-y-8 items-start">
    <Form
      @submit="onSubmit"
      v-slot="{ meta }"
      :validation-schema="schema"
      class="flex flex-col w-full space-y-8 items-start"
    >
      <div class="w-full text-left">
        <Field
          type="email"
          name="email"
          v-model="email"
          placeholder="Email"
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
        <ErrorMessage class="text-red-500" name="email" />
      </div>
      <div class="w-full text-left">
        <Field
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"
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
        <ErrorMessage class="text-red-500" name="password" />
      </div>

      <button
        type="submit"
        class="bg-brand w-full rounded px-4 py-4 text-white font-bold"
        :class="{
          'opacity-50 cursor-not-allowed': !meta.valid,
          'opacity-100 cursor-pointer': meta.valid,
        }"
      >
        Login
      </button>
    </Form>

    <!--    <router-link tag="div" to="/forgot-password">-->
    <!--      Forgot Password-->
    <!--    </router-link>-->
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
import { ref } from "vue";
import { default as toast } from "@/utils/toastUtils";

export default {
  name: "LoginComponent",
  setup() {
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    });

    const { meta, errors } = useForm({
      validationSchema: schema,
    });

    return {
      schema,
      meta,
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      let data = {
        username: values.email,
        password: values.password,
      };
      this.$store
        .dispatch("performLogin", data)
        .then((data) => {
          toast.success("User loggedin");
          this.$router.push("/");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
    doLogin() {
      if (!this.email) {
        this.$toast("Invalid email");
        return;
      }
      if (!this.password) {
        this.$toast("Invalid password");
        return;
      }
      this.$store
        .dispatch("authStore/performLogin")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
