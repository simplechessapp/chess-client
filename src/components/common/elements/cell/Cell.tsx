import { ColorEnum, PieceEnum } from "@/utils/enums";
import styles from "./Cell.module.scss";

interface CellProps {
  colorNumber: number;
  piece?: PieceEnum;
  color?: ColorEnum;
  validMove?: boolean;
  highlight?: boolean;
}

export default function Cell({ colorNumber, piece, color, validMove, highlight }: CellProps) {
  const className: string = [
    styles["cell"],
    colorNumber % 2 === 0 ? styles["white"] : styles["black"],
    highlight ? styles["highlight"] : "",
  ].join(" ");

  const pieceClassName: string = [
    styles["piece"],
    validMove ? styles["valid-capture"] : "",
  ].join(" ");

  const emptyClassName: string = [
    validMove ? styles["valid-move"] : "",
  ].join(" ");

  return (
    <div className={className}>
      <div
        className={piece ? pieceClassName : emptyClassName}
        style={ (piece && color) ? { backgroundImage: `url(/pieces/${color}${piece}.svg)` } : {} }
      ></div>
    </div>
  );
}
