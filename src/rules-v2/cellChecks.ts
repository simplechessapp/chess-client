import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";

export function hasPiece(pieces: Piece[], coordinates: Coordinates) {
  return pieces.some(
    (piece) =>
      piece.coordinates.x === coordinates.x &&
      piece.coordinates.y === coordinates.y
  );
}

export function getPiece(pieces: Piece[], coordinates: Coordinates) {
  return pieces.find(
    (piece) =>
      piece.coordinates.x === coordinates.x &&
      piece.coordinates.y === coordinates.y
  );
}

export function isOutOfBounds(coordinates: Coordinates): boolean {
  return (
    coordinates.x < 0 ||
    coordinates.x > 7 ||
    coordinates.y < 0 ||
    coordinates.y > 7
  );
}
