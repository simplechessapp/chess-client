import { ColorEnum } from "@/utils/enums";
import { Coordinates } from "./Coordinates";
import { Piece } from "./Piece";

export type Board = {
  pieces: Piece[];
  amountOfMoves: number;
  turn: ColorEnum;
  enPassantPawn: Piece | null;
}
