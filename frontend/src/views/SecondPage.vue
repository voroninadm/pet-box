<template>
  <h1 class="mb-5">Hello!</h1>

  <div class="card mb-5">
    <button class="border py-1 px-2" type="button" @click="count++">
      count is
      <span class="text-red-500">{{ count }}</span>
    </button>
  </div>

  <p class="read-the-docs mt-2">By Alex Vue3 + Vite.js + TailwindCss</p>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
