import { Board } from "@/models/Board";
import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getPiece, isSamePiece } from "./board.utils";
import { PieceEnum } from "@/utils/enums";
import { getAllPawnMoves } from "../move-rules/pawn.rules";
import { MoveInfo } from "@/models/MoveInfo";
import { getAllKnightMoves } from "../move-rules/knight.rules";

export function doCastling(
  board: Board,
  king: Piece,
  dest: Coordinates
): Board {
  const rook = getPiece(board, { x: dest.x === 2 ? 0 : 7, y: dest.y })!;
  const newRook = {
    ...rook,
    coordinates: { x: dest.x === 2 ? 3 : 5, y: dest.y },
  };
  const newKing = { ...king, coordinates: dest };
  return {
    ...board,
    pieces: board.pieces.map((p) =>
      isSamePiece(p, king) ? newKing : isSamePiece(p, rook) ? newRook : p
    ),
  };
}

export function doEnPassant(
  board: Board,
  pawn: Piece,
  dest: Coordinates
): Board {
  const capturedPawn = getPiece(board, { x: dest.x, y: pawn.coordinates.y })!;

  return {
    ...board,
    pieces: board.pieces
      .filter((p) => !isSamePiece(p, capturedPawn))
      .map((p) => (isSamePiece(p, pawn) ? { ...p, coordinates: dest } : p)),
  };
}

export function doCapture(board: Board, dest: Coordinates): Board {
  const capturedPiece = getPiece(board, dest)!;
  return {
    ...board,
    pieces: board.pieces.filter((p) => !isSamePiece(p, capturedPiece)),
  };
}

export function doMove(board: Board, piece: Piece, dest: Coordinates): Board {
  return {
    ...board,
    pieces: board.pieces.map((p) =>
      isSamePiece(p, piece) ? { ...p, coordinates: dest } : p
    ),
  };
}

export function doPromotion(
  board: Board,
  pawn: Piece,
  dest: Coordinates,
  to: PieceEnum
): Board {
  return {
    ...board,
    pieces: board.pieces
      .filter((p) => !isSamePiece(p, pawn))
      .map((p) =>
        isSamePiece(p, pawn) ? { ...p, coordinates: dest, piece: to } : p
      ),
  };
}

export function getValidMoves(board: Board, piece: Piece): MoveInfo[] {
  switch (piece.piece) {
    case PieceEnum.PAWN:
      return getAllPawnMoves(board, piece);
    case PieceEnum.KNIGHT:
      return getAllKnightMoves(board, piece);
    default:
      return [];
  }
}