import { ColorEnum, PieceEnum } from "@/utils/enums";
import styles from "./ChessPiece.module.scss";
import { Piece } from "@/models/Piece";
import { ReactElement } from "react";

interface ChessPieceProps {
  piece: Piece;
}

export default function ChessPiece(props: ChessPieceProps) {
  const className = [
    styles[props.piece.color],
    styles[props.piece.piece],
    styles["piece"],
  ].join(" ");

  const style = {
    transform: `translate(${props.piece.coordinates.x * 100}%, ${(7 - props.piece.coordinates.y) * 100}%)`,
  };

  return (
    <div
      className={className}
      style={style}
    ></div>
  );
}
