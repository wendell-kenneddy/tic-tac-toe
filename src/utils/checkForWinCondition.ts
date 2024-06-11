import { CellData } from "../contexts/GameContext";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 5, 8],
];

export function checkForWinConditions(cells: CellData[]) {
  let winner: "X" | "O" | "" = "";

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const isGameOver =
      cells[condition[0]].content == cells[condition[1]].content &&
      cells[condition[0]].content == cells[condition[2]].content;
    if (isGameOver) {
      winner = cells[condition[0]].content;
      break;
    }
  }

  return winner;
}
