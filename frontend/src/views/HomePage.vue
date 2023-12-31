<template>
  <div
    v-if="authStore.isAuthenticated && !isMobileOrSmallScreen"
    class="toggler"
  >
    <button
      class="toggler__button"
      :class="{ active: homePage === HomeWithImage }"
      @click="setImageView"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        class="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.3 15.8 5.1-5.2a2.3 2.3 0 0 1 3.2 0l5.1 5.2m-1.4-1.6 1.4-1.4a2.3 2.3 0 0 1 3.1 0l3 3m-18 3.7h16.4a1.5 1.5 0 0 0 1.6-1.5V6a1.5 1.5 0 0 0-1.6-1.5H3.9A1.5 1.5 0 0 0 2.3 6v12a1.5 1.5 0 0 0 1.5 1.5zM14.2 8.2h0v0h0v0zm.4 0a.4.4 0 1 1-.7 0 .4.4 0 0 1 .7 0z"
        />
      </svg>
    </button>
    <button
      class="toggler__button"
      :class="{ active: homePage === HomeWithTable }"
      @click="setTableView"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        class="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"
        />
      </svg>
    </button>
  </div>

  <transition
    name="view"
    enter-active-class="animate__animated animate__fadeInRight"
  >
    <component :is="homePage" :boxes="boxes" @clickToBox="redirectToCard">
      <slot />
    </component>
  </transition>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { ref, shallowRef } from "vue";
import { isMobileOrSmallScreen } from "@/common/helpers";

const router = useRouter();
const dataStore = useDataStore();
const authStore = useAuthStore();
const boxes = ref(authStore.isAuthenticated ? dataStore.boxes : "");

import HomeWithImage from "../modules/HomeWithImage.vue";
import HomeWithTable from "../modules/HomeWithTable.vue";

const homePage = isMobileOrSmallScreen
  ? shallowRef(HomeWithTable)
  : shallowRef(HomeWithImage);

const setImageView = () => (homePage.value = HomeWithImage);
const setTableView = () => (homePage.value = HomeWithTable);

const redirectToCard = (boxId) => {
  router.push({ path: `product/edit/${boxId}` });
};
</script>

<style scoped>
.toggler {
  position: absolute;
  top: 60px;
  right: 40px;

  border: 1px solid lightgray;
  padding: 3px 5px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 10;
}

.toggler__button {
  padding: 2px;
  border: 1px solid gray;
}

.active {
  background-color: rgba(79, 234, 105, 0.328);
}
</style>
