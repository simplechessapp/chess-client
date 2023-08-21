import { Board } from "@/models/Board";
import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";

export function getPiece(board: Board, coordinates: Coordinates): Piece | null {
  return (
    board.pieces.find(
      (p) =>
        p.coordinates.x === coordinates.x && p.coordinates.y === coordinates.y
    ) || null
  );
}

export function deletePiece(board: Board, coordinates: Coordinates): Board {
  return {
    ...board,
    pieces: board.pieces.filter(
      (p) =>
        p.coordinates.x !== coordinates.x || p.coordinates.y !== coordinates.y
    ),
  };
}

export function hasPiece(board: Board, coordinates: Coordinates): boolean {
  return board.pieces.some(
    (p) =>
      p.coordinates.x === coordinates.x && p.coordinates.y === coordinates.y
  );
}

export function areSameColor(piece1: Piece, piece2: Piece): boolean {
  return piece1.color === piece2.color;
}

export function areSameCoordinates(
  coordinates1: Coordinates,
  coordinates2: Coordinates
): boolean {
  return coordinates1.x === coordinates2.x && coordinates1.y === coordinates2.y;
}

export function isSamePiece(piece1: Piece, piece2: Piece): boolean {
  return (
    piece1.piece === piece2.piece &&
    piece1.color === piece2.color &&
    areSameCoordinates(piece1.coordinates, piece2.coordinates)
  );
}