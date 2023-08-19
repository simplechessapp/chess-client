import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { get } from "http";

export function hasPiece(pieces: Piece[], coordinates: Coordinates) {
  return pieces.some(
    (piece) =>
      piece.coordinates.x === coordinates.x &&
      piece.coordinates.y === coordinates.y
  );
}

export function getPiece(pieces: Piece[], coordinates: Coordinates) {
  return pieces.find(
    (piece) =>
      piece.coordinates.x === coordinates.x &&
      piece.coordinates.y === coordinates.y
  );
}

export function isOutOfBounds(coordinates: Coordinates): boolean {
  return (
    coordinates.x < 0 ||
    coordinates.x > 7 ||
    coordinates.y < 0 ||
    coordinates.y > 7
  );
}

export function isCellUnderAttack(pieces: Piece[], coordinates: Coordinates, color: ColorEnum) {
  const pawnMoveDirection = color === ColorEnum.WHITE ? 1 : -1;

  //check if cell attacked by pawn
  const pawnAttackCoordinates = [
    { x: coordinates.x + 1, y: coordinates.y + pawnMoveDirection },
    { x: coordinates.x - 1, y: coordinates.y + pawnMoveDirection },
  ];

  const pawnAttack = pawnAttackCoordinates.some((attackCoordinates) => {
    return getPiece(pieces, attackCoordinates)?.piece === PieceEnum.PAWN;
  });

  if (pawnAttack) {
    return true;
  }

  //check if cell attacked by knight
  
  for (let i = -2; i <= 2; i++) {
    if (i === 0) {
      continue;
    }
    const knightAttackCoordinates = [
      { x: coordinates.x + i, y: coordinates.y + 3 - Math.abs(i) },
      { x: coordinates.x + i, y: coordinates.y - (3 - Math.abs(i)) },
    ];

    const knightAttack = knightAttackCoordinates.some((attackCoordinates) => {
      return getPiece(pieces, attackCoordinates)?.piece === PieceEnum.KNIGHT;
    });

    if (knightAttack) {
      return true;
    }
  }

  //check if cell attacked by bishop or queen

  for (let i = -7; i <= 7; i++) {
    if (i === 0) {
      continue;
    }
    const bishopAttackCoordinates = [
      { x: coordinates.x + i, y: coordinates.y + i },
      { x: coordinates.x + i, y: coordinates.y - i },
    ];

    const bishopAttack = bishopAttackCoordinates.some((attackCoordinates) => {
      return (
        getPiece(pieces, attackCoordinates)?.piece === PieceEnum.BISHOP ||
        getPiece(pieces, attackCoordinates)?.piece === PieceEnum.QUEEN
      );
    });

    if (bishopAttack) {
      return true;
    }
  }

  //check if cell attacked by rook or queen

  for (let i = -7; i <= 7; i++) {
    if (i === 0) {
      continue;
    }
    const rookAttackCoordinates = [
      { x: coordinates.x + i, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y + i },
    ];

    const rookAttack = rookAttackCoordinates.some((attackCoordinates) => {
      return (
        getPiece(pieces, attackCoordinates)?.piece === PieceEnum.ROOK ||
        getPiece(pieces, attackCoordinates)?.piece === PieceEnum.QUEEN
      );
    });

    if (rookAttack) {
      return true;
    }
  }

  //check if cell attacked by king

  for (let i = -1; i <= 1; i++) {
    if (i === 0) {
      continue;
    }
    const kingAttackCoordinates = [
      { x: coordinates.x + i, y: coordinates.y + i },
      { x: coordinates.x + i, y: coordinates.y - i },
      { x: coordinates.x + i, y: coordinates.y },
      { x: coordinates.x, y: coordinates.y + i },
    ];

    const kingAttack = kingAttackCoordinates.some((attackCoordinates) => {
      return getPiece(pieces, attackCoordinates)?.piece === PieceEnum.KING;
    });

    if (kingAttack) {
      return true;
    }
  }

  return false;
}
