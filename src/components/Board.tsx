import Square from './Square'
import Footer from './Footer'
import WinnerPopup from './WinnerPopup'
import { useBoard } from '../hooks/useBoard'
import { AnimatePresence } from 'framer-motion'
import LineWinner from './LineWinner'

const Board = (): JSX.Element => {
  const { board, handleClick, resetBoard, winner, winnerPopup, turn } = useBoard()

  return (
    <>
      <AnimatePresence>
        {
          winnerPopup && <WinnerPopup winner={winner} />
        }
      </AnimatePresence>
      <main className="relative grid grid-cols-3 grid-rows-3 mt-10 board">
        {
          board.map((value, index) => {
            return (
              <Square key={index} index={index} onClick={handleClick} >
                {value}
              </Square>
            )
          })
        }
        <AnimatePresence>
          {
            winnerPopup && <LineWinner board={board} winner={winner} />
          }
        </AnimatePresence>
      </main>
      <Footer turn={turn} resetBoard={resetBoard} />
    </>
  )
}

export default Board
