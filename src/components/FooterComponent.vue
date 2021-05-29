<template>
  <div class="flex flex-col bg-white mt-8">
    <div
      class="
        container
        grid grid-cols-3
        sm:grid-cols-4
        py-8
        px-8
        text-left
        mx-auto
      "
    >
      <div
        :key="index"
        v-for="(item, index) in footerItems"
        class="flex flex-col items-start space-y-4"
      >
        <h1 class="text-brand text-lg font-semibold">
          {{ $tc(item.title, 2) }}
        </h1>
        <template :key="subItem.title" v-for="subItem in item.items">
          <p class="cursor-pointer">
            {{ $tc(subItem.title, 2) }}
          </p>
        </template>
      </div>
    </div>
    <div class="flex flex-row justify-center py-4 bg-brand text-white">
      <p
        :key="index"
        v-for="(item, index) in bottomFooter"
        class="px-4 cursor-pointer"
      >
        {{ $t(item.title) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      footerItems: [
        {
          title: "service",
          items: [
            {
              title: "billingAndInfo",
              url: "",
            },
            {
              title: "campaign",
              url: "",
            },
            {
              title: "carrier",
              url: "",
            },
            {
              title: "fee",
              url: "",
            },
          ],
        },
        {
          title: "about",
          items: [
            {
              title: "ourStory",
              url: "",
            },
            {
              title: "offer",
              url: "",
            },
            {
              title: "team",
              url: "",
            },
            {
              title: "career",
              url: "",
            },
          ],
        },
        {
          title: "help",
          items: [
            {
              title: "faq",
              url: "",
            },
            {
              title: "contactUs",
              url: "",
            },
          ],
        },
      ],
      bottomFooter: [
        {
          title: "termsAndConditions",
          url: "",
        },
        {
          title: "privacyPolicy",
          url: "",
        },
        {
          title: "24by7Help",
          url: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
