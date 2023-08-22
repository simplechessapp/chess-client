import { Board } from "@/models/Board";
import { MoveInfo } from "@/models/MoveInfo";
import { Piece } from "@/models/Piece";

import { getAllRookMoves } from "./rook.rules";
import { getAllBishopMoves } from "./bishop.rules";

export function getAllQueenMoves(board: Board, rook: Piece): MoveInfo[] {
  return [
    ...getAllRookMoves(board, rook),
    ...getAllBishopMoves(board, rook)
  ];
}