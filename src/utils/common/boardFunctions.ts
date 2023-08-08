import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "@/utils/types";

export function getPiece(
  board: PiecePosition[],
  coordinates: PieceCoordinates
) : PiecePosition | undefined {
    return board.find(
        (piece) => piece.x === coordinates.x && piece.y === coordinates.y
    );
}

export function hasPiece(board: PiecePosition[], coordinates: PieceCoordinates) {
    return !!getPiece(board, coordinates);
}

export function isOutOfBounds(coordinates: PieceCoordinates) {
    return coordinates.x < 0 || coordinates.x > 7 || coordinates.y < 0 || coordinates.y > 7;
}

export function areSameColor(piece1: PiecePosition, piece2: PiecePosition) {
    return piece1.color === piece2.color;
}



