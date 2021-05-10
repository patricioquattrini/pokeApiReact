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
            <div ><h1>Cargando</h1></div>
        </>
        )
    }
}

export default Loading;
