<template>
  <table class="w-10/12 mt-5">
    <thead>
      <tr>
        <th class="w-1/12 p-2">Ячейка</th>
        <th class="w-1/12 p-2">Накладная</th>
        <th class="w-4/12 p-2">Заказчик</th>
        <th class="w-2/12 p-2">Начало хранения</th>
        <th class="w-2/12 p-2"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="box in boxes" :key="box.id" class="border">
        <td class="text-center border">{{ box.cell }}</td>
        <td class="text-center border">{{ box.invoice }}</td>
        <td class="text-center border">{{ box.customer }}</td>
        <td class="text-center border">{{ date_add(box.date_add) }}</td>
        <td class="text-center border">{{ box.date_add }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import boxes from "@/mocks/boxes";
import { months_ru } from "@/common/constants";

const date_add = (date) => {
  let normalizedData = new Date(Date.parse(date));
  return (
    normalizedData.getDate() +
    " " +
    months_ru[normalizedData.getMonth()] +
    " " +
    normalizedData.getFullYear()
  );
};
</script>
