import styles from "./Cell.module.scss";

interface CellProps {
  colorNumber: number;
  piece?: string;
}

export default function Cell({ colorNumber, piece }: CellProps) {
  const className: string = [
    styles["cell"],
    colorNumber % 2 === 0 ? styles["white"] : styles["black"],
  ].join(" ");

  return <div className={className}>{piece}</div>;
}
