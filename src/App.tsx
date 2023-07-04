import Board from './components/Board'
import './App.css'

const App = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-slate-950 p-5">
      <h1
        className="text-6xl tracking-tight font-extrabold text-white">
        Tres en raya - TS
      </h1>
      <Board />
    </div>
  )
}

export default App
