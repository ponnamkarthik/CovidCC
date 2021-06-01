<template>
  <div class="flex">
    <Form
      @submit="onSubmit"
      v-slot="{ meta }"
      :validation-schema="schema"
      class="flex flex-col w-full space-y-8 items-start"
    >
      <div class="w-full text-left">
        <label class="flex flex-col w-full justify-start items-start">
          <span class="px-2 text-gray-700">Select Request Type</span>
          <Field
            name="type"
            v-model="type"
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
            <option value="Medicines">Medicines</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Hospital beds">Hospital beds</option>
            <option value="Diagnostics">Diagnostics</option>
            <option value="Isolation centers">Isolation centers</option>
            <option value="Oxygen Cylinders">Oxygen Cylinders</option>
            <option value="Food">Food</option>
            <option value="Online consultation">Online consultation</option>
          </Field>
        </label>

        <ErrorMessage class="text-red-500" name="type" />
      </div>
      <div class="w-full text-left">
        <Field
          name="mobile"
          type="number"
          v-model="mobile"
          placeholder="Mobile"
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
        <ErrorMessage class="text-red-500" name="mobile" />
      </div>
      <div class="w-full text-left">
        <Field
          name="address"
          type="text"
          v-model="address"
          placeholder="Location Address"
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
        <ErrorMessage class="text-red-500" name="address" />
      </div>
      <div class="w-full text-left">
        <Field
          as="textarea"
          name="comments"
          type="text"
          v-model="comments"
          placeholder="Comments"
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
        <ErrorMessage class="text-red-500" name="comments" />
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
        Add Request
      </button>
    </Form>
  </div>
</template>

<script>
import * as yup from "yup";
import { ErrorMessage, Field, Form, useForm } from "vee-validate";
import { default as toast } from "@/utils/toastUtils";

export default {
  name: "AddNewRequest",
  setup() {
    // Define a validation schema
    const schema = yup.object({
      type: yup.string().required(),
      address: yup.string().required(),
      comments: yup.string().required(),
      mobile: yup.string().required().min(10),
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
      type: "",
      address: "",
      comments: "",
      mobile: "",
    };
  },
  methods: {
    getUserLocation() {
      return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
    },
    async onSubmit(values) {
      let requestData = {
        type: values.type,
        comments: [values.comments],
        locationAddress: values.address,
        mobileNumber: values.mobile,
      };

      try {
        let position = await this.getUserLocation();
        let { coords } = position;
        requestData["geoLocation"] = {
          lat: coords.latitude,
          lon: coords.longitude,
        };
      } catch (err) {
        console.error(err);
      }
      this.$store
        .dispatch("addRequest", requestData)
        .then((data) => {
          toast.success("Request added");
          this.$emit("close");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
  },
};
</script>

<style scoped></style>
