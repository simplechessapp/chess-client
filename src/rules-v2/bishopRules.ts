import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece, isOutOfBounds } from "./checks/cellChecks";
import { areSameColor } from "./checks/pieceChecks";

export function getAllBishopMoves(pieces: Piece[], bishop: Piece) {
  const validMoves: Coordinates[] = [];

  const directions = [
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
  ];

  for (const direction of directions) {
    let move: Coordinates = {
      x: bishop.coordinates.x + direction.x,
      y: bishop.coordinates.y + direction.y,
    };

    while (!isOutOfBounds(move)) {
      const piece = getPiece(pieces, move);

      if (piece) {
        if (areSameColor(bishop, piece)) break;

        validMoves.push(move);
        break;
      }

      validMoves.push(move);
      move = {
        x: move.x + direction.x,
        y: move.y + direction.y,
      };
    }
  }

  return validMoves;
}
