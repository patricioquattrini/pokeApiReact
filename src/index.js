import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import MostrarPokemons from "./components/mostrarPokemon";
  
ReactDOM.render(
  <React.StrictMode>
    <MostrarPokemons />
  </React.StrictMode>,
  document.getElementById('root')
);
