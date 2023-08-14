import { Coordinates } from "@/models/Coordinates";
import { Piece } from "@/models/Piece";
import { getAllBishopMoves } from "./bishopRules";
import { getAllRookMoves } from "./rookRules";

export function getAllQueenMoves(pieces: Piece[], queen: Piece) {
    const bishopMoves = getAllBishopMoves(pieces, queen);
    const rookMoves = getAllRookMoves(pieces, queen);
    
    return [...bishopMoves, ...rookMoves];
}