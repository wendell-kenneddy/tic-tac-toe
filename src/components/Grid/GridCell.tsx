import { CellData } from "../../contexts/GameContext";
import { useGame } from "../../hooks/useGame";

interface GridCellProps {
  cell: CellData;
}

export function GridCell({ cell }: GridCellProps) {
  const { onCellClick } = useGame();
  const { content, id } = cell;
  let textColor = content == "X" ? "text-emerald-400" : "text-rose-400";

  function validateClick() {
    if (content != "") return;
    onCellClick(id);
  }

  return (
    <div
      className="border-2 border-emerald-400 w-16 h-16 flex items-center justify-center cursor-pointer"
      onClick={validateClick}
    >
      <span className={`font-bold ${textColor} text-2xl`}>{content}</span>
    </div>
  );
}
