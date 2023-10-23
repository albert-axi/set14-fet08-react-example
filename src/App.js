import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Pokedex from './pages/Pokedex';
import PokePage from './pages/PokePage';
import NavBar from './components/NavBar';
import Favourites from './pages/Favourites';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route path={`/pokedex/:name`} component={PokePage} />
        <Route path="/favourites" component={Favourites} />
      </Router>

    </div>
  );
}

export default App;
