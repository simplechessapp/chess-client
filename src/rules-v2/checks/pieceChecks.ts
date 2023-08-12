import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { PieceEnum } from "@/utils/enums";

export function isKing(piece: Piece): boolean {
  return piece.piece === PieceEnum.KING;
}

export function isQueen(piece: Piece): boolean {
  return piece.piece === PieceEnum.QUEEN;
}

export function isRook(piece: Piece): boolean {
  return piece.piece === PieceEnum.ROOK;
}

export function isBishop(piece: Piece): boolean {
  return piece.piece === PieceEnum.BISHOP;
}

export function isKnight(piece: Piece): boolean {
  return piece.piece === PieceEnum.KNIGHT;
}

export function isPawn(piece: Piece): boolean {
  return piece.piece === PieceEnum.PAWN;
}

export function areSameColor(piece1: Piece, piece2: Piece): boolean {
  return piece1.color === piece2.color;
}

