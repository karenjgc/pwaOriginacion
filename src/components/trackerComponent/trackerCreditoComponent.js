import React, { Component } from 'react';

//Components
import HeaderComponent from '../headerComponent';
import IdentificateComponent from './identificateComponent';
import InfoPersonalComponent from './infoPersonalComponent';
import DondeVivesComponent from './dondeVivesComponent';
import CapturaCredencialComponent from '../capturaCredencialComponent';

export default class TrackerCreditoComponent extends Component{
    headerData = [
        {
            mostrarFlecha: true,
            titulo: 'Solicita tu crédito',
            subtitulo: 'en tan solo ',
            strong: '3 pasos'
        },
        {
            mostrarFlecha: true,
            titulo: 'Cuéntanos sobre ti',
            subtitulo: 'tu crédito en ',
            strong: '3 pasos'
        },
        {
            mostrarFlecha: true,
            titulo: 'Ya falta poco',
            subtitulo: 'tu crédito en ',
            strong: '3 pasos'
        },
        {
            mostrarFlecha: true,
            titulo: 'Toma una foto',
            subtitulo: 'del frente de tu ',
            strong: 'INE/IFE'
        }
    ];

    state = {
        accion: 1,
        tracker: [
            {
                num: '1',
                titulo: 'Identifícate',
                mostrar: true
            },
            {
                num: '2',
                titulo: 'Información personal',
                mostrar: true
            },
            {
                num: '3',
                titulo: '¿Dónde vives?',
                mostrar: true
            },
            {
                num: '4',
                titulo: 'Agendar',
                mostrar: false
            }
        ]
    };

    actualizaAccion = (valor) => {
        this.setState({
            accion: valor
        })
    };

    cargaComponente = () => {
        switch(this.state.accion){
            case 1: return <IdentificateComponent actualizaAccion={ this.actualizaAccion }/>;
            case 2: return <InfoPersonalComponent actualizaAccion={ this.actualizaAccion }/>;
            case 3: return <DondeVivesComponent actualizaAccion={ this.actualizaAccion }/>;
            case 4: return <CapturaCredencialComponent actualizaAccion={ this.actualizaAccion }/>;
        }
    };

    render(){
        let accion = this.state.accion;

        return(
            <div className="cont-landing">
                <HeaderComponent headerData={ this.headerData[accion - 1] }/>
                {
                    accion < 4 ? <div className="cont-tracker u-pt-1">
                    <div className="tracker">
                            <strong><label className="u-color-primario">{ this.state.tracker[accion - 1].num }.&nbsp;</label>{ this.state.tracker[accion - 1 ].titulo }</strong>
                            <div className="tracker__identificador">
                                {
                                    this.state.tracker.map((val, index) => {
                                        if(val.mostrar){
                                            return( <span className={`${ (index + 1) <= accion ? 'tracker__identificador--active' : ''}`} key={ index }></span>)
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div> : null
                }
                {
                    this.cargaComponente()
                }
            </div>
        )
    }
}