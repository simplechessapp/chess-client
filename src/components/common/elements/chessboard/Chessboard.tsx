"use client";

import React, { useRef } from "react";
import styles from "./Chessboard.module.scss";
import pieceStyles from "../cell/Cell.module.scss";
import Cell from "../cell/Cell";

interface PiecePosition {
  piece: string;
  x: number;
  y: number;
}

const initialPieces: PiecePosition[] = [];

for (let color = 0; color < 2; color++) {
  const [pawnY, y, pieceColor] = color === 0 ? [1, 0, "w"] : [6, 7, "b"];

  for (let i = 0; i < 8; i++) {
    initialPieces.push({ piece: `${pieceColor}P`, x: i, y: pawnY });
  }

  initialPieces.push({ piece: `${pieceColor}R`, x: 0, y });
  initialPieces.push({ piece: `${pieceColor}R`, x: 7, y });

  initialPieces.push({ piece: `${pieceColor}N`, x: 1, y });
  initialPieces.push({ piece: `${pieceColor}N`, x: 6, y });

  initialPieces.push({ piece: `${pieceColor}B`, x: 2, y });
  initialPieces.push({ piece: `${pieceColor}B`, x: 5, y });

  initialPieces.push({ piece: `${pieceColor}Q`, x: 3, y });

  initialPieces.push({ piece: `${pieceColor}K`, x: 4, y });
}

export default function Chessboard() {
  const verticalAxes = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalAxes = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const chessBoardRef = useRef<HTMLDivElement>(null);
  const [grabbedPiece, setGrabbedPiece] = React.useState<HTMLElement | null>(
    null
  );

  const [pieces, setPieces] = React.useState<PiecePosition[]>(initialPieces);

  function grabPiece(e: React.MouseEvent<HTMLDivElement>) {
    const piece = e.target as HTMLDivElement;
    if (piece.classList.contains(pieceStyles["piece"])) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      piece.style.position = "fixed";
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      setGrabbedPiece(piece);
    }
  }

  function movePiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece !== null) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      grabbedPiece.style.left = `${x}px`;
      grabbedPiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece !== null && chessBoardRef.current !== null) {
      const chessBoard = chessBoardRef.current.getBoundingClientRect();
      console.log(e);
      const dropX = e.clientX;
      const dropY = e.clientY;

      if (
        dropX < chessBoard.left ||
        dropX > chessBoard.right ||
        dropY < chessBoard.top ||
        dropY > chessBoard.bottom
      ) {
        grabbedPiece?.style.removeProperty("position");
      }

      const piece = e.target as HTMLDivElement;

      const pieceX =
        dropX -
        chessBoard.left -
        ((dropX - chessBoard.left) % 100) +
        chessBoard.left;
      const pieceY =
        dropY -
        chessBoard.top -
        ((dropY - chessBoard.top) % 100) +
        chessBoard.top;

      grabbedPiece.style.left = `${pieceX}px`;
      grabbedPiece.style.top = `${pieceY}px`;

      setGrabbedPiece(null);
    }
  }

  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      let cellNumber = i * 8 + j + 1;
      board.push(
        <Cell
          key={cellNumber}
          colorNumber={i + j + 2}
          piece={pieces.find((piece) => piece.x === j && piece.y === i)?.piece}
        />
      );
    }
  }

  return (
    <div
      className={styles["chessboard"]}
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      ref={chessBoardRef}
    >
      {board}
    </div>
  );
}
