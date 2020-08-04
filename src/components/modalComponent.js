import React, { Component } from 'react';

//Images
import imgAgendar from '../assets/img/imgAgendar.png';

export default class ModalComponent extends Component{
    render(){
        document.body.style.overflow = this.props.modalAbierto ? "hidden" : "auto";

        return(
            this.props.modalAbierto ? 
            <div onClick={ this.props.abrirModal } className="modal-overlay">
                <div className="modal-contenido">
                    <div className="modal-contenido__listo">
                        <div className="modal-contenido__banner">
                            <img src={ imgAgendar } alt="imgAgendar"/>
                        </div>
                        <div className="modal-contenido__mensaje">
                            <h1 className="u-mb-1"><strong>¡Listo, Mariana!</strong></h1>
                            <label>Uno de nuestros asesores te llamará del</label>
                            <label>número <strong>55 7099 0800</strong> para poder concluir</label>
                            <label className="u-mb-1">con tu trámite.</label>
                            <label>O si prefieres acelerar el proceso:</label>
                        </div>
                        <div className="btn-center">
                            <button className="btn btn--primario">Llamar ahora</button>
                        </div>
                    </div>
                </div>
            </div> : null
        )
    }
}