import React, { Component } from 'react';

//Images
import icoFlechaIzquierda from '../assets/img/icoFlecha.svg';
import { withRouter } from 'react-router';

class HeaderComponent extends Component{

    irAtras = () => {
        this.props.history.goBack();
    }

    render(){
        let headerData = this.props.headerData;

        return(
            <header className="header">
                {
                    headerData.mostrarFlecha ? <img onClick={ this.irAtras } src={ icoFlechaIzquierda } alt="icoFlechaIzquierda"/> : null
                }
                
                <div className="header-titulo">
                    <h1 className="header-titulo__titulo">{ headerData.titulo }</h1>
                    {
                        headerData.subtitulo !== '' ?  <h2 className="header-titulo__subtitulo">{ headerData.subtitulo }&nbsp;<strong className="u-color-secundario">{ headerData.strong }</strong></h2> : null
                    }
                </div>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);