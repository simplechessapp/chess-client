import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece, isOutOfBounds } from "./cellChecks";
import { areSameColor } from "./pieceChecks";

export function getAllRookMoves(pieces: Piece[], rook: Piece) {
    const validMoves: Coordinates[] = [];

    const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
    ];

    for (const direction of directions) {
        let move: Coordinates = {
            x: rook.coordinates.x + direction.x,
            y: rook.coordinates.y + direction.y
        }

        while (!isOutOfBounds(move)) {
            const piece = getPiece(pieces, move);

            if (piece) {
                if (areSameColor(rook, piece)) break;

                validMoves.push(move);
                break;
            }

            validMoves.push(move);
            move = {
                x: move.x + direction.x,
                y: move.y + direction.y
            }
        }
    }

    return validMoves;

}