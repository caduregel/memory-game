import './styles/App.css'
import GameBoard from './components/gameBoard'
import Score from './components/score'
import { useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState()
  const [bestScore, setBestScore] = useState(currentScore)

  // Function to be passed down all the way to the individual cards to handle updating the players score
  const updateScore = (newScore, clickedCorrectly) => {
    if (newScore > bestScore) {
      setBestScore(newScore)
      console.log(newScore)
    }
    if (clickedCorrectly) {
      setCurrentScore(newScore)
    } else {
      setCurrentScore(0)
    }
  }

  return (
    <>
      <div className='header_container'>
        <Score currentScore={currentScore} bestScore={bestScore} />
      </div>
      <GameBoard updateScore={updateScore} currentScore={currentScore} bestScore={bestScore} />
    </>
  )
}

export default App
