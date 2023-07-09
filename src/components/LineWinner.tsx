import { useEffect, useState } from 'react'
import { type SquareOptions } from '../types/types'
import { verifyDraw } from '../logic/logic'
import { CLASSFORWINNER, OPTIONS } from '../consts/consts'
import { m } from 'framer-motion'

interface Props {
  board: SquareOptions[]
  winner: SquareOptions
}

const LineWinner: React.FC<Props> = ({ board, winner }): JSX.Element => {
  const [className, setClassName] = useState('')

  useEffect(() => {
    const indexWinnerCombo = verifyDraw(board)
    const bg = winner === OPTIONS.O ? 'bg-blue-500' : 'bg-red-500'
    setClassName(`${bg} ${CLASSFORWINNER[indexWinnerCombo]}`)
  }, [])

  return (
    <m.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute w-2 h-full rounded-md ${className}`}
    >
    </m.span>
  )
}

export default LineWinner
