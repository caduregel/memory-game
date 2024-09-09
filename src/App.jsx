import './styles/App.css'
import GameBoard from './components/gameBoard'
import Score from './components/score'
import { useState } from 'react'

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(currentScore)

  // Function to be passed down all the way to the individual cards to handle updating the players score
  const updateScore = (newScore) => {
    if (newScore > bestScore) {
      setBestScore(newScore)
    }
    setCurrentScore(newScore)
  }

  return (
    <>
      <div className='header_container'>
        <div className='flex-column-container'>
          <h1>Memory Card Game</h1>
          <p>Click on cards to earn points, but don&apos;t click on the same card twice!</p>
        </div>
        <Score currentScore={currentScore} bestScore={bestScore} />
      </div>
      <GameBoard updateScore={updateScore} currentScore={currentScore} />
    </>
  )
}

export default App
