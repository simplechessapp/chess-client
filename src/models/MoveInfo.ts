import { Coordinates } from "./Coordinates"

export type MoveInfo = {
    dest: Coordinates;
    capture?: boolean;
    enPassant?: boolean;
    castling?: boolean; 
    doublePawn?: boolean;
}