import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import HeaderComponent from './headerComponent';

//Images
import imgLanding from '../assets/img/imgLanding.png';

export default class IndexComponent extends Component{

    headerData = {
		mostrarFlecha: false,
		titulo: '¡Hola!',
		subtitulo: '',
		strong: ''
    };
    
    render(){
        return(
            <div className="cont-landing cont-landing--gris">
                <HeaderComponent headerData={ this.headerData }/>
                <img className="u-w-100" src={ imgLanding } alt="imgLanding"/>
                <div className="titulo-landing">
                    <label className="titulo-landing__titulo">Confiamos en ti</label>
                    <label className="titulo-landing__titulo">y <strong>te decimos cómo sí</strong></label>
                    <label className="titulo-landing__titulo">obtener un crédito</label>
                </div>
                <div className="btn-center">
                    <Link to={{ pathname: '/solicitud-credito' }} className="btn btn--primario">Lo quiero ahora</Link>
                </div>
            </div>
        )
    }
}