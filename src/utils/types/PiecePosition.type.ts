import { ColorEnum, PieceEnum } from "../enums";

export type PiecePosition = {
    piece: PieceEnum;
    color: ColorEnum;
    x: number;
    y: number;
}