import Chessboard from "@/components/common/elements/chessboard-v2/Chessboard";
import styles from "./BoardPage.module.scss";

export default function BoardPage() {
  return (
    <div className={styles["board-page"]}>
      <Chessboard />
    </div>
  );
}
