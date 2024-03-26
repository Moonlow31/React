function PokemonCard() {
    const pokemon = pokemonList[0]
    return <figure>
        <div>{pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p>"???"</p>}</div>
        <figcaption>{pokemon.name}</figcaption>
    </figure>;

  }
  //<img src={pokemon.imgSrc}></img>
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  export default PokemonCard;