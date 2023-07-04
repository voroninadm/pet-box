<template>
  <div class="app_layout">
    <default-header @open-login-modal="isLoginOpen = !isLoginOpen" />
    <slot />
  </div>
  <login-modal
    v-if="isLoginOpen"
    @close-login-modal="isLoginOpen = !isLoginOpen"
  />
</template>

<script setup>
import { ref } from "vue";
import DefaultHeader from "./DefaultHeader.vue";
import LoginModal from "../../modules/LoginModal.vue";

const isLoginOpen = ref(false);
</script>

<style scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
