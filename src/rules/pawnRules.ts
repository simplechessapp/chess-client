import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { getPiece, hasPiece } from "@/utils/common/boardFunctions";

export function isValidPawnMove(
  board: PiecePosition[],
  pawn: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  const pawnSpecialMove = pawn.color === ColorEnum.WHITE ? 1 : 6;
  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;

  if (canPawnCapture(board, pawn, pieceDrop)) {
    return true;
  }

  if (
    (pieceDrop.y === pawn.y + moveDirection || // normal move
      (pieceDrop.y === pawn.y + moveDirection * 2 && // special first move
        pawn.y === pawnSpecialMove)) &&
    pieceDrop.x === pawn.x
  ) {
    if (hasPiece(board, { x: pawn.x, y: pawn.y + moveDirection })) {
      return false;
    }
    return true;
  }

  return false;
}

export function canPawnCapture(
  board: PiecePosition[],
  pawn: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  const pawnColor = pawn.color;
  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;

  if (
    pieceDrop.y === pawn.y + moveDirection &&
    (pieceDrop.x === pawn.x + 1 || pieceDrop.x === pawn.x - 1)
  ) {
    const capturedPiece = getPiece(board, pieceDrop);
    if (!capturedPiece) {
      return false;
    }
    if (pawnColor === capturedPiece.color) {
      return false;
    }
    return true;
  }

  return false;
}
