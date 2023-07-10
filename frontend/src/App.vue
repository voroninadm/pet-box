<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";

import { useDataStore } from "./stores/data";

const dataStore = useDataStore();
</script>

<style>
@import "@/assets/style.css";
</style>
