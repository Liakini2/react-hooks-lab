import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonPics from './PokemonPics'

const Pokemon =(props)=>{
    const [pokemon, setPokemon]=useState([])
    
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then (res=>setPokemon(res.data.results))
        .catch (err=>console.log(err))
    },[])
    
    return (
        <div>
            {pokemon.map((pokemon,index)=>{
               return <PokemonPics pokemon={pokemon} key={index}/>
            })}
        </div>
    )
}

export default Pokemon