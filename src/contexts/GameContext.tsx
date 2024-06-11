import { ReactNode, createContext, useState } from "react";
import { createCellArray } from "../utils/createCellArray";
import { checkForWinConditions } from "../utils/checkForWinCondition";

export type Player = "X" | "O";

export interface CellData {
  content: Player | "";
  id: string;
}

export interface GameContextData {
  currentPlayer: Player;
  winner: Player | "draw" | null;
  cells: CellData[];
  markedCellsCount: number;
  onCellClick: (id: string) => void;
  resetGame: () => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext<GameContextData | null>(null);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [cells, setCells] = useState<CellData[]>(createCellArray());
  const [markedCellsCount, setMarkedCellsCount] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "draw" | null>(null);

  function handleCellClick(id: string) {
    if (winner) return;

    const newCells: CellData[] = cells.map((cell) => {
      if (id != cell.id) return cell;
      return {
        ...cell,
        content: currentPlayer,
      };
    });
    const haveAnyoneWon = checkForWinConditions(newCells);
    const nextPlayer = currentPlayer == "X" ? "O" : "X";

    setCells(newCells);
    setMarkedCellsCount(markedCellsCount + 1);
    if (haveAnyoneWon) return setWinner(currentPlayer);
    setCurrentPlayer(nextPlayer);
  }

  function handleResetGame() {
    setCells(createCellArray());
    setCurrentPlayer("X");
    setWinner(null);
    setMarkedCellsCount(0);
  }

  return (
    <GameContext.Provider
      value={{
        cells,
        currentPlayer,
        winner,
        markedCellsCount,
        onCellClick: (id) => handleCellClick(id),
        resetGame: () => handleResetGame(),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
