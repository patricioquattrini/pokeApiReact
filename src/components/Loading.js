import {Component} from "react"
import "../css/style.css"

class Loading extends Component{
    render(){
        return(
        <>
           <div className="pokebola">
                <div className="pokebola-botao"></div>
                {console.log("dentro del loading")}
            </div>
            <div><center><h1 style={{marginTop: "50px"}}>Loading...</h1></center></div>
        </>
        )
    }
}

export default Loading;

/*
Cargando con img

<>
            <div >
                <img style={{position: "absolute",right: "-48vh", top:"-150px"}} alt="pokeCarga" src="https://static.alfabetajuega.com/abj_public_files/multimedia/imagenes/201706/196349.alfabetajuega-pokemon-go-pantalla-carga-2-230617---copia.png" />
               
                
            </div>
            <div><center><h1 style={{marginTop: "470px"}}>Loading...</h1></center></div>
        </>



CARGANDO CON POKEBOLA
<div className="pokebola">
                <div className="pokebola-botao"></div>
                {console.log("dentro del loading")}
            </div>
            <div ><h1>Cargando</h1></div>
*/