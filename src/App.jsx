/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonSuivant = () => {pokemonIndex < pokemonList.length-1? setPokemonIndex(pokemonIndex +1) : setPokemonIndex(0)};
  const pokemonPrecedent = () => {pokemonIndex === 0? setPokemonIndex(pokemonList.length-1) : setPokemonIndex(pokemonIndex - 1)};

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick= {pokemonPrecedent}>Précedent</button>
      <button onClick= {pokemonSuivant}>Suivant</button>
    </div>
  );
}

export default App;