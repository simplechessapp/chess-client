import { PiecePosition } from "../types/PiecePosition.type";

export const initialBoard : PiecePosition[] = [
    { piece: "wR", x: 0, y: 0 },
    { piece: "wN", x: 1, y: 0 },
    { piece: "wB", x: 2, y: 0 },
    { piece: "wQ", x: 3, y: 0 },
    { piece: "wK", x: 4, y: 0 },
    { piece: "wB", x: 5, y: 0 },
    { piece: "wN", x: 6, y: 0 },
    { piece: "wR", x: 7, y: 0 },
    { piece: "wP", x: 0, y: 1 },
    { piece: "wP", x: 1, y: 1 },
    { piece: "wP", x: 2, y: 1 },
    { piece: "wP", x: 3, y: 1 },
    { piece: "wP", x: 4, y: 1 },
    { piece: "wP", x: 5, y: 1 },
    { piece: "wP", x: 6, y: 1 },
    { piece: "wP", x: 7, y: 1 },
    { piece: "bR", x: 0, y: 7 },
    { piece: "bN", x: 1, y: 7 },
    { piece: "bB", x: 2, y: 7 },
    { piece: "bQ", x: 3, y: 7 },
    { piece: "bK", x: 4, y: 7 },
    { piece: "bB", x: 5, y: 7 },
    { piece: "bN", x: 6, y: 7 },
    { piece: "bR", x: 7, y: 7 },
    { piece: "bP", x: 0, y: 6 },
    { piece: "bP", x: 1, y: 6 },
    { piece: "bP", x: 2, y: 6 },
    { piece: "bP", x: 3, y: 6 },
    { piece: "bP", x: 4, y: 6 },
    { piece: "bP", x: 5, y: 6 },
    { piece: "bP", x: 6, y: 6 },
    { piece: "bP", x: 7, y: 6 },
];

export const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];