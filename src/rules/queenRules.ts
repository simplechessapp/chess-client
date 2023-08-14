import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { isValidBishopMove, isValidRookMove } from ".";

export function isValidQueenMove(
  board: PiecePosition[],
  queen: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  // cant move to same position
  if (pieceDrop.x === queen.x && pieceDrop.y === queen.y) {
    return false;
  }

  if (isValidBishopMove(board, queen, pieceDrop) || isValidRookMove(board, queen, pieceDrop)) {
    return true;
  }
  return false;
}
