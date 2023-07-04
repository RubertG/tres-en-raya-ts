import { useState } from 'react'
import Square from './Square'
import { type SquareOptions } from '../types/types'
import { OPTIONS } from '../consts/consts'

const Board = (): JSX.Element => {
  const [board, setBoard] = useState<SquareOptions[]>([
    'X', 'X', 'X',
    'X', 'X', 'X',
    'X', 'X', 'X'
  ])

  const handleClick = (index: number): void => {
    const square = board[index]
  }

  return (
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
  )
}

export default Board
