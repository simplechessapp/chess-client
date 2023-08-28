import { useRef, useState } from "react";
import styles from "./Chessboard.module.scss";
import { Board } from "@/models/Board";
import { initialBoard2 } from "@/utils/constants";
import ChessPiece from "../piece/ChessPiece";
import pieceStyles from "../piece/ChessPiece.module.scss";
import { Coordinates } from "@/models/Coordinates";
import { getPiece } from "@/rules-v2/checks/cellChecks";
import {
  filterInvalidMoves,
  getValidMoves,
  makeMove,
} from "@/rules-v2/moves/moves";
import {
  finishMove,
  getValidatedMoves as gvm,
  performMove,
  promotePawn,
} from "@/rules-v3/board-utils/board.changes";
import Cell from "../cell-v2/Cell";
import { MoveInfo } from "@/models/MoveInfo";
import { ColorEnum, PieceEnum } from "@/utils/enums";
import { isPawnPromoting } from "@/rules-v3/board-utils";

export default function Chessboard() {
  const chessBoardRef = useRef<HTMLDivElement>(null);
  const [board, setBoard] = useState<Board>(initialBoard2);

  const [grabbedPiece, setGrabbedPiece] = useState<HTMLElement | null>(null);
  const [validMoves, setValidMoves] = useState<MoveInfo[]>([]);

  const [startPos, setStartPos] = useState<Coordinates | null>(null);
  const [endPos, setEndPos] = useState<Coordinates | null>(null);
  const [showPromotion, setShowPromotion] = useState<boolean>(false);
  const [allowMoves, setAllowMoves] = useState<boolean>(true);

  function grabPiece(e: React.MouseEvent<HTMLDivElement>) {
    if (!allowMoves) {
      return;
    }
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

      const pieceMoved = getPiece(board.pieces, { x: cellX, y: cellY });

      if (!pieceMoved || pieceMoved.color !== board.turn) {
        return;
      }

      piece.style.transform = `translate(${translateX - offset}%, ${
        translateY - offset
      }%)`;
      piece.classList.add(pieceStyles["grabbing"]);

      setValidMoves(
        gvm(board, getPiece(board.pieces, { x: cellX, y: cellY })!)
      );

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

      setEndPos({ x: cellX, y: cellY });

      const newBoard = performMove(board, startPos!, { x: cellX, y: cellY });

      if (!newBoard) {
        grabbedPiece.style.transform = `translate(${startPos!.x * 100}%, ${
          (7 - startPos!.y) * 100
        }%)`;
      } else {
        if (isPawnPromoting(board, startPos!, { x: cellX, y: cellY })) {
          setShowPromotion(true);
          setAllowMoves(false);
          setBoard(newBoard);
        } else {
          setBoard(finishMove(newBoard));
        }
      }

      grabbedPiece.classList.remove(pieceStyles["grabbing"]);
      setGrabbedPiece(null);
      setStartPos(null);
      setValidMoves([]);
    }
  }

  function choosePiece(piece: PieceEnum) {
    setBoard(finishMove(promotePawn(board, endPos!, PieceEnum.QUEEN)));
    setShowPromotion(false);
    setAllowMoves(true);
    setEndPos(null);
  }

  function getPromotionClassname(piece: PieceEnum) {
    return `
      ${styles["promotion-piece"]} 
      ${pieceStyles[`${board.turn}`]} 
      ${pieceStyles[`${piece}`]}
    `;
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
        coordinates={move.dest}
        key={keyCounter}
        validMove={true}
        validCapture={move.capture}
      />
    );
    keyCounter++;
  }

  const additionalElements = [];

  if (board.kingInCheck) {
    additionalElements.push(
      <Cell
        coordinates={board.kingInCheck}
        key={keyCounter}
        check={true}
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
      {validMovesElements}
      {additionalElements}
      {pieces}
      {showPromotion && (
        <div className={styles["promotion"]}>
          <div
            className={getPromotionClassname(PieceEnum.QUEEN)}
            onClick={() => {
              choosePiece(PieceEnum.QUEEN);
            }}
          ></div>
          <div
            className={getPromotionClassname(PieceEnum.ROOK)}
            onClick={() => {
              choosePiece(PieceEnum.ROOK);
            }}
          ></div>
          <div
            className={getPromotionClassname(PieceEnum.BISHOP)}
            onClick={() => {
              choosePiece(PieceEnum.BISHOP);
            }}
          ></div>
          <div
            className={getPromotionClassname(PieceEnum.KNIGHT)}
            onClick={() => {
              choosePiece(PieceEnum.KNIGHT);
            }}
          ></div>
          )
        </div>
      )}
    </div>
  );
}
