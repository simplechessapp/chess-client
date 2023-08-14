import { Board } from "@/models/Board";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { getValidMoves } from "../moves/moves";
import { areSameColor } from "./pieceChecks";

export function isKingInCheck(board: Board, color: ColorEnum) {
  const king = board.pieces.find(
    (p) => p.piece === PieceEnum.KING && p.color === color
  );

  if (!king) {
    return false;
  }

  const opponentPieces = board.pieces.filter((p) => p.color !== color);

  const opponentMoves = opponentPieces.flatMap((p) =>
    getValidMoves(board, p.coordinates)
  );

  return opponentMoves.some(
    (m) => m.x === king.coordinates.x && m.y === king.coordinates.y
  );
}
