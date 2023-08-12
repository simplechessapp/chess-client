import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { ColorEnum } from "@/utils/enums";
import { getPiece, hasPiece } from "./checks/cellChecks";
import { areSameColor } from "./checks/pieceChecks";

export function getAllPawnMoves(pieces: Piece[], pawn: Piece) {
  const validMoves: Coordinates[] = [];

  const specialMove = pawn.color === ColorEnum.WHITE ? 1 : 6;
  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;
  const captureRight: Coordinates = {
    x: pawn.coordinates.x + 1,
    y: pawn.coordinates.y + moveDirection,
  };
  const captureLeft: Coordinates = {
    x: pawn.coordinates.x - 1,
    y: pawn.coordinates.y + moveDirection,
  };

  const regularMove: Coordinates = {
    x: pawn.coordinates.x,
    y: pawn.coordinates.y + moveDirection,
  };

  if (!hasPiece(pieces, regularMove)) {
    validMoves.push(regularMove);
  }

  const specialMoveCoordinates: Coordinates = {
    x: pawn.coordinates.x,
    y: pawn.coordinates.y + moveDirection * 2,
  };

  if (
    pawn.coordinates.y === specialMove &&
    !hasPiece(pieces, specialMoveCoordinates)
  ) {
    validMoves.push(specialMoveCoordinates);
  }

  const captureRightPiece = getPiece(pieces, captureRight);
  const captureLeftPiece = getPiece(pieces, captureLeft);

  if (captureRightPiece && !areSameColor(pawn, captureRightPiece)) {
    validMoves.push(captureRight);
  }

  if (captureLeftPiece && !areSameColor(pawn, captureLeftPiece)) {
    validMoves.push(captureLeft);
  }

  return validMoves;
}
