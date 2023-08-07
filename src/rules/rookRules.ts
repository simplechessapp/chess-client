import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidRookMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const rook = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (rook?.piece !== PieceEnum.ROOK) {
    return false;
  }

  // move on y axis
  if (pieceEnd.x === pieceStart.x && pieceEnd.y !== pieceStart.y) {
    // cant move through pieces
    for (let i = 1; i < Math.abs(pieceEnd.y - pieceStart.y); i++) {
      const y = pieceStart.y + i * Math.sign(pieceEnd.y - pieceStart.y);

      const piece = board.find(
        (piece) => piece.x === pieceStart.x && piece.y === y
      );

      if (piece) {
        return false;
      }
    }
    return true;
  }

  // move on x axis
  if (pieceEnd.x !== pieceStart.x && pieceEnd.y === pieceStart.y) {
    // cant move through pieces
    for (let i = 1; i < Math.abs(pieceEnd.x - pieceStart.x); i++) {
      const x = pieceStart.x + i * Math.sign(pieceEnd.x - pieceStart.x);

      const piece = board.find(
        (piece) => piece.x === x && piece.y === pieceStart.y
      );

      if (piece) {
        return false;
      }
    }
    return true;
  }

  return false;
}
