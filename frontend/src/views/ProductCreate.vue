<template>
  <transition appear enter-active-class="animate__animated animate__flipInX">
    <section class="product w-1/4 mt-5 border drop-shadow p-3 bg-slate-50">
      <div class="product__image"></div>
      <h1 class="text-center text-lg">
        Карточка товара
        <!-- <slot /> -->
      </h1>
      <form action="#" class="flex flex-col">
        <div class="flex flex-col my-3 gap-2">
          <label class="flex justify-between">Номер накладной
            <input type="text" class="border" />
          </label>
          <label class="flex justify-between">Заказчик
            <input type="text" class="border" />
          </label>
          <label class="flex justify-between">
            Начало хранения
            <span>{{ currentDate() }}</span>
          </label>
          <label class="flex justify-between">
            Окончание хранения
            <span>{{ weekAfterDate() }}</span>
          </label>
          <small class="text-green-600 text-center my-1">Товар хранится на складе не более 1 недели!</small>
        </div>
        <button type="submit" class="border rounded-lg w-1/3 m-auto">Save</button>
      </form>
    </section>
  </transition>
</template>

<script setup>
import { daysInWeek } from "@/common/constants";
import { months } from "@/common/constants";

const currentDate = () => {
  const date = new Date();
  return (
    date.getDate() +
    " " +
    months[date.getMonth() + 1] +
    " " +
    date.getFullYear()
  );
};

const weekAfterDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + daysInWeek);
  return (
    date.getDate() +
    " " +
    months[date.getMonth() + 1] +
    " " +
    date.getFullYear()
  );
};
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
