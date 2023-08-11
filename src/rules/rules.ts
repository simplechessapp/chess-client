import { ColorEnum, PieceEnum } from "@/utils/enums";
import { PiecePosition, PieceCoordinates } from "../utils/types";
import {
  getAllPawnMoves,
  isValidBishopMove,
  isValidKingMove,
  isValidKnightMove,
  isValidPawnMove,
  isValidQueenMove,
  isValidRookMove,
} from "./";
import { areSameColor, getPiece, isOutOfBounds } from "@/utils/common/boardFunctions";

export function isValidMove(
  board: PiecePosition[],
  piece: PiecePosition,
  pieceDrop: PieceCoordinates
) {

  if (isOutOfBounds(pieceDrop)) return false;

  // if dropped in same spot
  if (pieceDrop.x === piece.x && pieceDrop.y === piece.y) {
    return false;
  }

  if (piece?.piece === PieceEnum.PAWN) {
    return isValidPawnMove(board, piece, pieceDrop);
  }
  if (piece?.piece === PieceEnum.KNIGHT) {
    return isValidKnightMove(board, piece, pieceDrop);
  }
  if (piece?.piece === PieceEnum.BISHOP) {
    return isValidBishopMove(board, piece, pieceDrop);
  }
  if (piece?.piece === PieceEnum.ROOK) {
    return isValidRookMove(board, piece, pieceDrop);
  }
  if (piece?.piece === PieceEnum.QUEEN) {
    return isValidQueenMove(board, piece, pieceDrop);
  }
  if (piece?.piece === PieceEnum.KING) {
    return isValidKingMove(board, piece, pieceDrop);
  }
  return false;
}

export function makeMove(
  board: PiecePosition[],
  pieceStart: PieceCoordinates,
  pieceEnd: PieceCoordinates
) {
  const piece = board.find(
    (piece) => piece.x === pieceStart.x && piece.y === pieceStart.y
  );
  if (!piece) return [...board];

  // check if player is castling
  if (
    piece.piece === PieceEnum.KING &&
    Math.abs(pieceEnd.x - pieceStart.x) === 2
  ) {
    return castle(board, piece, pieceEnd);
  }

  const capturedPiece = getPiece(board, pieceEnd);
  
  // if there is no piece at end position, move piece to end position
  if (!capturedPiece) {
    piece.x = pieceEnd.x;
    piece.y = pieceEnd.y;
    return [...board];
  }

  // if there is a piece at end position, check colors
  if (areSameColor(piece, capturedPiece)) {
    return [...board];
  }

  // if captured, return new board with captured piece removed and moving piece moved

  const newBoard = board.filter(
    (piece) => piece.x !== pieceEnd.x || piece.y !== pieceEnd.y
  );
  piece.x = pieceEnd.x;
  piece.y = pieceEnd.y;
  return [...newBoard];
}

export function castle(
  board: PiecePosition[],
  king: PiecePosition,
  pieceDrop: PieceCoordinates
) {
  const rookPosition =
    pieceDrop.x > king.x
      ? { x: 7, y: king.y }
      : { x: 0, y: king.y };

  const rook = getPiece(board, rookPosition);

  if (!rook) return [...board];

  rook.x = pieceDrop.x > king.x ? 5 : 3;
  king.x = pieceDrop.x > king.x ? 6 : 2;

  return [...board];
}

export function getValidMoves(board: PiecePosition[], piece: PiecePosition) {
  const validMoves: PieceCoordinates[] = [];

  if (piece.piece === PieceEnum.PAWN) {
    return getAllPawnMoves(board, piece);
  }

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      const pieceDrop = { x, y };

      if (isValidMove(board, piece, pieceDrop)) {
        validMoves.push(pieceDrop);
      }
    }
  }

  return validMoves;
}
