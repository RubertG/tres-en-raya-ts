import { OPTIONS } from '../consts/consts'
import { type TurnType } from '../types/types'

interface Props {
  turn: TurnType
  resetBoard: () => void
}

const Footer: React.FC<Props> = ({ turn, resetBoard }): JSX.Element => {
  const className = 'text-white text-3xl py-3 px-5 bg-slate-700 rounded-md transition-colors'
  const classNameX = `${className} ${turn === OPTIONS.X ? 'bg-red-500' : ''}`
  const classNameY = `${className} ${turn === OPTIONS.O ? 'bg-blue-500' : ''}`

  return (
    <footer className='flex justify-center items-center gap-8 mt-7'>
      <div className='flex justify-center items-center gap-3'>
        <p className={classNameX}>{OPTIONS.X}</p>
        <p className={classNameY}>{OPTIONS.O}</p>
      </div>
      <button
        className="block bg-slate-400 font-bold py-1 px-4 rounded-md text-lg text-slate-950 md:hover:bg-slate-500 transition-colors"
        onClick={resetBoard}
      >
        Reiniciar
      </button>
    </footer>
  )
}

export default Footer
