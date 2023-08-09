import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import {
  areSameColor,
  getPiece,
  hasPiece,
} from "@/utils/common/boardFunctions";

export function isValidKingMove(
  board: PiecePosition[],
  king: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  if (isValidKingCastle(board, king, pieceDrop)) {
    return true;
  }

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (pieceDrop.x === king.x + i && pieceDrop.y === king.y + j) {
        // eat piece
        const capturedPiece = getPiece(board, pieceDrop);
        if (!capturedPiece) {
          return true;
        }
        if (!areSameColor(king, capturedPiece)) {
          return true;
        }
      }
    }
  }

  return false;
}

export function isValidKingCastle(
  board: PiecePosition[],
  king: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  // check king start position
  const kingStart =
    king.color === ColorEnum.WHITE ? { x: 4, y: 0 } : { x: 4, y: 7 };
  if (king.x !== kingStart.x || king.y !== kingStart.y) {
    return false;
  }

  // check if rooks are in place
  const rookX = pieceDrop.x > king.x ? 7 : 0;

  const rook = getPiece(board, { x: rookX, y: king.y });

  if (rook?.piece !== PieceEnum.ROOK || !areSameColor(king, rook)) {
    return false;
  }

  const castlingDirection = pieceDrop.x > king.x ? 1 : -1;
  // check if there is nothing between king and rook

  for (let i = 1; i < Math.abs(king.x - rook.x); i++) {
    if (hasPiece(board, { x: king.x + i * castlingDirection, y: king.y })) {
      return false;
    }
  }
  if ((pieceDrop.x === king.x + 2 || pieceDrop.x === king.x - 2) && pieceDrop.y === king.y) {
    return true;
  }

  return false;
}
