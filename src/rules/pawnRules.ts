import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidPawnMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const pawn = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (pawn?.piece !== PieceEnum.PAWN) {
    return false;
  }

  const pawnColor = pawn?.color;
  const pawnSpecialMove = pawnColor === ColorEnum.WHITE ? 1 : 6;
  const moveDirection = pawnColor === ColorEnum.WHITE ? 1 : -1;

  if (canPawnCapture(board, pieceStart, pieceEnd)) {
    return true;
  }

  if (pieceStart.y === pawnSpecialMove) {
    if (
      (pieceEnd.y === pieceStart.y + moveDirection ||
        pieceEnd.y === pieceStart.y + moveDirection * 2) &&
      pieceEnd.x === pieceStart.x
    ) {
      // if there is a piece in the way, return false
      const pieceInWay = board.find(
        (piece) =>
          piece.x === pieceStart.x && piece.y === pieceStart.y + moveDirection
      );
      if (pieceInWay) {
        return false;
      }
      return true;
    }
  }
  if (
    pieceEnd.y === pieceStart.y + moveDirection &&
    pieceEnd.x === pieceStart.x
  ) {
    const pieceInWay = board.find(
      (piece) =>
        piece.x === pieceStart.x && piece.y === pieceStart.y + moveDirection
    );
    if (pieceInWay) {
      return false;
    }
    return true;
  }

  return false;
}

export function canPawnCapture(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const pawn = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (pawn?.piece !== PieceEnum.PAWN) {
    return false;
  }

  const pawnColor = pawn?.color;
  const moveDirection = pawnColor === ColorEnum.WHITE ? 1 : -1;

  if (
    pieceEnd.y === pieceStart.y + moveDirection &&
    (pieceEnd.x === pieceStart.x + 1 || pieceEnd.x === pieceStart.x - 1)
  ) {
    // if there is a piece at end position, check colors
    const capturedPiece = board.find(
      (piece) => piece.x === pieceEnd.x && piece.y === pieceEnd.y
    );
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
