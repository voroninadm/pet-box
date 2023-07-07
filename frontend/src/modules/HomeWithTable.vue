<template>
  <table class="w-8/12 mt-5">
    <thead>
      <tr>
        <th class="w-1/12 p-2">Ячейка</th>
        <th class="w-1/12 p-2">Накладная</th>
        <th class="w-4/12 p-2">Заказчик</th>
        <th class="w-2/12 p-2">Начало хранения</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="box in boxes"
        :key="box.id"
        class="border"
        :class="{
          'animate-pulse': isHoldingDateExpired(box.date_add),
          'text-red-800': isHoldingDateExpired(box.date_add),
        }"
      >
        <td class="text-center border">{{ box.cell }}</td>
        <td class="text-center border">{{ box.invoice }}</td>
        <td class="text-center border">{{ box.customer }}</td>
        <td class="text-center border">{{ normalizeData(box.date_add) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import boxes from "@/mocks/boxes";
import { normalizeData, isHoldingDateExpired } from "@/common/helpers";
</script>
