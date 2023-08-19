import { Board } from "@/models/Board";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { getValidMoves } from "../moves/moves";
import { areSameColor } from "./pieceChecks";
import { isCellUnderAttack } from "./cellChecks";

export function isKingInCheck(board: Board, color: ColorEnum) {
  const king = board.pieces.find(
    (p) => p.piece === PieceEnum.KING && p.color === color
  );

  if (!king) {
    return false;
  }

  return !isCellUnderAttack(board.pieces, king.coordinates, color);
}
