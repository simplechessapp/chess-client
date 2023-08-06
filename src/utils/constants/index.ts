import { ColorEnum, PieceEnum } from "../enums";
import { PiecePosition } from "../types/PiecePosition.type";

export const initialBoard : PiecePosition[] = [
    { piece: PieceEnum.ROOK, color: ColorEnum.WHITE, x: 0, y: 0 },
    { piece: PieceEnum.KNIGHT, color: ColorEnum.WHITE, x: 1, y: 0 },
    { piece: PieceEnum.BISHOP, color: ColorEnum.WHITE, x: 2, y: 0 },
    { piece: PieceEnum.QUEEN, color: ColorEnum.WHITE, x: 3, y: 0 },
    { piece: PieceEnum.KING, color: ColorEnum.WHITE, x: 4, y: 0 },
    { piece: PieceEnum.BISHOP, color: ColorEnum.WHITE, x: 5, y: 0 },
    { piece: PieceEnum.KNIGHT, color: ColorEnum.WHITE, x: 6, y: 0 },
    { piece: PieceEnum.ROOK, color: ColorEnum.WHITE, x: 7, y: 0 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 0, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 1, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 2, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 3, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 4, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 5, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 6, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.WHITE, x: 7, y: 1 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 0, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 1, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 2, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 3, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 4, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 5, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 6, y: 6 },
    { piece: PieceEnum.PAWN, color: ColorEnum.BLACK, x: 7, y: 6 },
    { piece: PieceEnum.ROOK, color: ColorEnum.BLACK, x: 0, y: 7 },
    { piece: PieceEnum.KNIGHT, color: ColorEnum.BLACK, x: 1, y: 7 },
    { piece: PieceEnum.BISHOP, color: ColorEnum.BLACK, x: 2, y: 7 },
    { piece: PieceEnum.QUEEN, color: ColorEnum.BLACK, x: 3, y: 7 },
    { piece: PieceEnum.KING, color: ColorEnum.BLACK, x: 4, y: 7 },
    { piece: PieceEnum.BISHOP, color: ColorEnum.BLACK, x: 5, y: 7 },
    { piece: PieceEnum.KNIGHT, color: ColorEnum.BLACK, x: 6, y: 7 },
    { piece: PieceEnum.ROOK, color: ColorEnum.BLACK, x: 7, y: 7 },
];

export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];