import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidKingMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const king = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (king?.piece !== PieceEnum.KING) {
    return false;
  }

  if (isValidKingCastle(board, pieceStart, pieceEnd, king)) {
    return true;
  }

  if (
    (pieceEnd.x === pieceStart.x + 1 && pieceEnd.y === pieceStart.y) ||
    (pieceEnd.x === pieceStart.x - 1 && pieceEnd.y === pieceStart.y) ||
    (pieceEnd.x === pieceStart.x && pieceEnd.y === pieceStart.y + 1) ||
    (pieceEnd.x === pieceStart.x && pieceEnd.y === pieceStart.y - 1) ||
    (pieceEnd.x === pieceStart.x + 1 && pieceEnd.y === pieceStart.y + 1) ||
    (pieceEnd.x === pieceStart.x + 1 && pieceEnd.y === pieceStart.y - 1) ||
    (pieceEnd.x === pieceStart.x - 1 && pieceEnd.y === pieceStart.y + 1) ||
    (pieceEnd.x === pieceStart.x - 1 && pieceEnd.y === pieceStart.y - 1)
  ) {
    return true;
  }

  return false;
}

export function isValidKingCastle(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates,
  king: PiecePosition
) {

  // check king start position
  const kingStart = king.color === ColorEnum.WHITE ? { x: 4, y: 0 } : { x: 4, y: 7 };
  if (pieceStart.x !== kingStart.x || pieceStart.y !== kingStart.y) {
    return false;
  }

  // check if rooks are in place
  const rookX = pieceEnd.x > pieceStart.x ? 7 : 0;
  
  const rook = board.find(
    (piece) => piece.x === rookX && piece.y === pieceStart.y
  );

  if (rook?.piece !== PieceEnum.ROOK || rook?.color !== king.color) {
    return false;
  }

  const castlingDirection = pieceEnd.x > pieceStart.x ? 1 : -1;
  // check if there is nothing between king and rook

  for (let i = 1; i < Math.abs(king.x - rook.x); i++) {
    const piece = board.find(
      (piece) => piece.x === pieceStart.x + i * castlingDirection && piece.y === pieceStart.y
    );
    if (piece) {
      return false;
    }
  }


  if (pieceEnd.x === pieceStart.x + 2 || pieceEnd.x === pieceStart.x - 2) {
    return true;
  }

  return false;
}
