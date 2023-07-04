interface Props {
  winner: string
}

const WinnerPopup: React.FC<Props> = ({ winner }): JSX.Element => {
  return (
    <section className="fixed bottom-0 left-0 mb-7 ml-7 flex justify-center items-center bg-black bg-opacity-90">
      <h2
        className="bg-slate-900 text-white py-5 px-10 rounded-md text-2xl border-2"
      >{winner} es el ganador!!</h2>
    </section>
  )
}

export default WinnerPopup
