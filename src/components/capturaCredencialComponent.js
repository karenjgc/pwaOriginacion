import React, { Component } from 'react';

//Images
import icoCamaraGris from '../assets/img/icoCamaraGris.svg';
import imgIneFrente from '../assets/img/imgIneFrente.jpg';
import imgIneAtras from '../assets/img/imgIneAtras.jpg';
import { withRouter } from 'react-router';

class CapturaCredencialComponent extends Component{
    state = {
        tipoImg: 1,
        imgSeleccionada: icoCamaraGris
    };

    headerData = {
		mostrarFlecha: true,
		titulo: 'Toma una foto',
		subtitulo: 'del frente de tu ',
		strong: 'INE/IFE'
    };
    
    cambiaImagen = () => {
        let tempTipoImg = this.state.tipoImg;
        let tempImgSeleccionada;

        tempTipoImg++;

        switch(tempTipoImg){
            case 1:
                tempImgSeleccionada = icoCamaraGris;
            break;
            case 2: 
                tempImgSeleccionada = imgIneFrente;
            break;
            case 3:
                tempImgSeleccionada = imgIneAtras;
            break;
            case 4:
                this.props.actualizaAccion(2);
            break;
            default:
                tempImgSeleccionada = icoCamaraGris;
        }

        this.setState({
            tipoImg: tempTipoImg,
            imgSeleccionada: tempImgSeleccionada
        }, this.sendData);
    };

    render(){
        return(
            <div className="u-flex-auto cont-captura">
                <div className={`cont-captura__img ${ (this.state.tipoImg === 2 || this.state.tipoImg === 3) ? 'cont-captura__img--verde cont-captura__img--foto' : ''}`} onClick={ this.cambiaImagen }>
                    <img src={ this.state.imgSeleccionada } alt="icoCamaraGris"/>
                </div>
            </div>  
        )
    }
}

export default withRouter(CapturaCredencialComponent);