import { useContext } from "react";
import { GameContext, GameContextData } from "../contexts/GameContext";

export function useGame(): GameContextData {
  const gameContext = useContext(GameContext) as GameContextData;
  return gameContext;
}
