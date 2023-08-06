import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";

export class Rules {

    public isValidMove(board: PiecePosition[], pieceStart: PieceCoordinates, pieceEnd: PieceCoordinates) {
        console.log("pieceStart", pieceStart);
        if (board.find(piece => piece.x === pieceStart.x && piece.y === pieceStart.y)?.piece === PieceEnum.PAWN) {

            // check for valid pawn move
            if (board.find(piece => piece.x === pieceStart.x && piece.y === pieceStart.y)?.color === ColorEnum.WHITE) {
                if (pieceStart.y === 1) {
                    if ((pieceEnd.y === pieceStart.y + 1 || pieceEnd.y === pieceStart.y + 2) && pieceEnd.x === pieceStart.x) {
                        return true;
                    }
                } else {
                    if (pieceEnd.y === pieceStart.y + 1 && pieceEnd.x === pieceStart.x) {
                        return true;
                    }
                }
            } else {
                if (pieceStart.y === 6) {
                    if ((pieceEnd.y === pieceStart.y - 1 || pieceEnd.y === pieceStart.y - 2) && pieceEnd.x === pieceStart.x) {
                        return true;
                    }
                } else {
                    if (pieceEnd.y === pieceStart.y - 1 && pieceEnd.x === pieceStart.x) {
                        return true;
                    }
                }
            }
        }
        
        return false;
    }
        

}