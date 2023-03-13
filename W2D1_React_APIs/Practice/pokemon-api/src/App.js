import { useState } from "react";
import "./App.css";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
              console.log(response.results)
              setPokemons(response.results)
    })
            .catch((err) => console.log(err));
    };
    return (
        <div className="App">
            <button onClick={fetchPokemons}>Fetch Pokemons</button>
            <ul>
              { pokemons.map((pokemon,idx) => <li key={idx}>{pokemon.name}</li>) }
            </ul>
        </div>
    );
}

export default App;
