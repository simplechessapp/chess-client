import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidKnightMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const knight = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );

  if (knight?.piece !== PieceEnum.KNIGHT) {
    return false;
  }

  if (
    (pieceEnd.x === pieceStart.x + 2 && pieceEnd.y === pieceStart.y + 1) ||
    (pieceEnd.x === pieceStart.x + 2 && pieceEnd.y === pieceStart.y - 1) ||
    (pieceEnd.x === pieceStart.x - 2 && pieceEnd.y === pieceStart.y + 1) ||
    (pieceEnd.x === pieceStart.x - 2 && pieceEnd.y === pieceStart.y - 1) ||
    (pieceEnd.x === pieceStart.x + 1 && pieceEnd.y === pieceStart.y + 2) ||
    (pieceEnd.x === pieceStart.x + 1 && pieceEnd.y === pieceStart.y - 2) ||
    (pieceEnd.x === pieceStart.x - 1 && pieceEnd.y === pieceStart.y + 2) ||
    (pieceEnd.x === pieceStart.x - 1 && pieceEnd.y === pieceStart.y - 2)
  ) {
    return true;
  }

  return false;
}