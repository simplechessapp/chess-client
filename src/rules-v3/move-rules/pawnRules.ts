import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { hasPiece, areSameColor, isSamePiece } from "../board-utils";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { getPiece } from "../board-utils";
import { Board } from "@/models/Board";
import { MoveInfo } from "@/models/MoveInfo";

export function getAllPawnMoves(board: Board, pawn: Piece): MoveInfo[] {
  const validCaptures = getAllPawnCaptures(board, pawn);
  const validRegularMoves = getAllRegularPawnMoves(board, pawn);
  const validEnPassantCaptures = getAllEnPassantCaptures(board, pawn);

  return [...validCaptures, ...validRegularMoves, ...validEnPassantCaptures];
}

export function getAllRegularPawnMoves(board: Board, pawn: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  const specialMove = pawn.color === ColorEnum.WHITE ? 1 : 6;
  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;

  const regularMove: Coordinates = {
    x: pawn.coordinates.x,
    y: pawn.coordinates.y + moveDirection,
  };

  if (!hasPiece(board, regularMove)) {
    validMoves.push({
        dest: regularMove,
    });
  }

  const specialMoveCoordinates: Coordinates = {
    x: pawn.coordinates.x,
    y: pawn.coordinates.y + moveDirection * 2,
  };

  if (
    pawn.coordinates.y === specialMove &&
    !hasPiece(board, specialMoveCoordinates)
  ) {
    validMoves.push({
        dest: specialMoveCoordinates,
    });
  }

  return validMoves;
}

export function getAllPawnCaptures(board: Board, pawn: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;

  const captureRight: Coordinates = {
    x: pawn.coordinates.x + 1,
    y: pawn.coordinates.y + moveDirection,
  };
  const captureLeft: Coordinates = {
    x: pawn.coordinates.x - 1,
    y: pawn.coordinates.y + moveDirection,
  };

  const captureRightPiece = getPiece(board, captureRight);
  const captureLeftPiece = getPiece(board, captureLeft);

  if (captureRightPiece && !areSameColor(pawn, captureRightPiece)) {
    validMoves.push({
      dest: captureRight,
      capture: true,
    });
  }

  if (captureLeftPiece && !areSameColor(pawn, captureLeftPiece)) {
    validMoves.push({
      dest: captureLeft,
      capture: true,
    });
  }

  return validMoves;
}

export function getAllEnPassantCaptures(board: Board, pawn: Piece): MoveInfo[] {
  const validMoves: MoveInfo[] = [];

  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;
  const enPassantPawn = board.enPassantPawn;

  if (!enPassantPawn) {
    return validMoves;
  }

  const pawnOnLeft: Coordinates = {
    x: pawn.coordinates.x - 1,
    y: pawn.coordinates.y,
  };

  const pawnOnRight: Coordinates = {
    x: pawn.coordinates.x + 1,
    y: pawn.coordinates.y,
  };

  const pawnOnLeftPiece = getPiece(board, pawnOnLeft);
  const pawnOnRightPiece = getPiece(board, pawnOnRight);

  if (isSamePiece(enPassantPawn, pawnOnLeftPiece!)) {
    const captureLeft: MoveInfo = {
      dest: {
        x: pawn.coordinates.x - 1,
        y: pawn.coordinates.y + moveDirection,
      },
      enPassant: true,
    };
    validMoves.push(captureLeft);
  }

  if (isSamePiece(enPassantPawn, pawnOnRightPiece!)) {
    const captureRight: MoveInfo = {
      dest: {
        x: pawn.coordinates.x + 1,
        y: pawn.coordinates.y + moveDirection,
      },
      enPassant: true,
    };
    validMoves.push(captureRight);
  }

  return validMoves;
}
