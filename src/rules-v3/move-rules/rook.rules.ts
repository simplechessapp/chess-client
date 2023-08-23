import { Board } from "@/models/Board";
import { MoveInfo } from "@/models/MoveInfo";
import { Piece } from "@/models/Piece";
import { areSameColor, getPiece, isOutOfBounds } from "../board-utils";
import { Coordinates } from "@/models/Coordinates";

export function getAllRookMoves(board: Board, rook: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ];

  for (const direction of directions) {
    let move: Coordinates = {
      x: rook.coordinates.x + direction.x,
      y: rook.coordinates.y + direction.y,
    };

    while (!isOutOfBounds(move)) {
      const piece = getPiece(board, move);

      if (piece) {
        if (areSameColor(rook, piece)) break;

        validMoves.push({
          dest: move,
          capture: true,
        });
        break;
      }

      validMoves.push({
        dest: move,
      });
      move = {
        x: move.x + direction.x,
        y: move.y + direction.y,
      };
    }
  }

  return validMoves;
}
