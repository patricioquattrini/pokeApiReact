import React, { Component } from 'react';


class BuscarPokemon extends Component{
    
    
    buscarCambios (event){
        var text = event.target.value;
        
        let pokeFiltro = this.filtrarPokemons(text,this.props.pokemonsActuales)
        this.props.statePokemon(pokeFiltro)
       
            
        
    }

    filtrarPokemons (poke, listPoke){
        return listPoke.filter(p => p[0].name.indexOf(poke) !== -1)
    }

    render(){
    
        return(

            <>
                <div className="input-group mb-3" style={{width:"20%"}}>
                    <span className="input-group-text" id="basic-addon1">Search Pokemon</span>
                    <input className="form-control" aria-describedby="basic-addon1" onChange={this.buscarCambios.bind(this)} />
                </div>
                
                
               
            </>
        )
    }
}

export default BuscarPokemon