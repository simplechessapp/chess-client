import { ColorEnum, PieceEnum } from "@/utils/enums";
import { Coordinates } from "./Coordinates";

export type Piece = {
  coordinates: Coordinates;
  color: ColorEnum;
  piece: PieceEnum;
  hasMoved: boolean;
  possibleMoves?: Coordinates[];
}
