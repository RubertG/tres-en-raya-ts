import { m } from 'framer-motion'
import { type SquareOptions } from '../types/types'
import { OPTIONS } from '../consts/consts'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 0.5,
        bounce: 0
      },
      opacity: {
        duration: 0.01
      }
    }
  }
}

interface Props {
  turn: SquareOptions
}

const SquareIcon: React.FC<Props> = ({ turn }): JSX.Element => {
  if (turn === OPTIONS.O) {
    return (
      <m.svg
        width="100%"
        height="100%"
        viewBox="-15 -15 230 230"
        initial="hidden"
        animate="visible"
      >
        <m.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#3b82f6"
          strokeWidth="6"
          fill="transparent"
          variants={draw} />
      </m.svg>
    )
  }
  if (turn === OPTIONS.X) {
    return (
      <m.svg
        width="100%"
        height="100%"
        viewBox="-40 -40 280 280"
        initial="hidden"
        animate="visible"
      >
        <m.line
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          stroke="#ef4444"
          strokeWidth="6"
          variants={draw} />
        <m.line
          x1="200"
          y1="0"
          x2="0"
          y2="200"
          stroke="#ef4444"
          strokeWidth="6"
          variants={draw} />
      </m.svg>
    )
  }
  return (<></>)
}

export default SquareIcon
