import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import { isValidPawnMove } from "./";


export function isValidMove(board: PiecePosition[], pieceStart: PieceCoordinates, pieceEnd: PieceCoordinates) {
        console.log("pieceStart", pieceStart);
        const piece = board.find(piece => piece.x === pieceStart.x && piece.y === pieceStart.y);
        if (piece?.piece === PieceEnum.PAWN) {
            return isValidPawnMove(board, pieceStart, pieceEnd);
        }
        return false;
    }
        

