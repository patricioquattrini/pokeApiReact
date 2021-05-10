import React, { Component } from 'react';
import {traerInfo} from '../funcsAux';
import CartaPoke from "./cartaPokemon";
import Loading from "./Loading"
import "../css/style.css"

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
        <>
          {(this.state.pokemons.length === 0) ?<div className="centrar1">
                                                  <div className="centrar2">
                                                    <Loading/>
                                                  </div>
                                                </div>
                                                :""}

          <div>
                   
              {this.state.pokemons.map((p)=>(
              <div key={p[0].name} style={{float:"left", margin: "1em"}}>
                  <CartaPoke nombrePoke={(p[0]).name} urlImgPoke={p[0].sprites.front_default} tipoPoke={p[0].types} imgGrande={p[1]} orden={p[0].id} stats={p[0].stats}/>
              </div>))}
            
          </div>
        </>
      )     
    }
};

export default MostrarPokemons;