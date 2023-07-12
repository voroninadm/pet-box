<template>
  <transition
    appear
    enter-active-class="animate__animated animate__slideInDown"
  >
    <section
      class="flex flex-col product w-1/4 mt-10 border drop-shadow-xl p-3 bg-slate-50"
    >
      <div class="product__image"></div>
      <h1 class="text-center text-lg">Что-то пошло не так...</h1>
      <p class="text-center text-sm">
        Вернитесь на главную и попробуйте еще раз
      </p>
      <button
        class="w-1/2 border mx-auto my-3 px-2 py-1 rounded-lg bg-white transition duration-70 hover:bg-green-200"
        @click="router.replace({ name: 'home' })"
      >
        Ок, так и сделаю
      </button>
    </section>
  </transition>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped>
.product__image {
  width: 300px;
  height: 280px;
  background: url("@/assets/img/box-what.png") 50% 50% no-repeat;
  background-size: contain;
  margin: auto;
}
</style>
