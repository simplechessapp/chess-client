import { ColorEnum, PieceEnum } from "@/utils/enums";
import styles from "./Cell.module.scss";

interface CellProps {
  colorNumber: number;
  piece?: PieceEnum;
  color?: ColorEnum;
}

export default function Cell({ colorNumber, piece, color }: CellProps) {
  const className: string = [
    styles["cell"],
    colorNumber % 2 === 0 ? styles["white"] : styles["black"],
  ].join(" ");

  return (
    <div className={className}>
      <div
        className={piece ? styles["piece"] : ""}
        style={ (piece && color) ? { backgroundImage: `url(/pieces/${color}${piece}.svg)` } : {} }
      ></div>
    </div>
  );
}
