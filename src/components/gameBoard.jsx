import { useState } from "react"
import Card from "./card"
import "../styles/gameBoard.css"

function GameBoard({ updateScore, currentScore }) {
    const [clickedCards, setClickedCards] = useState([])

    // Create an array of items to be later be filled with the proper name and image values using an API
    const cards = new Array(12)
    for (let i = 0; i < cards.length; i++) {
        cards[i] = [i, 'name', '']
    }
    shuffleCards(cards)

    // Add a card to the clicked cards
    const addCardToClicked = (id) => {
        if (!clickedCards.includes(id)) {
            // Update the score
            const newScore = currentScore + 1
            updateScore(newScore)

            // Add the card to the clicked list
            const clicked = [...clickedCards]
            clicked.push(id)
            setClickedCards(clicked)
        } else {
            // Set the score
            setClickedCards([])
            updateScore(0, false)
        }
    }


    return (
        <div id="game-board-container">
            {cards.map(card => {
                return (
                    <Card key={card[0]} id={card[0]} name={card[1]} image={card[2]} setClicked={addCardToClicked} />
                )
            })}
        </div>
    )
}

export default GameBoard


// Shuffle the cards once a player clicks on one of the cards
function shuffleCards(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}