// количество дней хранения на складе
export const totalDaysHolding = 7;

// всего ячеек - мест хранения на складе
const totalCellsAmount = 24;

// массив всех ячеек
export const allCells = Array.from(
  Array(totalCellsAmount),
  (_, index) => index + 1
);
