import Square from './Square'
import Footer from './Footer'
import WinnerPopup from './WinnerPopup'
import { useBoard } from '../hooks/useBoard'

const Board = (): JSX.Element => {
  const { board, handleClick, resetBoard, winner, winnerPopup, turn } = useBoard()

  return (
    <>
      {
        winnerPopup && <WinnerPopup winner={winner} />
      }
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
