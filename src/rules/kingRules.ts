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