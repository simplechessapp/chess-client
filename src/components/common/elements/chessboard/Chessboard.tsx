"use client";

import React from "react";
import styles from "./Chessboard.module.scss";
import Cell from "../cell/Cell";

interface PiecePosition {
  piece: string;
  x: number;
  y: number;
}

export default function Chessboard() {
  const verticalAxes = [1, 2, 3, 4, 5, 6, 7, 8];
  const horizontalAxes = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const pieces: PiecePosition[] = [];

  for (let color = 0; color < 2; color++) {
    const [pawnY, y, pieceColor] = color === 0 ? [1, 0, "w"] : [6, 7, "b"];

  for (let i = 0; i < 8; i++) {
    pieces.push({ piece: `${pieceColor}P`, x: i, y: pawnY });
  }

  pieces.push({ piece: `${pieceColor}R`, x: 0, y });
  pieces.push({ piece: `${pieceColor}R`, x: 7, y });

  pieces.push({ piece: `${pieceColor}N`, x: 1, y });
  pieces.push({ piece: `${pieceColor}N`, x: 6, y });

  pieces.push({ piece: `${pieceColor}B`, x: 2, y });
  pieces.push({ piece: `${pieceColor}B`, x: 5, y });

  pieces.push({ piece: `${pieceColor}Q`, x: 3, y });

  pieces.push({ piece: `${pieceColor}K`, x: 4, y });
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

  return <div className={styles["chessboard"]}>{board}</div>;
}
