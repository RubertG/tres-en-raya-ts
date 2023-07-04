import Board from './components/Board'
import './App.css'

const App = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-slate-950 p-5">
      <h1
        className="text-6xl font-extrabold tracking-tight text-white">
        Tres en raya - TS
      </h1>
      <Board />
    </div>
  )
}

export default App
