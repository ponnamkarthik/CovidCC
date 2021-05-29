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
          name="name"
          type="text"
          v-model="name"
          placeholder="Full Name"
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
        <ErrorMessage class="text-red-500" name="name" />
      </div>
      <div class="w-full text-left">
        <Field
          name="email"
          type="email"
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
      <label class="flex flex-col w-full justify-start items-start">
        <span class="px-2 text-gray-700">Select Gender</span>
        <Field
          name="gender"
          v-model="gender"
          class="
            from-input
            px-4
            py-4
            rounded
            bg-input-grey
            border-0
            w-full
            focus:ring-brand
          "
          as="select"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Field>

        <!--        <select-->
        <!--          v-model="gender"-->
        <!--          class="from-input px-4 py-4 rounded bg-input-grey border-0 w-full focus:ring-brand">-->
        <!--          <option value="Male">Male</option>-->
        <!--          <option value="Female">Female</option>-->
        <!--        </select>-->
      </label>
      <div class="w-full text-left">
        <Field
          name="phone"
          type="number"
          v-model="phone"
          placeholder="Phone"
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
        <ErrorMessage class="text-red-500" name="phone" />
      </div>
      <div class="w-full text-left">
        <Field
          name="age"
          type="number"
          v-model="age"
          placeholder="Age"
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
        <ErrorMessage class="text-red-500" name="age" />
      </div>
      <div class="w-full text-left">
        <Field
          name="password"
          type="password"
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
        :class="{
          'opacity-50 cursor-not-allowed': !meta.valid,
          'opacity-100 cursor-pointer': meta.valid,
        }"
        class="
          bg-brand
          w-full
          rounded
          px-4
          py-4
          text-white
          font-bold
          cursor-pointer
        "
        type="submit"
      >
        Register
      </button>
    </Form>

    <!--    OTP Verify Dialog -->
  </div>
  <TransitionRoot appear :show="showVerifyOtpDialog" as="template">
    <Dialog as="div">
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
              <DialogTitle
                as="div"
                class="
                  flex flex-col
                  items-center
                  justify-center
                  w-full
                  text-center
                "
              >
                <h2 class="text-3xl font-bold">Enter OTP</h2>
                <p class="text-gray-400">
                  We have sent you otp to your mobile number , please enter
                  below
                </p>
              </DialogTitle>
              <div class="mt-4">
                <div class="py-4 w-full">
                  <div class="input-wrapper">
                    <div class="flex space-x-1 md:space-x-4 justify-center">
                      <template v-for="(l, i) in 6" :key="i">
                        <input
                          :autofocus="i == 0"
                          :id="`pin_field_${i}`"
                          class="
                            form-input
                            text-sm
                            md:text-3xl
                            text-center
                            w-12
                            md:w-16
                            px-4
                            py-4
                            rounded
                            bg-input-grey
                            border-0
                            focus:ring-brand
                          "
                          value=""
                          maxlength="1"
                          max="9"
                          min="0"
                          inputmode="decimal"
                          @keyup="stepForward(i)"
                          @keydown.backspace="stepBack(i)"
                        />
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <button
                  type="button"
                  @click="checkPin"
                  class="
                    bg-brand
                    w-full
                    rounded
                    px-4
                    py-3
                    text-white text-center
                    font-bold
                    cursor-pointer
                  "
                >
                  Proceed
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { default as toast } from "@/utils/toastUtils";

export default {
  name: "RegisterComponent",
  setup() {
    // Define a validation schema
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      phone: yup.string().required().min(10),
      gender: yup.string().required(),
      age: yup.string().required(),
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
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  data() {
    return {
      location: null,
      name: "",
      email: "",
      gender: "Male",
      phone: "",
      age: "",
      password: "",
      showVerifyOtpDialog: false,
      pinLength: 6,
    };
  },
  methods: {
    stepForward(i) {
      if (
        document.getElementById(`pin_field_${i}`).value &&
        i != this.pinLength - 1
      ) {
        document.getElementById(`pin_field_${i + 1}`).focus();
        document.getElementById(`pin_field_${i + 1}`).value = "";
      }
      this.checkPin();
    },
    stepBack(i) {
      if (i > 0) {
        document.getElementById(`pin_field_${i - 1}`).focus();
      }
      if (i >= 0) {
        document.getElementById(`pin_field_${i}`).value = "";
      }
    },
    checkPin() {
      let code = "";
      for (let i = 0; i < this.pinLength; i++) {
        code = code + document.getElementById(`pin_field_${i}`).value;
      }
      console.log(code);
      console.log(code.length);
      if (code.length == this.pinLength) {
        this.verifyOTP(code);
      }
    },
    closeModal() {
      this.showVerifyOtpDialog = false;
    },
    verifyOTP(pin) {
      let data = {
        email: this.email,
        otp: pin,
      };
      this.$store
        .dispatch("verifyOTP", data)
        .then((data) => {
          toast.success("OTP verified");
          this.showVerifyOtpDialog = false;
          this.$router.push("/auth/login");
        })
        .catch((err) => {
          toast.error(err);
        });
      // this.$store.commit("SET_LOGGED_IN");
      // this.$router.push("/");
    },
    onSubmit(values) {
      if (values.phone.length == 10) {
        values.phone = "91" + values.phone;
      }
      this.$store
        .dispatch("performRegister", values)
        .then((data) => {
          toast.success("User registered");
          toast.info("OTP sent to mobile number");
          this.showVerifyOtpDialog = true;
        })
        .catch((err) => {
          toast.error(err);
        });
    },
    fetchUserLocation() {
      if (!("geolocation" in navigator)) {
        this.errorStr = "Geolocation is not available.";
        return;
      }

      this.gettingLocation = true;
      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.gettingLocation = false;
          this.location = pos;
        },
        (err) => {
          this.gettingLocation = false;
          this.errorStr = err.message;
        }
      );
    },
  },
  created() {
    this.fetchUserLocation();
  },
};
</script>

<style scoped></style>
