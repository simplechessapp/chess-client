import { Piece } from "./Piece";

export class Board {
  public pieces: Piece[];
  public amountOfMoves: number;

    constructor(pieces: Piece[], amountOfMoves: number = 0) {
        this.pieces = pieces;
        this.amountOfMoves = amountOfMoves;
    }

}
