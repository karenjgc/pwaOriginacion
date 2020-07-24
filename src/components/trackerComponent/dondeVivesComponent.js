import React, { Component } from 'react';

//Images
import icoCheck from '../../assets/img/icoCheck.svg';

export default class DondeVivesComponent extends Component{

    state = {
        cp: '',
        estado: '0',
        alcaldia: '',
        colonia: '',
        calle: '',
        numExterior: '',
        numInterior: '',
        calles: '',
        referencia: ''
    };

    onChange = (e, boolean) => {
        let dataNombre = e.target.name;
        let dataValor = e.target.value;

        this.setState({
                [dataNombre]: boolean ? !this.state[dataNombre] : dataValor
        }, this.sendData);
    }

    render(){
        let estados = ['Chihuahua', 'CDMX', 'Durango'];

        return(
            <div className="cont-tracker__modulo">
                <div  className="u-flex u-mt-1">
                <div className="input-group u-mb-0 u-mr-1">
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
                    <div className="input-group u-w-50 u-mb-0">
                        <label className="input-group__label">Estado</label>
                        <div className="input-group__input">
                                <select 
                                    name="estado" 
                                    className="formControl formControlArrow formControl--primary" 
                                    onChange={ (e) => this.onChange(e, false) }
                                >
                                    <option value="0">Elige una opción</option>
                                    {
                                        estados.map((val, index) => {
                                            return ( <option value={ index + 1 } key={ index }>{ val }</option>)
                                        })
                                    }
                            </select>
                            {
                                this.state.estado !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
                            }
                        </div>
                    </div> 
                </div>
                <div className="u-flex u-mt-1">
                    <div className="input-group u-mb-0 u-mr-1">
                        <label className="input-group__label">Alcaldia / Delegación</label>
                        <div className="input-group__input">
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
                    <div className="input-group u-mb-0">
                        <label className="input-group__label">Colonia</label>
                        <div className="input-group__input">
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
                <div className="input-group u-mt-1">
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
                <div className="u-flex u-mt-1">
                    <div className="input-group u-mb-0 u-mr-1">
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
                    <div className="input-group u-mb-0">
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
                <div className="input-group u-mt-1">
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
                <div className="input-group u-mt-1">
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
        )
    }
}