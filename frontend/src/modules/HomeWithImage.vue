<template>
  <div class="shelves">
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-16"></div>
    <div class="box box-19"></div>
  </div>
</template>

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
