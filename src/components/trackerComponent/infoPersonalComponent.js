import React, { Component } from 'react';

//Images
import icoCheck from '../../assets/img/icoCheck.svg';

export default class InfoPersonalComponent extends Component{

    state = {
        correoElectronico: '',
        muestraCorreos: false,
        correoElectronico2: '',
        muestraCorreos2: false,
        ingreso: '',
        comprobarIngresos: null
    };

    onChange = (e, boolean) => {
        let dataNombre = e.target.name;
        let dataValor = e.target.value;

        this.setState({
                [dataNombre]: boolean ? !this.state[dataNombre] : dataValor
        }, this.sendData);
    }

    muestraCorreos = (e, campoCorreo) => {
        let valorCorreo = e.target.value === '' ? false : true; 

        this.setState({
            [campoCorreo]: valorCorreo
        }, this.sendData);
    }

    autocompletar = (correo, campoCorreo) => {
        let muestraCorreos = campoCorreo === 'correoElectronico' ? 'muestraCorreos' : 'muestraCorreos2';

        this.setState({
            [campoCorreo]: correo,
            [muestraCorreos]: false
        }, this.sendData);
    }

    render(){
        let mostrarDatos = this.props.capturaDigital;

        return(
            <React.Fragment>
                <div className="cont-tracker__modulo">
                    {
                        mostrarDatos ? <div className="cont-mensaje">
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
                        </div> : null
                    }
                    <div className="cont-input">
                        <div className={`input-group u-mt-1 ${ this.state.muestraCorreos ? 'u-mb-0' : '' }`}>
                            <label className="input-group__label">Correo electrónico</label>
                            <div className="input-group__input">
                                <input 
                                    name="correoElectronico"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    onKeyUp={ (e) => this.muestraCorreos(e, 'muestraCorreos') }
                                    value={ this.state.correoElectronico }
                                />
                                {
                                    this.state.correoElectronico !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                            {
                                this.state.muestraCorreos ?
                                <div className="chips">
                                    <small onClick={ () => this.autocompletar('@gmail.com', 'correoElectronico') } className="chips__chip">@gmail.com</small>
                                    <small onClick={ () => this.autocompletar('@outlook.com', 'correoElectronico') } className="chips__chip">@outlook.com</small>
                                    <small onClick={ () => this.autocompletar('@hotmail.com', 'correoElectronico') } className="chips__chip">@hotmail.com</small>
                                    <small onClick={ () => this.autocompletar('@yahoo.com', 'correoElectronico') } className="chips__chip">@yahoo.com</small>
                                </div> : null
                            }
                        </div>
                        <div className={`input-group u-mt-1 ${ this.state.muestraCorreos2 ? 'u-mb-0' : '' }`}>
                            <label className="input-group__label">Confirmar correo electrónico</label>
                            <div className="input-group__input">
                                <input 
                                    name="correoElectronico2"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    onKeyUp={ (e) => this.muestraCorreos(e, 'muestraCorreos2') }
                                    value={ this.state.correoElectronico2 }
                                />
                                {
                                    this.state.correoElectronico2 !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                            {
                                this.state.muestraCorreos2 ?
                                <div className="chips">
                                    <small onClick={ () => this.autocompletar('@gmail.com', 'correoElectronico2') } className="chips__chip">@gmail.com</small>
                                    <small onClick={ () => this.autocompletar('@outlook.com', 'correoElectronico2') } className="chips__chip">@outlook.com</small>
                                    <small onClick={ () => this.autocompletar('@hotmail.com', 'correoElectronico2') } className="chips__chip">@hotmail.com</small>
                                    <small onClick={ () => this.autocompletar('@yahoo.com', 'correoElectronico2') } className="chips__chip">@yahoo.com</small>
                                </div> : null
                            }
                        </div>
                        <div className="input-group u-mt-1">
                            <label className="input-group__label">¿Cuánto ganas al mes?</label>
                            <div className="input-group__input">
                                <input 
                                    name="ingreso"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    value={ this.state.ingreso }
                                />
                                {
                                    this.state.ingreso !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                        </div>
                        <div className="input-group u-mt-1">
                            <label className="input-group__label">¿Tus ingresos son comprobables?</label>
                            <div className="input-group__input">
                                <div className="u-mr-1">
                                    <label className="u-txt-medium">Si</label>
                                    <label className="radio">
                                        <input type="radio" name="group"/>
                                        <span></span>
                                    </label>
                                </div>
                                <div className="u-mr-1">
                                    <label className="u-txt-medium">No</label>
                                    <label className="radio">
                                        <input type="radio" name="group"/>
                                        <span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}