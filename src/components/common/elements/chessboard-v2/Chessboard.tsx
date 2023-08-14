import { useRef, useState } from "react";
import styles from "./Chessboard.module.scss";
import { Board } from "@/models/Board";
import { initialBoard2 } from "@/utils/constants";
import ChessPiece from "../piece/ChessPiece";
import pieceStyles from "../piece/ChessPiece.module.scss";
import { Coordinates } from "@/models/Coordinates";
import { getPiece } from "@/rules-v2/checks/cellChecks";
import { getValidMoves, makeMove } from "@/rules-v2/moves/moves";
import Cell from "../cell-v2/Cell";


export default function Chessboard() {
  const chessBoardRef = useRef<HTMLDivElement>(null);
  const [board, setBoard] = useState<Board>(initialBoard2);

  const [grabbedPiece, setGrabbedPiece] = useState<HTMLElement | null>(null);
  const [validMoves, setValidMoves] = useState<Coordinates[]>([]);

  const [startPos, setStartPos] = useState<Coordinates | null>(null);

  function grabPiece(e: React.MouseEvent<HTMLDivElement>) {
    const piece = e.target as HTMLDivElement;
    if (
      piece.classList.contains(pieceStyles["piece"]) &&
      chessBoardRef.current
    ) {
      const offset = 50;
      const [translateX, translateY] = [
        e.clientX - chessBoardRef.current.offsetLeft,
        e.clientY - chessBoardRef.current.offsetTop,
      ];

      const [cellX, cellY] = [
        Math.floor(translateX / 100),
        7 - Math.floor(translateY / 100),
      ];

      piece.style.transform = `translate(${translateX - offset}%, ${
        translateY - offset
      }%)`;
      piece.classList.add(pieceStyles["grabbing"]);

      const pieceMoved = getPiece(board.pieces, { x: cellX, y: cellY });

      if (pieceMoved) {
        setValidMoves(getValidMoves(board, pieceMoved.coordinates));
      }

      setStartPos({ x: cellX, y: cellY });
      setGrabbedPiece(piece);
    }
  }

  function movePiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece && chessBoardRef.current) {
      const [translateX, translateY] = [
        e.clientX - chessBoardRef.current.offsetLeft - 50,
        e.clientY - chessBoardRef.current.offsetTop - 50,
      ];

      grabbedPiece.style.transform = `translate(${translateX}%, ${translateY}%)`;
    }
  }

  function dropPiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece && chessBoardRef.current) {
      const [relativeX, relativeY] = [
        e.clientX - chessBoardRef.current.offsetLeft,
        e.clientY - chessBoardRef.current.offsetTop,
      ];

      const [cellX, cellY] = [
        Math.floor(relativeX / 100),
        7 - Math.floor(relativeY / 100),
      ];

      const newBoard = structuredClone(board);

      if (makeMove(newBoard, startPos!, { x: cellX, y: cellY })) {
        setBoard(newBoard);
      } else {
        grabbedPiece.style.transform = `translate(${startPos!.x * 100}%, ${
          (7 - startPos!.y) * 100
        }%)`;
      }

      grabbedPiece.classList.remove(pieceStyles["grabbing"]);
      setGrabbedPiece(null);
      setStartPos(null);
      setValidMoves([]);
    }
  }

  const pieces = [];

  let keyCounter = 0;
  for (let piece of board.pieces) {
    pieces.push(
      <ChessPiece
        piece={piece}
        key={keyCounter}
      />
    );
    keyCounter++;
  }

  const validMovesElements = [];
  for (let move of validMoves) {
    validMovesElements.push(
      <Cell
        coordinates={move}
        key={keyCounter}
        validMove={true}
      />
    );
    keyCounter++;
  }



  return (
    <div
      className={styles["chessboard"]}
      onMouseDown={grabPiece}
      onMouseMove={movePiece}
      onMouseUp={dropPiece}
      ref={chessBoardRef}
    >
      {pieces}
      {validMovesElements}
    </div>
  );
}
