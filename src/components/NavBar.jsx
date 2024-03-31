function NavBar({pokemonList, setPokemonIndex}) {
    return (
    <>
        {pokemonList.map((pokemon, index) => 
        <button key={index} onClick={()=> (setPokemonIndex(index))
        (index === 3? alert("pika pikachu !!!"):0)}>{pokemon.name}</button>)}
    </>
    )
}

export default NavBar