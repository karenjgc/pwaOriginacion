import React, { Component } from 'react';

//Components
import HeaderComponent from './headerComponent';

//Images
import imgAgendar from '../assets/img/imgAgendar.png';

export default class AgendarCitaComponent extends Component{

    headerData = {
		mostrarFlecha: true,
		titulo: 'Agenda una cita',
		subtitulo: 'para obtener tu ',
		strong: 'crédito'
    };

    render(){
        return(
            <div className="cont-landing cont-landing--gris">
                <HeaderComponent headerData={ this.headerData }/>
                <div className="cont-agendar">
                    <div className="cont-agendar__img">
                        <img src={ imgAgendar } alt="imgAgendar"/>
                    </div>
                    <div className="u-flex-column u-txt-center">
                        <h1 className="u-mb-1"><strong>¡Listo, Mariana!</strong></h1>
                        <label>Uno de nuestros asesores te llamará del</label>
                        <label>número <strong>55 7099 0800</strong> para poder concluir</label>
                        <label className="u-mb-1">con tu trámite.</label>
                        <label>O si prefieres acelerar el proceso:</label>
                    </div>
                </div>
                <div className="btn-center">
                    <button className="btn btn--primario">Llamar ahora</button>
                </div>
            </div>
        )
    }
}