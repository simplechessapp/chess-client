import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece, isOutOfBounds } from "./checks/cellChecks";
import { areSameColor } from "./checks/pieceChecks";

export function getAllKnightMoves(pieces: Piece[], knight: Piece) {
    const validMoves: Coordinates[] = [];

    for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {

            // Skip the iteration if move is not L-shaped
            if (Math.abs(x) + Math.abs(y) !== 3) continue;

            const move: Coordinates = {
                x: knight.coordinates.x + x,
                y: knight.coordinates.y + y
            }

            if (isOutOfBounds(move)) continue;

            const piece = getPiece(pieces, move);

            if (piece && areSameColor(knight, piece)) continue;

            validMoves.push(move);
        }
    }

    return validMoves;
}