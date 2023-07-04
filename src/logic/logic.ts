import { WINNING_COMBO } from '../consts/consts'
import { type SquareOptions } from '../types/types'

export const verifyWinner = (board: SquareOptions[]): boolean => {
  for (let i = 0; WINNING_COMBO.length > i; i++) {
    const [a, b, c] = WINNING_COMBO[i]
    if (board[a] !== null && board[a] === board[b] && board[c] === board[b]) {
      return true
    }
  }
  return false
}
