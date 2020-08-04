import React, { Component } from 'react';
import Select from 'react-select'

//Images
import icoCheck from '../../assets/img/icoCheck.svg';
import { withRouter } from 'react-router';

class DondeVivesComponent extends Component{

    state = {
        cp: '',
        estado: '0',
        alcaldia: '',
        colonia: '',
        calle: '',
        numExterior: '',
        numInterior: '',
        calles: '',
        referencia: '',
        formaContacto: false
    };

    onChange = (e, boolean) => {
        let dataNombre = e.target.name;
        let dataValor = e.target.value;

        this.setState({
                [dataNombre]: boolean ? !this.state[dataNombre] : dataValor
        }, this.sendData);
    }

    seleccionarEstado = (e) => {
        let dataValor = e.target.value;

        this.setState({
            estado: dataValor,
            alcaldia: 'Álvaro Obregón',
            colonia: 'Del Valle'
        }, this.sendData);
    }

    irAgendar = () => {
        this.props.history.push('/agendar-cita');
    }

    render(){
        let estados = [
            { value: '1', label: 'Chihuahua' },
            { value: '2', label: 'CDMX' },
            { value: '3', label: 'Durango' }
        ];

        return(
            <React.Fragment>
                <div className="cont-tracker__modulo">
                    <div className="cont-input">
                        <div className="input-group__doble u-mt-1">
                            <div className="input-group u-mr-1">
                                <label className="input-group__label">Código postal</label>
                                <div className="input-group__input">
                                    <input 
                                        name="cp"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.cp }
                                    />
                                    {
                                        this.state.cp !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Estado</label>
                                <div className="input-group__input">
                                    <Select 
                                        name="estado"
                                        className="select-lista" 
                                        classNamePrefix="select-lista__select" 
                                        placeholder="Elige una opción"
                                        options={ estados }
                                        onChange={ (e) => this.seleccionarEstado({target: { name:'estado', value: e.value }}) }
                                    />
                                    {
                                        this.state.estado !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
                                    }
                                </div>
                            </div> 
                        </div>

                        <div className="input-group__doble u-mt-1">
                            <div className="input-group u-mr-1">
                                <label className="input-group__label">Alcaldia / Delegación</label>
                                <div className={`input-group__input ${ this.state.alcaldia !== '' ? 'input-group__input--desac' : ''}`}>
                                    <input 
                                        name="alcaldia"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.alcaldia }
                                    />
                                    {
                                        this.state.alcaldia !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">Colonia</label>
                                <div className={`input-group__input ${ this.state.colonia !== '' ? 'input-group__input--desac' : ''}`}>
                                    <input 
                                        name="colonia"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.colonia }
                                    />
                                    {
                                        this.state.colonia !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-group__label">Calle</label>
                            <div className="input-group__input">
                                <input 
                                    name="calle"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    value={ this.state.calle }
                                />
                                {
                                    this.state.calle !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                        </div>
                        
                        <div className="input-group__doble">
                            <div className="input-group u-mr-1">
                                <label className="input-group__label">No.exterior</label>
                                <div className="input-group__input">
                                    <input 
                                        name="numExterior"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.numExterior }
                                    />
                                    {
                                        this.state.numExterior !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                            <div className="input-group">
                                <label className="input-group__label">No.interior (opcional)</label>
                                <div className="input-group__input">
                                    <input 
                                        name="numInterior"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.numInterior }
                                    />
                                    {
                                        this.state.numInterior !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="input-group__label">¿Entre qué calles se encuentra tu domicilio?</label>
                            <div className="input-group__input">
                                <input 
                                    name="calles"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    value={ this.state.calles }
                                />
                                {
                                    this.state.calles !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                        </div>
                        
                        <div className="input-group">
                            <label className="input-group__label">Ayúdanos a identificar tu casa <small className="input-group__small input-group__small--negro">(puerta, fachada)</small></label>
                            <div className="input-group__input">
                                <input 
                                    name="referencia"
                                    placeholder=""
                                    onChange={ (e) => this.onChange(e, false) }
                                    value={ this.state.referencia }
                                />
                                {
                                    this.state.referencia !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="u-flex u-align-center">
                        <label className="checkbox">
                            <input 
                                name="formaContacto"
                                type="checkbox"
                                checked={ this.state.formaContacto }
                                onChange={ (e) => this.onChange(e, true) }
                            />
                            <span></span>
                        </label>
                        <small>He leído y acepto la <a className="u-color-primario" href="facebook.com">firma de contratos.</a></small>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(DondeVivesComponent);