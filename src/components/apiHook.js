
const getPokemon = () => {

    const pokemon = [
        { name: "pikachu", id: 1 },
        { name: "snorlax", id: 2 },
        { name: "charizard", id: 3 },
        { name: "diglett", id: 4 },
        { name: "squirtle", id: 5 },
        { name: "blastoise", id: 6 },
        { name: "beedrill", id: 7 },
        { name: "pidgey", id: 8 },
        { name: "caterpie", id: 9 },
        { name: "metapod", id: 10 },
        { name: "butterfree", id: 11},
        { name: "weedle", id: 12 },
    ]

    const getPokemonData = async () => {
        try {
          const pokemonData = await Promise.all(
            pokemon.map(async (poke) => {
              const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${poke.name}`
              );
              const data = await response.json();
              return {
                id: poke.id,
                name: poke.name,
                image: data.sprites.front_default,
              };
            })
          );
          return pokemonData
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
      };
      return getPokemonData()
}

export default getPokemon