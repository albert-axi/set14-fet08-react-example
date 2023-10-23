import { useState, useEffect } from "react"
import PokeCard from "../components/PokeCard"
import { useQuery } from "../hooks/customHooks"

function Pokedex() {

  const [pokemon, setPokemon] = useState([])
  const data = useQuery('https://pokeapi.co/api/v2/pokemon?limit=5')

  useEffect(() => {
    data?.results.forEach(({ url }) => {
      fetch(url)
        .then(res => res.json())
        .then(data => setPokemon(prevState => ([...prevState, data])))
    })
  }, [data])

  return (
    <>
      <h1>Pokedex page</h1>
      <div className="poke-list">
        {pokemon.map((poke) => (<PokeCard key={poke.name} pokemon={poke} />))}
      </div>
    </>

  )
}

export default Pokedex