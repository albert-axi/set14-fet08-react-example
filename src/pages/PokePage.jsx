import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useIsFave } from "../hooks/customHooks"


function PokePage() {

  const [isFave, setIsFave] = useState(false)

  const { state } = useLocation()
  const { name, sprites } = state
  const fave = useIsFave(name)

  useEffect(() => {
    setIsFave(fave)
  }, [fave])

  function handleClick() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    }

    fetch('http://localhost:3000/favourites', options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsFave(!!data)
      })
  }

  return (
    <div className="poke-modal">
      <div className="poke-details">
        <h2>{name}</h2>
        <img src={sprites.other.dream_world.front_default} alt={name} />
        <p>Some info</p>
        <button onClick={handleClick}>{isFave ? 'Remove from Favourites' : 'Add to Favourites'}</button>
      </div>
    </div>
  )
}

export default PokePage