import axios from 'axios'
import React, {useState} from 'react'

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response => {
            setPokemons(response.data.results)
            console.log(response.data);
        }).catch((err) => console.log(err));
    };
    return (
        <>
            <button onClick={fetchPokemons}>Fetch Pokemons</button>
            <ul>
              { pokemons.map((pokemon,idx) => <li key={idx}>{pokemon.name}</li>) }
            </ul>
        </>
    );
}

export default Pokemons