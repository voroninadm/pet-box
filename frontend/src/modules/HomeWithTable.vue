<template>
  <div class="w-10/12">
    <ol class="grid border rounded-lg px-2 py-3 mt-10">
      <li
        class="box box-2 border rounded-lg px-2 py-1 my-1 transition hover:bg-gray-200"
      >
        <span>Номер</span>
        <b>1</b>
      </li>

      <li
        class="box box-2 border rounded-lg px-2 py-1 my-1 transition hover:bg-gray-200"
      >
        <ol class="flex gap-2">
          <li>
            <span>Номер</span>
            <b>2</b>
          </li>
          <li>
            <span>ТКН</span>
            <b>24463а</b>
          </li>
          <li>
            <span>Дата поступления</span>
            <b>11.12.23</b>
          </li>
          <li>
            <span>Окончание хранения</span>
            <b>21.12.23</b>
          </li>
        </ol>
      </li>

      <li
        class="box box-2 border rounded-lg px-2 py-1 my-1 transition hover:bg-gray-200"
      >
        <ol class="flex gap-2">
          <li>
            <span>Номер</span>
            <b>3</b>
          </li>
          <li>
            <span>ТКН</span>
            <b>12463а</b>
          </li>
          <li>
            <span>Дата поступления</span>
            <b>01.12.23</b>
          </li>
          <li>
            <span>Окончание хранения</span>
            <b>11.12.23</b>
          </li>
        </ol>
      </li>

      <li
        class="box box-2 border rounded-lg px-2 py-1 my-1 transition hover:bg-gray-200"
      >
        <ol class="flex gap-2">
          <li>
            <span>Номер</span>
            <b>16</b>
          </li>
          <li>
            <span>ТКН</span>
            <b>04463а</b>
          </li>
          <li>
            <span>Дата поступления</span>
            <b>11.12.23</b>
          </li>
          <li>
            <span>Окончание хранения</span>
            <b>21.12.23</b>
          </li>
        </ol>
      </li>

      <li
        class="box box-2 border rounded-lg px-2 py-1 my-1 transition hover:bg-gray-200"
      >
        <ol class="flex gap-2">
          <li>
            <span>Номер</span>
            <b>19</b>
          </li>
          <li>
            <span>ТКН</span>
            <b>24463а</b>
          </li>
          <li>
            <span>Дата поступления</span>
            <b>11.12.23</b>
          </li>
          <li>
            <span>Окончание хранения</span>
            <b>21.12.23</b>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script setup>
const open = (evt) => console.log(`I'm opened-${evt}`);
</script>
