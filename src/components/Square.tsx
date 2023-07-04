import { type SquareOptions } from '../types/types'

interface Props {
  children: SquareOptions
  index: number
  onClick: (index: number) => void
}

const Square: React.FC<Props> = ({ children, index, onClick }): JSX.Element => {
  return (
    <div
      className="w-[120px] h-[120px] flex items-center justify-center text-5xl font-semibold text-white cursor-pointer hover:bg-slate-900 transition-colors"
      onClick={() => { onClick(index) }}>
      {children}
    </div>
  )
}

export default Square
