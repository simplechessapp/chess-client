import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";

export function hasPiece(pieces: Piece[], coordinates: Coordinates) {
    return pieces.some((piece) => piece.sameCoordinates(coordinates));
}

export function getPiece(pieces: Piece[], coordinates: Coordinates) {
    return pieces.find((piece) => piece.sameCoordinates(coordinates));
}

