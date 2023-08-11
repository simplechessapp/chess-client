import { Board } from "@/models/Board";
import { ColorEnum, PieceEnum } from "../enums";
import { PiecePosition } from "../types/PiecePosition.type";
import { Piece } from "@/models/Piece";
import { Coordinates } from "@/models/Coordinates";

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

export const initialBoard2: Board = new Board(
    [
        new Piece(new Coordinates(0, 0), ColorEnum.WHITE, PieceEnum.ROOK),
        new Piece(new Coordinates(1, 0), ColorEnum.WHITE, PieceEnum.KNIGHT),
        new Piece(new Coordinates(2, 0), ColorEnum.WHITE, PieceEnum.BISHOP),
        new Piece(new Coordinates(3, 0), ColorEnum.WHITE, PieceEnum.QUEEN),
        new Piece(new Coordinates(4, 0), ColorEnum.WHITE, PieceEnum.KING),
        new Piece(new Coordinates(5, 0), ColorEnum.WHITE, PieceEnum.BISHOP),
        new Piece(new Coordinates(6, 0), ColorEnum.WHITE, PieceEnum.KNIGHT),
        new Piece(new Coordinates(7, 0), ColorEnum.WHITE, PieceEnum.ROOK),
        new Piece(new Coordinates(0, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(1, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(2, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(3, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(4, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(5, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(6, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(7, 1), ColorEnum.WHITE, PieceEnum.PAWN),
        new Piece(new Coordinates(0, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(1, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(2, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(3, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(4, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(5, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(6, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(7, 6), ColorEnum.BLACK, PieceEnum.PAWN),
        new Piece(new Coordinates(0, 7), ColorEnum.BLACK, PieceEnum.ROOK),
        new Piece(new Coordinates(1, 7), ColorEnum.BLACK, PieceEnum.KNIGHT),
        new Piece(new Coordinates(2, 7), ColorEnum.BLACK, PieceEnum.BISHOP),
        new Piece(new Coordinates(3, 7), ColorEnum.BLACK, PieceEnum.QUEEN),
        new Piece(new Coordinates(4, 7), ColorEnum.BLACK, PieceEnum.KING),
        new Piece(new Coordinates(5, 7), ColorEnum.BLACK, PieceEnum.BISHOP),
        new Piece(new Coordinates(6, 7), ColorEnum.BLACK, PieceEnum.KNIGHT),
        new Piece(new Coordinates(7, 7), ColorEnum.BLACK, PieceEnum.ROOK),
    ]
)

export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];