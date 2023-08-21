import { Board } from "@/models/Board";
import { Coordinates } from "@/models/Coordinates";
import { MoveInfo } from "@/models/MoveInfo";
import { Piece } from "@/models/Piece";
import { getPiece } from "../board-utils";

export function getAllKnightMoves(board: Board, knight: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    for (let j = -2; j <= 2; j++) {
      if (Math.abs(i) + Math.abs(j) !== 3) continue;
      const move: Coordinates = {
        x: knight.coordinates.x + i,
        y: knight.coordinates.y + j,
      };
      const pieceOnMove = getPiece(board, move);
      if (!pieceOnMove) {
        validMoves.push({
          dest: move,
        });
        continue;
      }
      if (pieceOnMove.color !== knight.color) {
        validMoves.push({
          dest: move,
          capture: true,
        });
      }
    }
  }

  return validMoves;
}
