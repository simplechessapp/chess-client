import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece } from "./cellChecks";

export function getAllRookMoves(pieces: Piece[], rook: Piece) {
    const validMoves: Coordinates[] = [];

    const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
    ];

    for (const direction of directions) {
        let move: Coordinates = new Coordinates(
            rook.coordinates.x + direction.x,
            rook.coordinates.y + direction.y
        );

        while (!move.isOutOfBounds) {
            const piece = getPiece(pieces, move);

            if (piece) {
                if (piece.areSameColor(rook)) break;

                validMoves.push(move);
                break;
            }

            validMoves.push(move);
            move = new Coordinates(
                move.x + direction.x,
                move.y + direction.y
            );
        }
    }

    return validMoves;

}