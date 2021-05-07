import React, { Component } from 'react';
import {traerInfo} from '../funcsAux';
import CartaPoke from "./cartaPokemon";

class MostrarPokemons extends Component{
  
    constructor(props) {
      super(props);
      this.state={
        pokemons:[],
      };   
    }
    
    buscarPokemons = async () =>{
      this.setState({
        pokemons: await traerInfo(),
      })
    }
    
    render(){
      if(this.state.pokemons.length === 0){
        this.buscarPokemons();
      }

      return(
        
          <li style={{opacity: "1", top: "0.05px", left: "0px", transform: "matrix(1, 0, 0, 1, 0, 0)",}}>        
            {this.state.pokemons.map((p)=>(
            <div key={p[0].name} style={{float:"left", margin: "1em"}}>
                <CartaPoke nombrePoke={(p[0]).name} urlImgPoke={p[0].sprites.front_default} tipoPoke={p[0].types} imgGrande={p[1]} orden={p[0].id} stats={p[0].stats}/>
              </div>))}
          </li>
        
      )     
    }
};

export default MostrarPokemons;