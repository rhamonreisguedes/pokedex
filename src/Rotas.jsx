import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Pokedex from './pokedex/Pokedex';
import PokemonDetails from './pokemon/services/PokemonDetails';


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex />}/>
        <Route path='/pokemon/:name'  element={< PokemonDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;