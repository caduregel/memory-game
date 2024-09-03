import './styles/App.css'
import GameBoard from './components/gameBoard'
import Score from './components/score'

function App() {

  return (
    <>
      <div className='header_container'>
        <Score currentScore={} bestScore={} />
      </div>
      <GameBoard />
    </>
  )
}

export default App
