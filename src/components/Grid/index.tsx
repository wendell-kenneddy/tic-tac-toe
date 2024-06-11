import { GridCell } from "./GridCell";
import { useGame } from "../../hooks/useGame";

export function Grid() {
  const { cells } = useGame();

  return (
    <div className="grid grid-cols-3 gap-1">
      {cells.map((cell) => {
        return <GridCell key={cell.id} cell={cell} />;
      })}
    </div>
  );
}
