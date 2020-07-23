import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import HeaderComponent from './headerComponent';

//Images
import icoCamara from '../assets/img/icoCamara.svg';
import icoCheck from '../assets/img/icoCheck.svg';

export default class TrackerCreditoComponent extends Component{
    headerData = {
		mostrarFlecha: true,
		titulo: 'Solicita tu crédito',
		subtitulo: 'en tan solo ',
		strong: '3 pasos'
    };

    state = {
        tipoFormulario: true,
        curp: '',
        sinCurp: false,
        codigo: '',
        sinCodigo: false
    };

    onChange = (e, boolean) => {
        let dataNombre = e.target.name;
        let dataValor = e.target.value;

        this.setState({
                [dataNombre]: boolean ? !this.state[dataNombre] : dataValor
        }, this.sendData);
    }

    irCaptura = () => {
        this.props.history.push('/captura-credencial');
    }

    render(){
        let accion = this.props.location.state ? this.props.location.state.accion : 1;
    
        return(
            <div className="cont-landing">
                <HeaderComponent headerData={ this.headerData }/>

                <div className="cont-form u-flex-auto u-pt-1">
                    <div className="tracker">
                        <strong><label className="u-color-primario">1.&nbsp;</label>Identifícate</strong>
                        <div className="tracker__identificador">
                            <span className="tracker__identificador--active"></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {
                        this.state.tipoFormulario ? 
                        <div className="u-pt-1">
                            <strong>Necesitamos datos de tu INE/IFE</strong>
                            <div className="u-flex-between u-pt-1">
                                <label className="u-txt-medium">Tomar foto INE</label>
                                <img className="u-cursor-pointer" src={ icoCamara } alt="icoCamara" onClick={ this.irCaptura }/>
                            </div>
                            <div className="u-flex-end">
                                <button name="tipoFormulario" className="btn-link-small" onClick={ (e) => this.onChange(e, true) }>Ingresar datos manualmente</button>
                            </div>                            
                        </div> :
                        <div className="u-pt-1">
                            <div className="input-group u-mb-0">
                                <label className="input-group__label">Ingresa tu CURP (18 dígitos)</label>
                                <div className="input-group__input">
                                    <input 
                                        name="curp"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.curp }
                                    />
                                    {
                                        this.state.curp !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                            <div className="u-flex u-align-center">
                                <label className="checkbox checkbox--input">
                                    <input 
                                        name="sinCurp"
                                        type="checkbox"
                                        checked={ this.state.sinCurp }
                                        onChange={ (e) => this.onChange(e, true) }
                                    />
                                    <span><small>No conozco mi CURP</small></span>
                                </label>
                            </div>
                            {
                                this.state.curp !== '' ? 
                                <div>
                                    <div className="cont-mensaje">
                                        <strong className="cont-mensaje__titulo">Datos personales</strong>
                                        <div>
                                            <strong>Nombre: </strong>
                                            <label className="u-txt-medium">Mariana López Loera</label>
                                        </div>
                                        <div>
                                            <strong>Fecha de nacimiento: </strong>
                                            <label className="u-txt-medium">10/09/1980</label>
                                        </div>
                                        <div>
                                            <strong>Lugar de nacimiento: </strong>
                                            <label className="u-txt-medium">CDMX</label>
                                        </div>
                                        <div>
                                            <strong>Sexo: </strong>
                                            <label className="u-txt-medium">Femenino</label>
                                        </div>
                                    </div>
                                    <div className="input-group u-mb-0">
                                        <label className="input-group__label">Código identificador de tu INE</label>
                                        <div className="input-group__input">
                                            <input 
                                                name="codigo"
                                                placeholder=""
                                                onChange={ (e) => this.onChange(e, false) }
                                                value={ this.state.codigo }
                                            />
                                            {
                                                this.state.codigo !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                            }
                                        </div>
                                    </div>
                                    <div className="u-flex u-align-center">
                                        <label className="checkbox checkbox--input">
                                            <input 
                                                name="sinCodigo"
                                                type="checkbox"
                                                checked={ this.state.sinCodigo }
                                                onChange={ (e) => this.onChange(e, true) }
                                            />
                                            <span><small>Mi credencial no tiene este dato</small></span>
                                        </label>
                                    </div>
                                </div> : null
                            }

                        </div>
                    }
                </div> 
                {
                    !this.state.tipoFormulario ?  <div className="btn-center">
                        <button className="btn btn--primario">Continuar</button>
                    </div> : null
                }
            </div>
        )
    }
}