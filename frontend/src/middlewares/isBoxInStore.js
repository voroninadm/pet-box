import { useDataStore } from "@/stores/data";

export const isBoxInStore = ({ to }) => {
  const dataStore = useDataStore();
  const boxId = +to.params.id;

  if (!dataStore.boxes.some((box) => box.id === boxId)) {
    return { name: "error" };
  } else {
    return true;
  }
};
