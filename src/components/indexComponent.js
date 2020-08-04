import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { layoutGenerator } from 'react-break';

//Components
import HeaderComponent from './headerComponent';

//Images
import imgLanding from '../assets/img/imgLanding.png';
import imgLandingDesktop from '../assets/img/imgLandingDesktop.png';

export default class IndexComponent extends Component{

    headerData = {
		mostrarFlecha: false,
		titulo: '¡Hola!',
		subtitulo: '',
		strong: ''
    };

    layout = layoutGenerator({
        mobile: 0,
        desktop: 1024
    });
    
    OnDesktop = this.layout.isAtLeast('desktop');
    OnMobile = this.layout.is('mobile');

    render(){
        return(
            <div className="cont-landing cont-landing--gris">
                <HeaderComponent headerData={ this.headerData }/>
                
                <this.OnMobile>
                    <img className="u-w-100" src={ imgLanding } alt="imgLanding"/>
                </this.OnMobile>
                <this.OnMobile>
                    <div className="titulo-landing">
                            <label className="titulo-landing__titulo">Confiamos en ti</label>
                            <label className="titulo-landing__titulo">y <strong>te decimos cómo sí</strong></label>
                            <label className="titulo-landing__titulo">obtener un crédito.</label>
                    </div>
                </this.OnMobile>

                <this.OnDesktop>
                    <img className="u-w-100" src={ imgLandingDesktop } alt="imgLanding"/>
                </this.OnDesktop>
                <this.OnDesktop>
                    <div className="titulo-landing">
                        <strong className="titulo-landing__titulo u-mb-2">¡Hola!</strong>
                        <label className="titulo-landing__titulo">Confiamos en ti y <strong>te decimos cómo sí</strong></label>
                        <label className="titulo-landing__titulo">obtener un crédito.</label>
                    </div>
                </this.OnDesktop>

                <div className="btn-center">
                    <Link to={{ pathname: '/solicitud-credito' }} className="btn btn--primario">Lo quiero ahora</Link>
                </div>
            </div>
        )
    }
}