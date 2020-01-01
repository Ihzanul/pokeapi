import React from 'react'

export default function PokemonList( {pokemon} ) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p} style={{marginTop:"10px"}}> 
          <a href={p.url}>{p.name}</a>
        </div>
      ))}
    </div>
  )
}
