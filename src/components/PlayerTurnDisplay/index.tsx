import { useGame } from "../../hooks/useGame";

export function PlayerTurnDisplay() {
  const { currentPlayer, winner, markedCellsCount } = useGame();
  const playerNumber = currentPlayer == "X" ? 1 : 2;
  let text =
    markedCellsCount == 9 && !winner
      ? "It's a draw!"
      : winner
      ? `Player ${playerNumber} won!`
      : `Player ${playerNumber}'s (${currentPlayer}) turn`;

  return <span className="font-medium uppercase text-lg">{text}</span>;
}
