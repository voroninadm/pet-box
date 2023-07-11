import { defineStore } from "pinia";

import someBoxes from "@/mocks/someBoxes.json";
import { allCells } from "@/common/constants";

export const useDataStore = defineStore("data", {
  state: () => ({
    boxes: someBoxes,
  }),
  getters: {
    freeCells: (state) => {
      return allCells.filter((cell) => {
        return state.boxes.every((box) => box.cell !== cell);
      });
    },
    cellToNewBox() {
      return this.freeCells.shift() ?? null;
    },
  },
  actions: {
    deleteBox: (state, boxId) => {
      state.boxes.filter((box) => {
        box.id !== boxId;
      });
    },
  },
});
