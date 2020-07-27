import React, { Component } from 'react';

//Components
import HeaderComponent from '../headerComponent';
import IdentificateComponent from './identificateComponent';
import InfoPersonalComponent from './infoPersonalComponent';
import DondeVivesComponent from './dondeVivesComponent';

export default class TrackerCreditoComponent extends Component{

    headerData = {
		mostrarFlecha: true,
		titulo: 'Solicita tu crédito',
		subtitulo: 'en tan solo ',
		strong: '3 pasos'
    };

    state = {
        accion: this.props.location.state ? 2 : 1,
        tracker: [
            {
                num: '1',
                titulo: 'Identifícate'
            },
            {
                num: '2',
                titulo: 'Información personal'
            },
            {
                num: '3',
                titulo: '¿Dónde vives?'
            },
            {
                num: '4',
                titulo: 'Agendar'
            }
        ]
    };

    actualizaAccion = () => {
        this.setState({
            accion: this.state.accion + 1
        })
    };

    cargaComponente = () => {
        switch(this.state.accion){
            case 1: return <IdentificateComponent actualizaAccion={ this.actualizaAccion }/>;
            case 2: return <InfoPersonalComponent actualizaAccion={ this.actualizaAccion }/>;
            case 3: return <DondeVivesComponent actualizaAccion={ this.actualizaAccion }/>;
            default: return <h1>Error de carga.</h1>
        }
    };

    render(){
        let accion = this.state.accion;

        return(
            <div className="cont-landing">
                <HeaderComponent headerData={ this.headerData }/>

                <div className="cont-tracker u-pt-1">
                    <div className="tracker">
                        <strong><label className="u-color-primario">{ this.state.tracker[accion - 1].num }.&nbsp;</label>{ this.state.tracker[accion - 1 ].titulo }</strong>
                        <div className="tracker__identificador">
                            {
                                this.state.tracker.map((val, index) => {
                                return( <span className={`${ (index + 1) <= accion ? 'tracker__identificador--active' : ''}`} key={ index }></span>)
                                })
                            }
                        </div>
                    </div>
                </div> 
                {
                    this.cargaComponente()
                }
            </div>
        )
    }
}