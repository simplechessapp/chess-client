import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidBishopMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const bishop = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (bishop?.piece !== PieceEnum.BISHOP) {
    return false;
  }

  if (pieceEnd.x === pieceStart.x && pieceEnd.y === pieceStart.y) {
    return false;
  }

  if (
    pieceEnd.x - pieceStart.x === pieceEnd.y - pieceStart.y ||
    pieceEnd.x - pieceStart.x === pieceStart.y - pieceEnd.y
  ) {
    // cant move through pieces

    for (let i = 1; i < Math.abs(pieceEnd.x - pieceStart.x); i++) {
      const x = pieceStart.x + i * Math.sign(pieceEnd.x - pieceStart.x);
      const y = pieceStart.y + i * Math.sign(pieceEnd.y - pieceStart.y);

      const piece = board.find((piece) => piece.x === x && piece.y === y);

      if (piece) {
        return false;
      }
    }

    return true;
  }

  return false;
}
