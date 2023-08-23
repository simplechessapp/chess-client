import { Board } from "@/models/Board";
import { Coordinates } from "@/models/Coordinates";
import { MoveInfo } from "@/models/MoveInfo";
import { Piece } from "@/models/Piece";
import { areSameColor, getPiece, hasPiece, isCellUnderAttack, isOutOfBounds } from "../board-utils";

export function getAllKingMoves(board: Board, king: Piece): MoveInfo[] {
    return [
        ...getAllRegularKingMoves(board, king),
        ...getCastlingMoves(board, king),
    ];
}

export function getAllRegularKingMoves(board: Board, king: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  for (let x = king.coordinates.x - 1; x <= king.coordinates.x + 1; x++) {
    for (let y = king.coordinates.y - 1; y <= king.coordinates.y + 1; y++) {
      const move: Coordinates = { x, y };
      if (isOutOfBounds(move)) continue;
      const piece = getPiece(board, move);

      if (piece) {
        if (areSameColor(piece, king)) continue;

        validMoves.push({
          dest: move,
          capture: true,
        });
        continue;
      }

      validMoves.push({
        dest: move,
      });
    }
  }

  return validMoves;
}

export function getCastlingMoves(board: Board, king: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  if (king.hasMoved) {
    return validMoves;
  }

  const kingSideRook = getPiece(board, {
    x: 7,
    y: king.coordinates.y,
  });

  const queenSideRook = getPiece(board, {
    x: 0,
    y: king.coordinates.y,
  });

  if (kingSideRook) {
    if (
      !hasPiece(board, { x: 5, y: king.coordinates.y }) &&
      !hasPiece(board, { x: 6, y: king.coordinates.y })
    ) {
      validMoves.push({
        dest: { x: 6, y: king.coordinates.y },
        castling: true,
      });
    }
  }

  if (queenSideRook) {
    if (
      !hasPiece(board, { x: 1, y: king.coordinates.y }) &&
      !hasPiece(board, { x: 2, y: king.coordinates.y }) &&
      !hasPiece(board, { x: 3, y: king.coordinates.y }) 
    ) {
      validMoves.push({
        dest: { x: 2, y: king.coordinates.y },
        castling: true,
      });
    }
  }

  return validMoves;
}
