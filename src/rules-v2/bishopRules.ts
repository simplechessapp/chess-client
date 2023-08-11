import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece } from "./cellChecks";

export function getAllBishopMoves(pieces: Piece[], bishop: Piece) {
    const validMoves: Coordinates[] = [];

    const directions = [
        { x: 1, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
        { x: 1, y: -1 },
    ];

    for (const direction of directions) {
        let move: Coordinates = new Coordinates(
            bishop.coordinates.x + direction.x,
            bishop.coordinates.y + direction.y
        );

        while (!move.isOutOfBounds) {
            const piece = getPiece(pieces, move);

            if (piece) {
                if (piece.areSameColor(bishop)) break;

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