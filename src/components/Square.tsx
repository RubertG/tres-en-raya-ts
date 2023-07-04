import { OPTIONS } from '../consts/consts'
import { type SquareOptions } from '../types/types'

interface Props {
  children: SquareOptions
  index: number
  onClick: (index: number) => void
}

const Square: React.FC<Props> = ({ children, index, onClick }): JSX.Element => {
  const textColor = children === OPTIONS.X ? 'text-red-500' : 'text-blue-500'

  return (
    <div
      className={'sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] flex items-center justify-center text-6xl font-semibold cursor-pointer md:hover:bg-slate-900 transition-colors'}
      onClick={() => { onClick(index) }}>
      <p className={textColor}>{children}</p>
    </div>
  )
}

export default Square
