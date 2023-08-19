import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece, isOutOfBounds } from "./checks/cellChecks";
import { PieceEnum } from "@/utils/enums";
import { areSameColor } from "./checks/pieceChecks";

export function getAllKingMoves(pieces: Piece[], king: Piece) {
  const validMoves: Coordinates[] = [];

  for (let x = king.coordinates.x - 1; x <= king.coordinates.x + 1; x++) {
    for (let y = king.coordinates.y - 1; y <= king.coordinates.y + 1; y++) {
      const move: Coordinates = { x, y };
      if(isOutOfBounds(move)) continue;
      const piece = getPiece(pieces, move);

      if (piece) {
        if (areSameColor(piece, king)) continue;

        validMoves.push(move);
        continue;
      }

      validMoves.push(move);
    }
  }

  return validMoves;
}

export function getCastlingMoves(pieces: Piece[], king: Piece) {
  const validMoves: Coordinates[] = [];

  if (king.hasMoved) return validMoves;

  const rooks = pieces.filter((p) => p.piece === PieceEnum.ROOK && !p.hasMoved && p.color === king.color);
  for (const rook of rooks) {
    if (rook.coordinates.x > king.coordinates.x) {
      const move: Coordinates = {
        x: king.coordinates.x + 2,
        y: king.coordinates.y,
      };
      for (let i = king.coordinates.x + 1; i < rook.coordinates.x; i++) {
        const piece = getPiece(pieces, { x: i, y: king.coordinates.y });
        if (piece) return validMoves;
      }

      validMoves.push(move);
    } else {
      const move: Coordinates = {
        x: king.coordinates.x - 2,
        y: king.coordinates.y,
      };
      for (let i = king.coordinates.x - 1; i > rook.coordinates.x; i--) {
        const piece = getPiece(pieces, { x: i, y: king.coordinates.y });
        if (piece) return validMoves;
      }
      const piece = getPiece(pieces, move);

      if (piece) continue;

      validMoves.push(move);
    }
  }

  return validMoves;
}
