import React, { Component } from 'react';
import "../css/style.css"
import primeraLetraMayus from "../funcsAux"

class TipoPokemon extends Component{
    
    render(){
        return(
           <span>{primeraLetraMayus(this.props.tipo)}</span>
        )
    }
};

export default TipoPokemon;

