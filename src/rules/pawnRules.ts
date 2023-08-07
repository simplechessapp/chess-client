import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export function isValidPawnMove(board: PiecePosition[], pieceStart: PieceCoordinates, pieceEnd: PieceCoordinates) {
        const pawn = board.find(piece => piece.x === pieceStart.x && piece.y === pieceStart.y);

        if (pawn?.piece !== PieceEnum.PAWN) {
            return false;
        }

        const pawnColor = pawn?.color;
        const pawnSpecialMove = pawnColor === ColorEnum.WHITE ? 1 : 6;
        const moveDirection = pawnColor === ColorEnum.WHITE ? 1 : -1;

        if (pieceStart.y === pawnSpecialMove) {
            if (
                (pieceEnd.y === pieceStart.y + moveDirection 
                || pieceEnd.y === pieceStart.y + (moveDirection * 2)) 
                && pieceEnd.x === pieceStart.x
            ) {
                return true;
            }
        } else {
            if (pieceEnd.y === pieceStart.y + moveDirection && pieceEnd.x === pieceStart.x) {
                return true;
            }
        }

        return false;
    }
