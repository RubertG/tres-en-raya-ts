import { useState } from 'react'
import { OPTIONS } from '../consts/consts'
import { verifyWinner } from '../logic/logic'
import { type SquareOptions, type TurnType } from '../types/types'

interface ReturnType {
  turn: TurnType
  resetBoard: () => void
  board: SquareOptions[]
  winner: TurnType
  handleClick: (index: number) => void
  winnerPopup: boolean
}

export const useBoard = (): ReturnType => {
  const [turn, setTurn] = useState<TurnType>(OPTIONS.X)
  const [winner, setWinner] = useState<TurnType>(OPTIONS.X)
  const [board, setBoard] = useState<SquareOptions[]>(new Array(9).fill(null))
  const [winnerPopup, setWinnerPopup] = useState<boolean>(false)

  const handleClick = (index: number): void => {
    const square = board[index]
    if (square === null) {
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      setTurn(turn === OPTIONS.X ? OPTIONS.O : OPTIONS.X)
      setTimeout(() => { validateWinner(newBoard) }, 100)
    }
  }

  const resetBoard = (): void => {
    setTurn(OPTIONS.X)
    setBoard(new Array(9).fill(null))
  }

  const validateWinner = (newBoard: SquareOptions[]): void => {
    if (verifyWinner(newBoard)) {
      setWinner(turn)
      setWinnerPopup(true)
      setTimeout(() => { setWinnerPopup(false) }, 3000)
      resetBoard()
    }
  }
  return {
    resetBoard,
    board,
    winner,
    handleClick,
    winnerPopup,
    turn
  }
}
