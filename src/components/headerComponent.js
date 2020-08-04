import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { layoutGenerator } from 'react-break';

//Images
import icoFlechaIzquierda from '../assets/img/icoFlecha.svg';
import icoFlechaVerde from '../assets/img/icoFlechaVerde.svg';
import imgBancoAzteca from '../assets/img/imgBancoAzteca.png';

class HeaderComponent extends Component{

    irAtras = () => {
        this.props.history.goBack();
    }

    layout = layoutGenerator({
        mobile: 0,
        desktop: 1024
    });
    
    OnDesktop = this.layout.isAtLeast('desktop');
    OnMobile = this.layout.is('mobile');

    render(){
        let headerData = this.props.headerData;

        return(
            <header className="header">
                <this.OnDesktop className="u-w-100">
                    <img className="header__logo" src={ imgBancoAzteca } alt="imgBancoAzteca"/>
                    <div className="header-desk-titulo">
                        {
                            headerData.mostrarFlecha ? 
                            <React.Fragment>
                                <div className="header-desk-titulo__titulo">
                                    {
                                        headerData.mostrarFlecha ? <img onClick={ this.irAtras } src={ icoFlechaVerde } alt="icoFlechaIzquierda"/> : null
                                    }
                                    <h1>{ headerData.titulo }</h1>
                                </div>
                                <div className="header-desk-titulo__subtitulo">
                                    {
                                        headerData.subtitulo !== '' ?  <h2>{ headerData.subtitulo }<strong className="u-color-primario">{ headerData.strong }</strong></h2> : null
                                    }
                                </div> 
                            </React.Fragment> : null
                        }
                    </div>
                </this.OnDesktop>
                <this.OnMobile className="u-w-100 u-flex">
                    {
                        headerData.mostrarFlecha ? <img onClick={ this.irAtras } src={ icoFlechaIzquierda } alt="icoFlechaIzquierda"/> : null
                    }
                    <div className="header-titulo">
                        <h1 className="header-titulo__titulo">{ headerData.titulo }</h1>
                        {
                            headerData.subtitulo !== '' ?  <h2 className="header-titulo__subtitulo">{ headerData.subtitulo }<strong className="u-color-secundario">{ headerData.strong }</strong></h2> : null
                        }
                    </div>
                </this.OnMobile>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);