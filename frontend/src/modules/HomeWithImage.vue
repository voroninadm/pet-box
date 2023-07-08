<template>
  <div class="shelves">
    <div
      v-for="box in someBoxes"
      :key="box.id"
      class="box"
      :class="`box-${box.cell}`"
    />
  </div>
</template>

<script setup>
import someBoxes from "@/mocks/someBoxes.json";
// import { useRouter } from "vue-router";

// const router = useRouter();
// const toUpdateProduct = () => {
//   router.push({ name: "updateProduct" });
// };
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
  width: 110px;
  height: 90px;

  background-size: contain;
  background-repeat: no-repeat;
}

/* First shelf */
.box-1 {
  top: 140px;
  left: 235px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-2 {
  top: 140px;
  left: 395px;
  background-image: url("@/assets/img/box-forgotten.png");
}

.box-3 {
  top: 248px;
  left: 235px;
  background-image: url("@/assets/img/box-forgotten.png");
}

.box-4 {
  top: 248px;
  left: 395px;
  background-image: url("@/assets/img/box-forgotten.png");
}
.box-5 {
  top: 355px;
  left: 235px;
  background-image: url("@/assets/img/box-forgotten.png");
}

.box-6 {
  top: 355px;
  left: 395px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-7 {
  top: 465px;
  left: 235px;
  background-image: url("@/assets/img/box-forgotten.png");
}

.box-8 {
  top: 465px;
  left: 395px;
  background-image: url("@/assets/img/box-ok.png");
}

/* Second Shelf */

.box-9 {
  top: 140px;
  left: 655px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-10 {
  top: 140px;
  left: 815px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-11 {
  top: 248px;
  left: 655px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-12 {
  top: 248px;
  left: 815px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-13 {
  top: 355px;
  left: 655px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-14 {
  top: 355px;
  left: 815px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-15 {
  top: 465px;
  left: 655px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-16 {
  top: 465px;
  left: 815px;
  background-image: url("@/assets/img/box-forgotten.png");
}

/* Third Shelf */

.box-17 {
  top: 140px;
  left: 1070px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-18 {
  top: 140px;
  left: 1230px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-19 {
  top: 248px;
  left: 1070px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-20 {
  top: 248px;
  left: 1230px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-21 {
  top: 355px;
  left: 1070px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-22 {
  top: 355px;
  left: 1230px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-23 {
  top: 465px;
  left: 1070px;
  background-image: url("@/assets/img/box-ok.png");
}

.box-24 {
  top: 465px;
  left: 1230px;
  background-image: url("@/assets/img/box-ok.png");
}
</style>
