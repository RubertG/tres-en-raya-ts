import Board from './components/Board'
import './App.css'

import { LazyMotion, m, domAnimation } from 'framer-motion'

const App = (): JSX.Element => {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="flex justify-center items-center flex-col h-screen bg-slate-950 p-5">
        <m.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="sm:text-6xl tracking-tight font-extrabold text-white text-4xl">
          Tres en raya - TS
        </m.h1>
        <Board />
      </div>
    </LazyMotion>
  )
}

export default App
