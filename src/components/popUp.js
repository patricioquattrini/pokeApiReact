import React, { Component } from 'react';
import {Col, Container, Modal, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import primeraLetraMayus from "../funcsAux";
import TipoPokemon from "./tipoPokemon";
import "../css/style.css";
import Radar from "./grafico"

class PopUpPokemon extends Component {
    constructor(props){
        super(props);
        this.instancia ="";
        this.state={
            showModal: false,
        }
    }
    
    

    abrirModal(){
        this.setState({showModal: !this.state.showModal})
    }
    
    render(){
        
        return(
           <> 
                <button className="estiloBoton" centered="true" onClick={() => this.abrirModal()}>Clickeame</button>
                <Modal dialogClassName="modal-50w" centered show={this.state.showModal} onHide={() => this.abrirModal()}>
                    
                   
                        <Modal.Header closeButton>
                            <div className="tituloPopup">{`${primeraLetraMayus(this.props.nombrePoke)} N.°${this.props.orden}`}</div>
                        </Modal.Header>
                        <Container>
                            <Row>       
                                <Col md={6}>
                                    <img className="imagenGrande" alt={this.props.imgGrande} src={this.props.imgGrande} />
                                </Col>        
                                
                                <Col md={6}>
                                    <div className="tipoPokemonPopUp"><h3>Tipo</h3>
                                        {this.props.tipoPokemon.map((t,i)=>(
                                        <span key={i} className={`pill ${t.type.name}`} ><TipoPokemon tipo={t.type.name} /></span>))}
                                    </div>
                                    <div className="graficoStats">
                                        <div><Radar stats={this.props.stats} /></div>
                                    </div>
                                </Col>    
                                            
                            </Row>
                        </Container>
      
                </Modal>
            </>
        );
    } 
    
};

export default PopUpPokemon;




