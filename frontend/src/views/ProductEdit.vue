<template>
  <product-card :box="box">
    <template #buttons>
      <div class="flex w-1/2 m-auto">
        <save-button />
        <delete-button @click="deleteBox(box.id)" />
      </div>
    </template>
  </product-card>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import { useRouter, useRoute } from "vue-router";

import ProductCard from "@/modules/ProductCard.vue";
import SaveButton from "@/common/components/SaveButton.vue";
import DeleteButton from "@/common/components/DeleteButton.vue";

const dataStore = useDataStore();
const route = useRoute();
const router = useRouter();

// Находим задачу из массива задач по id из строки URL
const box = dataStore.boxes.find((box) => +box.id === +route.params.id);

const deleteBox = (boxId) => {
  console.log("deleting box id " + boxId);
};
</script>
