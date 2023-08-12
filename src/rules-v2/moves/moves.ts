import { Board } from "@/models/Board";
import { getPiece } from "../checks/cellChecks";
import { Coordinates } from "@/models/Coordinates";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { getAllPawnMoves } from "../pawnRules";
import { getAllRookMoves } from "../rookRules";
import { getAllKnightMoves } from "../knightRules";
import { getAllBishopMoves } from "../bishopRules";
import { getAllQueenMoves } from "../queenRules";
import { getAllKingMoves, getCastlingMoves } from "../kingRules";
import { isKingInCheck } from "../checks/kingDangerChecks";

export function makeMove(
  board: Board,
  from: Coordinates,
  to: Coordinates
): boolean {
  const fromPiece = getPiece(board.pieces, from);

  if (!fromPiece) {
    return false;
  }
  const validMoves = filterInvalidMoves(
    board,
    fromPiece.coordinates,
    fromPiece.color
  );

  if (!validMoves.some((m) => m.x === to.x && m.y === to.y)) {
    return false;
  }

  transformBoard(board, from, to);
  return true;
}

export function getValidMoves(board: Board, from: Coordinates): Coordinates[] {
  const fromPiece = getPiece(board.pieces, from);

  if (!fromPiece) {
    return [];
  }

  switch (fromPiece.piece) {
    case PieceEnum.PAWN:
      return getAllPawnMoves(board.pieces, fromPiece);
    case PieceEnum.ROOK:
      return getAllRookMoves(board.pieces, fromPiece);
    case PieceEnum.KNIGHT:
      return getAllKnightMoves(board.pieces, fromPiece);
    case PieceEnum.BISHOP:
      return getAllBishopMoves(board.pieces, fromPiece);
    case PieceEnum.QUEEN:
      return getAllQueenMoves(board.pieces, fromPiece);
    case PieceEnum.KING:
      return [
        ...getAllKingMoves(board.pieces, fromPiece),
        ...getCastlingMoves(board.pieces, fromPiece),
      ];
    default:
      return [];
  }
}

export function filterInvalidMoves(
  board: Board,
  from: Coordinates,
  turn: ColorEnum
) {
  const moves = getValidMoves(board, from);

  const validMoves = moves.filter((m) => {
    const newBoard = structuredClone(board);
    transformBoard(newBoard, from, m);
    return !isKingInCheck(newBoard, turn);
  });

  return validMoves;
}

export function transformBoard(
  board: Board,
  from: Coordinates,
  to: Coordinates
) {
  const fromPiece = getPiece(board.pieces, from);

  if (!fromPiece) {
    return false;
  }

  const toPiece = getPiece(board.pieces, to);

  if (fromPiece.piece === PieceEnum.KING) {
    const validCastlingMoves = getCastlingMoves(board.pieces, fromPiece);

    if (validCastlingMoves.some((m) => m.x === to.x && m.y === to.y)) {
      const rookPosition = to.x > fromPiece.coordinates.x ? 7 : 0;

      const rook = board.pieces.find(
        (p) => p.piece === PieceEnum.ROOK && p.coordinates.x === rookPosition
      );

      if (!rook) {
        return false;
      }

      const rookMove = {
        x: to.x > fromPiece.coordinates.x ? to.x - 1 : to.x + 1,
        y: to.y,
      };

      fromPiece.coordinates = to;
      rook.coordinates = rookMove;
      return true;
    }
  }

  if (toPiece) {
    board.pieces = board.pieces.filter(
      (p) => p.coordinates.x !== to.x || p.coordinates.y !== to.y
    );
  }
  fromPiece.coordinates = to;
}
