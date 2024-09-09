import { useEffect, useState } from "react"
import Card from "./card"
import getPokemon from "./apiHook"
import "../styles/gameBoard.css"

function GameBoard({ updateScore, currentScore }) {
    const [clickedCards, setClickedCards] = useState([])
    const [pokemon, setPokemon] = useState()
    const [pokemonPending, setPokemonPending] = useState(true)
    useEffect(() => {
        const awaitPokemon = async () => {
            const connection = await getPokemon()
            shuffleCards(connection)
            setPokemon(connection)
            setPokemonPending(false)
        }
        awaitPokemon()
    }, [])
    // const shuffledPokemon = shuffleCards(pokemon)
    // setPokemon(shuffledPokemon)

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
        shuffleCards(pokemon)
    }
    if (currentScore == 12) {
        return (<div>
            <h1 id="win-screen">You have won!</h1>
        </div>)
    } else {

        if (pokemonPending == false) {
            return (
                <div id="game-board-container">
                    {
                        pokemon.map(card => {
                            return (
                                <Card key={card.id} id={card.id} name={card.name} image={card.image} setClicked={addCardToClicked} />
                            )
                        })}

                </div>
            )
        } else {
            return (
                <>
                    <h1>loading...</h1></>
            )
        }
    }
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