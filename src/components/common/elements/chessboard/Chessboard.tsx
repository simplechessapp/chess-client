"use client";

import React, { useRef } from "react";
import styles from "./Chessboard.module.scss";
import pieceStyles from "../cell/Cell.module.scss";
import Cell from "../cell/Cell";
import { initialBoard } from "@/utils/constants";
import { PiecePosition, PieceCoordinates } from "@/utils/types";
import { Rules } from "@/rules/rules";

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
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      piece.style.position = "fixed";
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;

      setStartPos({
        x: Math.floor((e.clientX - chessBoardRef.current.offsetLeft) / 100),
        y: 7 - Math.floor((e.clientY - chessBoardRef.current.offsetTop) / 100),
      });

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
    if (grabbedPiece && chessBoardRef.current) {
      const chessBoard = chessBoardRef.current.getBoundingClientRect();
      const dropX = e.clientX - chessBoard.left;
      const dropY = e.clientY - chessBoard.top;

      const cellX = Math.floor(dropX / 100);
      const cellY = 7 - Math.floor(dropY / 100);

      if (!Rules.prototype.isValidMove(pieces, startPos, { x: cellX, y: cellY })) {
        grabbedPiece.style.position = "static";
        setGrabbedPiece(null);
        return;
      }

      setPieces(
        pieces.map((piece) => {
          if (piece.x === startPos.x && piece.y === startPos.y) {
            return { ...piece, x: cellX, y: cellY };
          } else {
            return piece;
          }
        })
      );

      grabbedPiece.style.position = "static";
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
          color={pieces.find((piece) => piece.x === j && piece.y === i)?.color}
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
