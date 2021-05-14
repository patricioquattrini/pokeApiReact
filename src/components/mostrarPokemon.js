import React, { Component } from 'react';
import { hacer10Fetch } from '../funcsAux';
import CartaPoke from "./cartaPokemon";
import Loading from "./Loading"
import "../css/style.css"
import BuscarPokemon from "./buscarPokemon"


class MostrarPokemons extends Component{
  
    constructor(props) {
      super(props);
      this.state={
        pokemons:[],
        estadoAnterior:[]
      
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
            pokemons: this.state.pokemons.concat(datas),
            estadoAnterior: this.state.pokemons.concat(datas)
          })
      }
      
    };
    actualizarState = (pokemons) =>{
      this.setState({ pokemons })
    }

    render(){
      this.traerInfo();
      
      return(
        <>
          {(this.state.estadoAnterior.length === 0) ?<div className="centrar1">
                                                  <div className="centrar2">
                                                    <Loading/>
                                                  </div>
                                                </div>
                                                :""}

          <div>
              
              <div style={{background:"#e81239"}}><img alt="logopokemon" className="tituloTopPokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
              <h6>Version: 1.0.2</h6>
              </div>         
              
              <BuscarPokemon pokemonsActuales={this.state.estadoAnterior} statePokemon={this.actualizarState}/>
              
              {(this.state.pokemons.length > 0) ?
                this.state.pokemons.map((p)=>(
                  <div key={p[0].name} style={{float:"left", margin: "1em"}}>
                      <CartaPoke nombrePoke={(p[0]).name} urlImgPoke={p[0].sprites.front_default} tipoPoke={p[0].types} imgGrande={p[1]} orden={p[0].id} stats={p[0].stats}/>
                  </div>))
              :<h4>No se encontraron resultados</h4>
              }
               
              
              
          </div>
                  
        </>
      )     
    }
};

export default MostrarPokemons;