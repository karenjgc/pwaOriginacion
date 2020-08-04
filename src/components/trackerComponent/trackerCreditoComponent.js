import React, { Component } from 'react';
import { layoutGenerator } from 'react-break';

//Components
import HeaderComponent from '../headerComponent';
import IdentificateComponent from './identificateComponent';
import InfoPersonalComponent from './infoPersonalComponent';
import DondeVivesComponent from './dondeVivesComponent';
import CapturaCredencialComponent from '../capturaCredencialComponent';
import ModalComponent from '../modalComponent';

//Images
import icoLlamada from '../../assets/img/icoLlamada.svg';

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

    layout = layoutGenerator({
        mobile: 0,
        desktop: 1024
    });
    
    OnDesktop = this.layout.isAtLeast('desktop');
    OnMobile = this.layout.is('mobile');

    state = {
        accion: 1,
        mostrarBoton: false,
        modalAbierto: false,
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
            case 1: return <IdentificateComponent actualizaAccion={ this.actualizaAccion } muestraBoton={ this.muestraBoton }/>;
            case 2: return <InfoPersonalComponent/>;
            case 3: return <DondeVivesComponent/>;
            case 4: return <CapturaCredencialComponent actualizaAccion={ this.actualizaAccion } muestraBoton={ this.muestraBoton }/>;
            default: return <h2>No se ha encontrado el componente</h2>;
        }
    };

    muestraBoton = () => {
        this.setState({
            mostrarBoton: !this.state.mostrarBoton
        });
    };

    abrirModal = () => {
        this.setState({
            modalAbierto: !this.state.modalAbierto
        });
    }

    agendarCita = () => {
        this.props.history.push('/agendar-cita');
    }
    
    render(){
        let accion = this.state.accion;

        return(
            <div className="cont-landing">
                <HeaderComponent headerData={ this.headerData[accion - 1] }/>

                <div className="cont-tracker">
                    {
                        accion < 4 ? <div className="cont-tracker__tracker u-pt-1">
                        <div className="tracker">
                                <strong><label className="u-color-primario">{ this.state.tracker[accion - 1].num }.&nbsp;</label>{ this.state.tracker[accion - 1 ].titulo }</strong>
                                <div className="tracker__identificador">
                                    {
                                        this.state.tracker.map((val, index) => {
                                            return (val.mostrar ? <span className={`${ (index + 1) <= accion ? 'tracker__identificador--active' : ''}`} key={ index }></span> : null)
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

                <this.OnMobile>
                    {
                        this.state.mostrarBoton ? <div className="btn-center">
                            <button onClick={ () => accion === 3 ? this.agendarCita() : this.actualizaAccion(accion + 1) } className="btn btn--primario">Continuar</button>
                        </div> : null
                    }
                </this.OnMobile>
                
                <this.OnDesktop>
                    <div className="btn-center">
                        <button onClick={ accion ===  3 ? this.abrirModal : () =>  this.actualizaAccion(accion + 1) } className="btn btn--primario">Continuar</button>
                    </div> 
                </this.OnDesktop>

                <ModalComponent modalAbierto={ this.state.modalAbierto } abrirModal={ this.abrirModal }/>

                {
                    accion < 4 ? <div className="btn-llamada">
                        <img src={ icoLlamada } alt="icoLLamada"/>
                    </div> : null
                }
            </div>
        )
    }
}