import { useState } from 'react'
import { OPTIONS } from '../consts/consts'
import { verifyWinner } from '../logic/logic'
import { type SquareOptions, type TurnType } from '../types/types'
import { getStorage, setStorage } from '../localStorage/localStorage'

interface ReturnType {
  turn: TurnType
  resetBoard: () => void
  board: SquareOptions[]
  winner: TurnType
  handleClick: (index: number) => void
  winnerPopup: boolean
}

export const useBoard = (): ReturnType => {
  const [winner, setWinner] = useState<TurnType>(OPTIONS.X)
  const [winnerPopup, setWinnerPopup] = useState<boolean>(false)
  const [turn, setTurn] = useState<TurnType>(() => {
    const turn = getStorage('turn')
    if (turn !== null) {
      return turn as TurnType
    }
    return OPTIONS.X
  })
  const [board, setBoard] = useState<SquareOptions[]>(() => {
    const storage = getStorage('board')
    if (storage !== null) {
      return storage as SquareOptions[]
    }
    return new Array(9).fill(null)
  })

  const handleClick = (index: number): void => {
    const square = board[index]
    if (square === null && !winnerPopup) {
      const newTurn = turn === OPTIONS.X ? OPTIONS.O : OPTIONS.X
      const newBoard = [...board]
      newBoard[index] = turn
      setStorage('board', newBoard)
      setStorage('turn', newTurn)
      setBoard(newBoard)
      setTurn(newTurn)
      validateWinner(newBoard)
    }
  }

  const resetBoard = (): void => {
    setTurn(OPTIONS.X)
    const newBoard = new Array(9).fill(null)
    setBoard(newBoard)
    setStorage('board', newBoard)
    setStorage('turn', OPTIONS.X)
  }

  const validateWinner = (newBoard: SquareOptions[]): void => {
    if (verifyWinner(newBoard)) {
      setWinner(turn)
      setWinnerPopup(true)
      setTimeout(() => {
        setWinnerPopup(false)
        resetBoard()
      }, 3000)
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
