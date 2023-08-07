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
        
export function makeMove(board: PiecePosition[], pieceStart: PieceCoordinates, pieceEnd: PieceCoordinates) {
    const piece = board.find(piece => piece.x === pieceStart.x && piece.y === pieceStart.y);
    if (!piece) return [...board];

    const capturedPiece = board.find(piece => piece.x === pieceEnd.x && piece.y === pieceEnd.y);
    // if there is no piece at end position, move piece to end position
    if (!capturedPiece) {
        piece.x = pieceEnd.x;
        piece.y = pieceEnd.y;
        return [...board];
    }

    // if there is a piece at end position, check colors
    if (piece.color === capturedPiece.color) {
        return [...board];
    }
   
    // if captured, return new board with captured piece removed and moving piece moved

    const newBoard = board.filter(piece => piece.x !== pieceEnd.x || piece.y !== pieceEnd.y);
    piece.x = pieceEnd.x;
    piece.y = pieceEnd.y;
    return [...newBoard];
}