import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece } from "./cellChecks";
import { PieceEnum } from "@/utils/enums";
import { areSameColor } from "./pieceChecks";

export function getAllKingRules(pieces: Piece[], king: Piece) {
  const validMoves: Coordinates[] = [];

  for (let x = king.coordinates.x - 1; x <= king.coordinates.x + 1; x++) {
    for (let y = king.coordinates.y - 1; y <= king.coordinates.y + 1; y++) {
      const move: Coordinates = { x, y };
      const piece = getPiece(pieces, move);

      if (piece) {
        if (areSameColor(piece, king)) continue;

        validMoves.push(move);
        continue;
      }

      validMoves.push(move);
    }
  }
}

export function getCastlingMoves(pieces: Piece[], king: Piece) {
  const validMoves: Coordinates[] = [];

  if (king.hasMoved) return validMoves;

  const rooks = pieces.filter((p) => p.piece === PieceEnum.ROOK && !p.hasMoved);

  for (const rook of rooks) {
    if (rook.coordinates.x > king.coordinates.x) {
      const move: Coordinates = {
        x: king.coordinates.x + 2,
        y: king.coordinates.y,
      };
      const piece = getPiece(pieces, move);

      if (piece) continue;

      validMoves.push(move);
    } else {
      const move: Coordinates = {
        x: king.coordinates.x - 2,
        y: king.coordinates.y,
      };
      const piece = getPiece(pieces, move);

      if (piece) continue;

      validMoves.push(move);
    }
  }
}
