import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { getPiece, hasPiece } from "@/utils/common/boardFunctions";

export function isValidKnightMove(
  board: PiecePosition[],
  knight: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  for (let i = -1; i < 2; i += 2) {
    for (let j = -1; j < 2; j += 2) {
      if (
        (pieceDrop.x === knight.x + 2 * i && pieceDrop.y === knight.y + j) || // 
        (pieceDrop.x === knight.x + i && pieceDrop.y === knight.y + 2 * j)
      ) {
        const capturedPiece = getPiece(board, pieceDrop);
        if (!capturedPiece) {
          return true;
        }
        if (knight.color === capturedPiece.color) {
          return false;
        }
        return true;
      }
    }
  }

  return false;
}
