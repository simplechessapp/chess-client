import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { hasPiece } from "@/utils/common/boardFunctions";

export function isValidBishopMove(
  board: PiecePosition[],
  bishop: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  if (pieceDrop.x === bishop.x && pieceDrop.y === bishop.y) {
    return false;
  }

  if (
    pieceDrop.x - bishop.x === pieceDrop.y - bishop.y ||
    pieceDrop.x - bishop.x === bishop.y - pieceDrop.y
  ) {
    // cant move through pieces

    for (let i = 1; i < Math.abs(pieceDrop.x - bishop.x); i++) {
      const x = bishop.x + i * Math.sign(pieceDrop.x - bishop.x);
      const y = bishop.y + i * Math.sign(pieceDrop.y - bishop.y);

      if (hasPiece(board, { x, y })) {
        return false;
      }
    }

    return true;
  }

  return false;
}
