import { type SquareOptions } from '../types/types'
import SquareIcon from './SquareIcon'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children: SquareOptions
  index: number
  onClick: (index: number) => void
}

const Square: React.FC<Props> = ({ children, index, onClick }): JSX.Element => {
  return (
    <div
      className={'sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] flex items-center justify-center text-6xl font-semibold cursor-pointer md:hover:bg-slate-900 transition-colors'}
      onClick={() => { onClick(index) }}>
      <AnimatePresence>
        <SquareIcon turn={children} />
      </AnimatePresence>
    </div>
  )
}

export default Square
