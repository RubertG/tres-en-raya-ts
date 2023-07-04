import { useState } from 'react'
import Square from './Square'
import { type TurnType, type SquareOptions } from '../types/types'
import { OPTIONS } from '../consts/consts'
import Footer from './Footer'

const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Board = (): JSX.Element => {
  const [turn, setTurn] = useState<TurnType>(OPTIONS.X)
  const [board, setBoard] = useState<SquareOptions[]>(new Array(9).fill(null))

  const handleClick = (index: number): void => {
    const square = board[index]
    if (square === null) {
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      setTurn(turn === OPTIONS.X ? OPTIONS.O : OPTIONS.X)
      setTimeout(() => { verifyWinner(newBoard) }, 100)
    }
  }

  const resetBoard = (): void => {
    setTurn(OPTIONS.X)
    setBoard(new Array(9).fill(null))
  }

  const verifyWinner = (board: SquareOptions[]): void => {
    WINNING_COMBO.forEach(combo => {
      const [a, b, c] = combo
      if (board[a] === null) return
      if (board[a] === board[b] && board[c] === board[b]) {
        alert(`Winner: ${board[a]}`)
        resetBoard()
      }
    })
  }

  return (
    <>
      <main className="grid grid-cols-3 grid-rows-3 mt-10 board">
        {
          board.map((value, index) => {
            return (
              <Square key={index} index={index} onClick={handleClick} >
                {value}
              </Square>
            )
          })
        }
      </main>
      <Footer turn={turn} resetBoard={resetBoard} />
    </>
  )
}

export default Board
