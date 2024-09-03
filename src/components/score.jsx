import '../styles/scores.css'

function Score({ currentScore, bestScore }) {

    return (
        <div className="scores_container">
            <p>Current Score: {currentScore}</p>
            <p>Best: {bestScore}</p>
        </div>
    )
}

export default Score