import { useGame } from "../../hooks/useGame";

export function ActionBar() {
  const { winner, markedCellsCount, resetGame } = useGame();

  return (
    <div className="flex items-center justify-center w-full px-4">
      {(winner || markedCellsCount == 9) && (
        <button
          className="py-2 px-4 rounded-md flex items-center justify-center font-medium uppercase bg-emerald-600 transition-colors hover:bg-emerald-400"
          onClick={resetGame}
        >
          Play again
        </button>
      )}
    </div>
  );
}
