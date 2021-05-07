import React, { Component } from 'react';
import TipoPokemon from "./tipoPokemon";
import "../css/style.css";
import primeraLetraMayus from "../funcsAux";
import PopUpPokemon from "./popUp";



class CartaPoke extends Component{
  
  render(){
  
    return(
    <>
      <div className="cartaPokemon" >
        <img className="figuraPokemon" alt={this.props.urlImgPoke} src={this.props.urlImgPoke} />
        <div className="pokeInfo">
            <h5 className="tituloPokemon">{primeraLetraMayus(this.props.nombrePoke)}</h5>
              
            <div className="tiposDelPokemon"> 
              {this.props.tipoPoke.map((t,i)=>(
                <span className={`pill ${t.type.name}`}><TipoPokemon key={i} tipo={t.type.name} /></span>
            ))}
            </div>
        </div>
        
        <center><PopUpPokemon tipoPokemon={this.props.tipoPoke} imgGrande={this.props.imgGrande} nombrePoke={this.props.nombrePoke} orden={this.props.orden} stats={this.props.stats}/></center>      
                
      </div>
    </>
    )
  }
};

export default CartaPoke;
