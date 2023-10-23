import { useParams } from "react-router-dom/cjs/react-router-dom.min"

function PokeModal() {

  const params = useParams()

  console.log(params)

  return (
    <div className="poke-modal">
      <div poke-details>
        <h2>Pokemon Name</h2>
        <img src="" alt="" />
        <p>Some info</p>
      </div>
    </div>
  )
}

export default PokeModal