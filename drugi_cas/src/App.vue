<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigacioniMeni from "./components/NavigacioniMeni.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <NavigacioniMeni />
  <RouterView />
  <Footer />
</template>
