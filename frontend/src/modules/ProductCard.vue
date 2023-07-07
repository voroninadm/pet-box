<template>
  <transition appear enter-active-class="animate__animated animate__flipInX">
    <section class="product w-1/4 mt-5 border drop-shadow p-3 bg-slate-50">
      <div class="product__image"></div>
      <h1 class="text-center text-lg">Карточка товара</h1>
      <form action="#" class="flex flex-col">
        <div class="flex flex-col my-3 gap-2">
          <label class="flex justify-between"
            >Номер накладной
            <input :value="props.box.invoice" type="text" class="border" />
          </label>
          <label class="flex justify-between"
            >Заказчик
            <input :value="props.box.customer" type="text" class="border" />
          </label>
          <label class="flex justify-between">
            Начало хранения
            <span>{{ normalizeData(props.box.date_add) }}</span>
          </label>
          <label class="flex justify-between">
            Окончание хранения
            <span>{{ deadlineDate(props.box.date_add) }}</span>
          </label>
          <small class="text-green-600 text-center my-1"
            >Товар хранится на складе не более
            {{ totalDaysHolding }} дней!</small
          >
        </div>
        <slot name="buttons" />
      </form>
    </section>
  </transition>
</template>

<script setup>
import { totalDaysHolding } from "@/common/constants";
import { normalizeData, deadlineDate } from "@/common/helpers";

const props = defineProps({
  box: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.product__image {
  width: 200px;
  height: 200px;
  background: url("@/assets/img/box-adding.png") 50% 50% no-repeat;
  background-size: contain;
  margin: auto;
}
</style>
