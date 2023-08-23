import { Board } from "@/models/Board";
import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import {
  areSameCoordinates,
  getPiece,
  isCellUnderAttack,
  isSamePiece,
} from "./board.utils";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import {
  getAllEnPassantCaptures,
  getAllPawnMoves,
} from "../move-rules/pawn.rules";
import { MoveInfo } from "@/models/MoveInfo";
import { getAllKnightMoves } from "../move-rules/knight.rules";
import { getAllBishopMoves } from "../move-rules/bishop.rules";
import { getAllRookMoves } from "../move-rules/rook.rules";
import { getAllQueenMoves } from "../move-rules/queen.rules";
import { getAllKingMoves } from "../move-rules/king.rules";

export function doCastling(
  board: Board,
  king: Piece,
  dest: Coordinates
): Board {
  const rook = getPiece(board, { x: dest.x === 2 ? 0 : 7, y: dest.y })!;
  const newRook = {
    ...rook,
    coordinates: { x: dest.x === 2 ? 3 : 5, y: dest.y },
    hasMoved: true,
  };
  const newKing = { ...king, coordinates: dest, hasMoved: true };
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
      .map((p) =>
        isSamePiece(p, pawn) ? { ...p, coordinates: dest, hasMoved: true } : p
      ),
  };
}

export function doCapture(
  board: Board,
  piece: Piece,
  dest: Coordinates
): Board {
  const capturedPiece = getPiece(board, dest)!;
  return {
    ...board,
    pieces: board.pieces
      .filter((p) => !isSamePiece(p, capturedPiece))
      .map((p) => (isSamePiece(p, piece) ? { ...p, coordinates: dest } : p)),
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
    case PieceEnum.BISHOP:
      return getAllBishopMoves(board, piece);
    case PieceEnum.ROOK:
      return getAllRookMoves(board, piece);
    case PieceEnum.QUEEN:
      return getAllQueenMoves(board, piece);
    case PieceEnum.KING:
      return getAllKingMoves(board, piece);
    default:
      return [];
  }
}

export function changePosition(
  board: Board,
  piece: Piece,
  move: MoveInfo
): Board {
  const newBoard = structuredClone(board);
  newBoard.turn =
    newBoard.turn === ColorEnum.WHITE ? ColorEnum.BLACK : ColorEnum.WHITE;
  newBoard.amountOfMoves++;

  if (move.capture) {
    return doCapture(newBoard, piece, move.dest);
  }

  if (move.castling) {
    return doCastling(newBoard, piece, move.dest);
  }

  if (move.enPassant) {
    return doEnPassant(newBoard, piece, move.dest);
  }

  const returnBoard = doMove(newBoard, piece, move.dest);

  if (move.doublePawn) {
    returnBoard.enPassantPawn = getPiece(returnBoard, move.dest)!;
  }

  return returnBoard;
}

export function getValidatedMoves(board: Board, piece: Piece): MoveInfo[] {
  const moves = getValidMoves(board, piece);
  return validateMoves(board, piece, moves);
}

export function isKingInCheck(board: Board, color: ColorEnum): boolean {
  const king = board.pieces.find(
    (p) => p.piece === PieceEnum.KING && p.color === color
  )!;

  return isCellUnderAttack(board, king.coordinates, color);
}

export function validateMoves(
  board: Board,
  piece: Piece,
  moves: MoveInfo[]
): MoveInfo[] {
  return moves.filter((m) => {
    if (m.castling) {
      const castlingDirection = m.dest.x === 2 ? -1 : 1;
      const checkCells = [
        { x: piece.coordinates.x + castlingDirection, y: piece.coordinates.y },
        {
          x: piece.coordinates.x + castlingDirection * 2,
          y: piece.coordinates.y,
        },
      ];

      return (
        !isKingInCheck(board, board.turn) &&
        !checkCells.some((c) => isCellUnderAttack(board, c, board.turn))
      );
    }

    const newBoard = changePosition(board, piece, m);
    return !isKingInCheck(newBoard, board.turn);
  });
}

export function performMove(
  board: Board,
  start: Coordinates,
  dest: Coordinates
): Board | undefined {
  const piece = getPiece(board, start)!;
  const validMoves = getValidatedMoves(board, piece);
  const validMove = validMoves.find(
    (m) => m.dest.x === dest.x && m.dest.y === dest.y
  );

  if (!validMove) {
    return undefined;
  }

  return changePosition(board, piece, validMove);
}
