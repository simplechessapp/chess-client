import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { hasPiece } from "@/utils/common/boardFunctions";

export function isValidRookMove(
  board: PiecePosition[],
  rook: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  // move on y axis
  if (pieceDrop.x === rook.x && pieceDrop.y !== rook.y) {
    // cant move through pieces
    for (let i = 1; i < Math.abs(pieceDrop.y - rook.y); i++) {
      const y = rook.y + i * Math.sign(pieceDrop.y - rook.y);

      if (hasPiece(board, { x: rook.x, y })) {
        return false;
      }
    }
    return true;
  }

  // move on x axis
  if (pieceDrop.x !== rook.x && pieceDrop.y === rook.y) {
    // cant move through pieces
    for (let i = 1; i < Math.abs(pieceDrop.x - rook.x); i++) {
      const x = rook.x + i * Math.sign(pieceDrop.x - rook.x);

      if (hasPiece(board, { x, y: rook.y })) {
        return false;
      }
    }
    return true;
  }

  return false;
}
