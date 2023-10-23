import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

function PokeCard({ pokemon }) {
  const history = useHistory()


  function handleCLick() {
    history.push(`/pokedex/${pokemon.name}`, pokemon)
  }

  return (

    <div className="poke-card" onClick={handleCLick}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
    </div>

  )
}

export default PokeCard