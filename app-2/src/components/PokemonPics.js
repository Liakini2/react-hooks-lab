import React from "react";

const PokemonPics = (props)=>{
    console.log(props.pokemon.url)
    return(
    <div>
        <h3>{props.pokemon.name}</h3>
    </div>
)
}

export default PokemonPics