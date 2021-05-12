import React, { Component } from 'react';
import { hacer10Fetch } from '../funcsAux';
import CartaPoke from "./cartaPokemon";
import Loading from "./Loading"
import "../css/style.css"


class MostrarPokemons extends Component{
  
    constructor(props) {
      super(props);
      this.state={
        pokemons:[],
      };   
      this.traidos = false;
    }
   
    
    traerInfo = async () => {
      if (this.traidos) 
        return;

      this.traidos = true;
      const imgUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
      
      for(let i = 0; i < 145; i= i+10){  
          // Buscar 10 pokemones nuevos en simultaneo  
          const datas = await hacer10Fetch(imgUrl, i);
         // Actualizar lista de pokemones en el state
         this.setState({
            pokemons: this.state.pokemons.concat(datas)
          })
      }
    };
    
    render(){
      this.traerInfo();

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