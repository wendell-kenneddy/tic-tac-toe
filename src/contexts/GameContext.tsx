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
  winner: Player | null;
  cells: CellData[];
  onCellClick: (id: string) => void;
  resetGame: () => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext<GameContextData | null>(null);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [cells, setCells] = useState<CellData[]>(createCellArray());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);

  function handleCellClick(id: string) {
    const newCells: CellData[] = cells.map((cell) => {
      if (id != cell.id) return cell;
      return {
        ...cell,
        content: currentPlayer,
      };
    });
    setCells(newCells);
    const isGameOver = checkForWinConditions(newCells);
    if (isGameOver) return setWinner(currentPlayer);
    setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  }

  function handleResetGame() {
    setCells(createCellArray());
    setCurrentPlayer("X");
    setWinner(null);
  }

  return (
    <GameContext.Provider
      value={{
        cells,
        currentPlayer,
        winner,
        onCellClick: (id) => handleCellClick(id),
        resetGame: () => handleResetGame(),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
