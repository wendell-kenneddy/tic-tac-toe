import { v4 } from "uuid";
import { CellData } from "../contexts/GameContext";

export function createCellArray() {
  const cells: CellData[] = [];
  for (let i = 0; i < 9; i++) {
    cells.push({ content: "", id: v4() });
  }
  return cells;
}
