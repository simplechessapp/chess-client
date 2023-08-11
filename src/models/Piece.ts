import { ColorEnum, PieceEnum } from "@/utils/enums";
import { Coordinates } from "./Coordinates";

export class Piece {
  public coordinates: Coordinates;
  public color: ColorEnum;
  public piece: PieceEnum;
  public hasMoved: boolean;
  public possibleMoves?: Coordinates[];

  constructor(
    coordinates: Coordinates,
    color: ColorEnum,
    piece: PieceEnum,
    hasMoved: boolean = false,
    possibleMoves?: Coordinates[]
  ) {
    this.coordinates = coordinates;
    this.color = color;
    this.piece = piece;
    this.hasMoved = hasMoved;
    this.possibleMoves = possibleMoves;
  }

  get isKing(): boolean {
    return this.piece === PieceEnum.KING;
  }

  get isQueen(): boolean {
    return this.piece === PieceEnum.QUEEN;
  }

  get isRook(): boolean {
    return this.piece === PieceEnum.ROOK;
  }

  get isBishop(): boolean {
    return this.piece === PieceEnum.BISHOP;
  }

  get isKnight(): boolean {
    return this.piece === PieceEnum.KNIGHT;
  }

  get isPawn(): boolean {
    return this.piece === PieceEnum.PAWN;
  }

  public areSameColor(piece: Piece): boolean {
    return this.color === piece.color;
  }

  get isWhite(): boolean {
    return this.color === ColorEnum.WHITE;
  }

  get isBlack(): boolean {
    return this.color === ColorEnum.BLACK;
  }

  public sameCoordinates(coordinates: Coordinates): boolean {
    return this.coordinates.sameCoordinates(coordinates);
  }

}
