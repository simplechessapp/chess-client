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

  for (let i = 0; i < 8; i++) {
    pieces.push({
      piece: "wP",
      x: i,
      y: 1,
    });
    pieces.push({
      piece: "bP",
      x: i,
      y: 6,
    });
  }

  pieces.push({ piece: "wR", x: 0, y: 0 });
  pieces.push({ piece: "wR", x: 7, y: 0 });
  pieces.push({ piece: "bR", x: 0, y: 7 });
  pieces.push({ piece: "bR", x: 7, y: 7 });

  pieces.push({ piece: "wN", x: 1, y: 0 });
  pieces.push({ piece: "wN", x: 6, y: 0 });
  pieces.push({ piece: "bN", x: 1, y: 7 });
  pieces.push({ piece: "bN", x: 6, y: 7 });

  pieces.push({ piece: "wB", x: 2, y: 0 });
  pieces.push({ piece: "wB", x: 5, y: 0 });
  pieces.push({ piece: "bB", x: 2, y: 7 });
  pieces.push({ piece: "bB", x: 5, y: 7 });

  pieces.push({ piece: "wQ", x: 3, y: 0 });
  pieces.push({ piece: "bQ", x: 3, y: 7 });

  pieces.push({ piece: "wK", x: 4, y: 0 });
  pieces.push({ piece: "bK", x: 4, y: 7 });


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
