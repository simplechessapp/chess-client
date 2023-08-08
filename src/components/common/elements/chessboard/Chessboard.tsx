"use client";

import React, { useRef } from "react";
import styles from "./Chessboard.module.scss";
import pieceStyles from "../cell/Cell.module.scss";
import Cell from "../cell/Cell";
import { initialBoard } from "@/utils/constants";
import { PiecePosition, PieceCoordinates } from "@/utils/types";
import { isValidMove, makeMove } from "@/rules";
import { getPiece } from "@/utils/common/boardFunctions";
import { get } from "http";

export default function Chessboard() {
  const chessBoardRef = useRef<HTMLDivElement>(null);

  const [grabbedPiece, setGrabbedPiece] = React.useState<HTMLElement | null>(
    null
  );

  const [startPos, setStartPos] = React.useState<PieceCoordinates>({
    x: 0,
    y: 0,
  });

  const [pieces, setPieces] = React.useState<PiecePosition[]>(initialBoard);

  function grabPiece(e: React.MouseEvent<HTMLDivElement>) {
    const piece = e.target as HTMLDivElement;
    if (
      piece.classList.contains(pieceStyles["piece"]) &&
      chessBoardRef.current
    ) {
      const [x, y] = [e.clientX - 50, e.clientY - 50];

      piece.style.position = "fixed";
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      const [relativeX, relativeY] = [
        e.clientX - chessBoardRef.current.offsetLeft,
        e.clientY - chessBoardRef.current.offsetTop,
      ];

      const [cellX, cellY] = [
        Math.floor(relativeX / 100),
        7 - Math.floor(relativeY / 100),
      ];

      setStartPos({
        x: cellX,
        y: cellY,
      });

      setGrabbedPiece(piece);
    }
  }

  function movePiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece !== null) {
      const [x, y] = [e.clientX - 50, e.clientY - 50];

      grabbedPiece.style.left = `${x}px`;
      grabbedPiece.style.top = `${y}px`;
    }
  }

  function dropPiece(e: React.MouseEvent<HTMLDivElement>) {
    if (grabbedPiece && chessBoardRef.current) {
      const [x, y] = [
        e.clientX - chessBoardRef.current.offsetLeft,
        e.clientY - chessBoardRef.current.offsetTop,
      ];

      const [cellX, cellY] = [Math.floor(x / 100), 7 - Math.floor(y / 100)];

      const currentPiece = getPiece(pieces, startPos);

      grabbedPiece.style.position = "static";
      setGrabbedPiece(null);

      if (
        !currentPiece ||
        !isValidMove(pieces, currentPiece, { x: cellX, y: cellY })
      ) {
        return;
      }

      setPieces(makeMove(pieces, currentPiece, { x: cellX, y: cellY }));
    }
  }

  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      let cellNumber = i * 8 + j + 1;
      const cellContent = getPiece(pieces, { x: j, y: i });
      board.push(
        <Cell
          key={cellNumber}
          colorNumber={i + j + 2}
          piece={cellContent?.piece}
          color={cellContent?.color}
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
