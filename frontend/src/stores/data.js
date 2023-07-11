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
  },
  actions: {
    deleteBox(boxId) {
      const index = this.boxes.findIndex((box) => box.id === boxId);
      if (index !== -1) {
        this.boxes.splice(index, 1);
      }
    },
    cellToNewBox() {
      return this.getters.freeCells.shift() ?? null;
    },
  },
});
