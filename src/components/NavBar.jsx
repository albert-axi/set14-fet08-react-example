import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function NavBar() {

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/pokedex">Pokedex</NavLink>
      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  )
}

export default NavBar