import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { ColorEnum } from "@/utils/enums";
import { getPiece, hasPiece } from "./cellChecks";

export function getAllPawnMoves(pieces: Piece[], pawn: Piece) {
  const validMoves: Coordinates[] = [];

  const specialMove = pawn.color === ColorEnum.WHITE ? 1 : 6;
  const moveDirection = pawn.color === ColorEnum.WHITE ? 1 : -1;
  const captureRight: Coordinates = new Coordinates(
    pawn.coordinates.x + 1,
    pawn.coordinates.y + moveDirection
  );
  const captureLeft: Coordinates = new Coordinates(
    pawn.coordinates.x - 1,
    pawn.coordinates.y + moveDirection
  );

  const regularMove: Coordinates = new Coordinates(
    pawn.coordinates.x,
    pawn.coordinates.y + moveDirection
  );

  if (!hasPiece(pieces, regularMove)) {
    validMoves.push(regularMove);
  }

  const specialMoveCoordinates: Coordinates = new Coordinates(
    pawn.coordinates.x,
    pawn.coordinates.y + moveDirection * 2
  );

  if (
    pawn.coordinates.y === specialMove &&
    !hasPiece(pieces, specialMoveCoordinates)
  ) {
    validMoves.push(specialMoveCoordinates);
  }

  const captureRightPiece = getPiece(pieces, captureRight);
  const captureLeftPiece = getPiece(pieces, captureLeft);

  if (captureRightPiece && captureRightPiece.areSameColor(pawn)) {
    validMoves.push(captureRight);
  }

  if (captureLeftPiece && captureLeftPiece.areSameColor(pawn)) {
    validMoves.push(captureLeft);
  }

  return validMoves;
}
