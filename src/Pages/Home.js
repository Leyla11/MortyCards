import React from 'react'
import personajes from '../MortyInfo'
import MortyCard from '../Components/MortyCard'

export const Home = () => {
  return (
    <div className='container'>
    {personajes.map(personaje=>(
        <MortyCard key={personaje.nombre} elemento={personaje} />
    ))}
    </div>
  )
}

export default Home