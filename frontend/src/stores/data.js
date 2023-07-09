import { defineStore } from "pinia";

import someBoxes from "@/mocks/someBoxes.json";

export const useDataStore = defineStore("data", {
  state: () => ({
    boxes: someBoxes,
  }),
  getters: {},
  actions: {},
});
