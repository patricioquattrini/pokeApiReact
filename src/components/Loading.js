import {Component} from "react"
import "../css/style.css"

class Loading extends Component{
    render(){
        return(
        <>
            <div >
                <img style={{position: "absolute",right: "-180px"}} alt="pikachu" src="https://i.pinimg.com/originals/75/b6/c7/75b6c78c60c714b08f402c6b142e15cc.gif" />
                {console.log("dentro del loading")}
                
            </div>
            <div><center><h1 style={{marginTop: "300px"}}>Cargando...</h1></center></div>
        </>
        )
    }
}

export default Loading;

/*
CARGANDO CON POKEBOLA
<div className="pokebola">
                <div className="pokebola-botao"></div>
                {console.log("dentro del loading")}
            </div>
            <div ><h1>Cargando</h1></div>
*/