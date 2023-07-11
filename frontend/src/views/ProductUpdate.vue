<template>
  <product-card :box="box">
    <template #buttons>
      <div class="flex w-1/2 m-auto">
        <save-button />
        <delete-button />
      </div>
    </template>
  </product-card>
</template>

<script setup>
import ProductCard from "@/modules/ProductCard.vue";
import SaveButton from "@/common/components/SaveButton.vue";
import DeleteButton from "@/common/components/DeleteButton.vue";
import { useRoute } from "vue-router";
import boxes from "@/mocks/boxes";

const route = useRoute();

// Находим задачу из массива задач по id из строки URL
const box = boxes.find((box) => +box.id === +route.params.id);
</script>
