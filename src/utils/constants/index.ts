import { Board } from "@/models/Board";
import { ColorEnum, PieceEnum } from "../enums";

export const initialBoard: Board = {
    pieces: [
        {coordinates: {x: 0, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.ROOK},
        {coordinates: {x: 1, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KNIGHT},
        {coordinates: {x: 2, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.BISHOP},
        {coordinates: {x: 3, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.QUEEN},
        {coordinates: {x: 4, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KING},
        {coordinates: {x: 5, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.BISHOP},
        {coordinates: {x: 6, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.KNIGHT},
        {coordinates: {x: 7, y: 0}, color: ColorEnum.WHITE, piece: PieceEnum.ROOK},
        {coordinates: {x: 0, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 1, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 2, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 3, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 4, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 5, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 6, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 7, y: 1}, color: ColorEnum.WHITE, piece: PieceEnum.PAWN},
        {coordinates: {x: 0, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 1, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 2, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 3, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 4, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 5, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 6, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 7, y: 6}, color: ColorEnum.BLACK, piece: PieceEnum.PAWN},
        {coordinates: {x: 0, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.ROOK},
        {coordinates: {x: 1, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KNIGHT},
        {coordinates: {x: 2, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.BISHOP},
        {coordinates: {x: 3, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.QUEEN},
        {coordinates: {x: 4, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KING},
        {coordinates: {x: 5, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.BISHOP},
        {coordinates: {x: 6, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.KNIGHT},
        {coordinates: {x: 7, y: 7}, color: ColorEnum.BLACK, piece: PieceEnum.ROOK},
    ],
}


export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];