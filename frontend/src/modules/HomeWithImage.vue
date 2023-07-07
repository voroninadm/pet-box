<template>
  <div class="shelves">
    <div
      class="box box-2 hover:scale-105 transition duration-200"
      @click="toUpdateProduct"
    ></div>
    <div
      class="box box-3 hover:scale-105 transition duration-200"
      @click="toUpdateProduct"
    ></div>
    <div
      class="box box-16 hover:scale-105 transition duration-200"
      @click="toUpdateProduct"
    ></div>
    <div
      class="box box-19 hover:scale-105 transition duration-200"
      @click="toUpdateProduct"
    ></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toUpdateProduct = () => {
  router.push({ name: "updateProduct" });
};
</script>

<style scoped>
.shelves {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("@/assets/img/shelves.jpg");
  background-size: cover;
}

.box {
  position: absolute;
  width: 120px;
  height: 110px;

  background-size: cover;
}

.box-2 {
  position: absolute;
  top: 235px;
  left: 195px;
  width: 120px;
  height: 110px;

  background-image: url("@/assets/img/box-ok.png");
  background-size: cover;
}

.box-3 {
  position: absolute;
  top: 135px;
  left: 395px;
  width: 120px;
  height: 110px;

  background-image: url("@/assets/img/box-forgotten.png");
  background-size: cover;
}

.box-16 {
  position: absolute;
  top: 460px;
  left: 810px;
  width: 120px;
  height: 110px;

  background-image: url("@/assets/img/box-forgotten.png");
  background-size: cover;
}

.box-19 {
  position: absolute;
  top: 235px;
  left: 1045px;
  width: 120px;
  height: 110px;

  background-image: url("@/assets/img/box-ok.png");
  background-size: cover;
}
</style>
