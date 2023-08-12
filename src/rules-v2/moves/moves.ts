import { Board } from "@/models/Board";
import { getPiece } from "../checks/cellChecks";
import { Coordinates } from "@/models/Coordinates";

export function makeMove(
  board: Board,
  from: Coordinates,
  to: Coordinates
): Board | null{
  const piece = getPiece(board.pieces, from);
  if (!piece) {
    return null;
  }

  if (from.x === to.x && from.y === to.y) {
    return null;
  }

  const newBoard = structuredClone(board);
  newBoard.pieces = newBoard.pieces.filter(
    (p) => p.coordinates.x !== to.x || p.coordinates.y !== to.y
  );
  newBoard.pieces = newBoard.pieces.map((p) => {
    if (p.coordinates.x === from.x && p.coordinates.y === from.y) {
      p.coordinates.x = to.x;
      p.coordinates.y = to.y;
    }
    return p;
  });

  return newBoard;
}
