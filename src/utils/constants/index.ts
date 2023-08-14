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

export const initialBoard2: Board = {
    pieces: [
        {coordinates: {x: 0, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.ROOK, hasMoved: false},
        {coordinates: {x: 1, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KNIGHT, hasMoved: false},
        {coordinates: {x: 2, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.BISHOP, hasMoved: false},
        {coordinates: {x: 3, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.QUEEN, hasMoved: false},
        {coordinates: {x: 4, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KING, hasMoved: false},
        {coordinates: {x: 5, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.BISHOP, hasMoved: false},
        {coordinates: {x: 6, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KNIGHT, hasMoved: false},
        {coordinates: {x: 7, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.ROOK, hasMoved: false},
        {coordinates: {x: 0, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 1, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 2, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 3, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 4, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 5, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 6, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 7, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 0, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 1, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 2, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 3, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 4, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 5, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 6, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 7, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN, hasMoved: false},
        {coordinates: {x: 0, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.ROOK, hasMoved: false},
        {coordinates: {x: 1, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KNIGHT, hasMoved: false},
        {coordinates: {x: 2, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.BISHOP, hasMoved: false},
        {coordinates: {x: 3, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.QUEEN, hasMoved: false},
        {coordinates: {x: 4, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KING, hasMoved: false},
        {coordinates: {x: 5, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.BISHOP, hasMoved: false},
        {coordinates: {x: 6, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KNIGHT, hasMoved: false},
        {coordinates: {x: 7, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.ROOK, hasMoved: false},
    ],
    amountOfMoves: 1
}


export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];