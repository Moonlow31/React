function NavBar({pokemonPrecedent, pokemonSuivant}) {
    return (
    <>
        <button onClick= {pokemonPrecedent}>Précedent</button>
        <button onClick= {pokemonSuivant}>Suivant</button>
    </>
    )
}

export default NavBar