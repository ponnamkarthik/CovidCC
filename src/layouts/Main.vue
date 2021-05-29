<template>
  <div class="relative">
    <nav-bar-component></nav-bar-component>
    <div class="flex flex-col bg-background min-h-screen justify-between">
      <router-view />
      <!--      <footer-component></footer-component>-->
    </div>
  </div>
</template>

<script>
// import FooterComponent from "@/components/FooterComponent";
import NavBarComponent from "@/components/NavBarComponent";

export default {
  name: "Main.vue",
  components: {
    // FooterComponent,
    NavBarComponent,
  },
};
</script>

<style scoped></style>
