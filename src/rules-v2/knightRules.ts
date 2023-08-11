import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece } from "./cellChecks";

export function getAllKnightMoves(pieces: Piece[], knight: Piece) {
    const validMoves: Coordinates[] = [];

    for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {

            // Skip the iteration if move is not L-shaped
            if (Math.abs(x) + Math.abs(y) !== 3) continue;

            const move: Coordinates = new Coordinates(
                knight.coordinates.x + x,
                knight.coordinates.y + y
            );

            if (move.isOutOfBounds) continue;

            const piece = getPiece(pieces, move);

            if (piece && piece.areSameColor(knight)) continue;

            validMoves.push(move);
        }
    }

    return validMoves;
}