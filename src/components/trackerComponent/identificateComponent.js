import React, { Component } from 'react';

//Images
import icoCamara from '../../assets/img/icoCamara.svg';
import icoCheck from '../../assets/img/icoCheck.svg';
import { withRouter } from 'react-router-dom';

class IdentificateComponent extends Component{
    state = {
        tipoFormulario: true,
        curp: '',
        sinCurp: false,
        codigo: '',
        sinCodigo: false,
        claveElector: '',
        folio: '',
        anoRegistro: '',
        nombre: '',
        apellidoMaterno: '',
        apellidoPaterno: '',
        diaNacimiento: '',
        mesNacimiento: '',
        anoNacimiento: '',
        genero: '0',
        estado: '0'
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

    evaluaDatosPersonales = () => {
        let valido = true;

        for(let dato of Object.keys(this.state)){
            if(
                dato === 'nombre' || 
                dato === 'apellidoMaterno' || 
                dato === 'apellidoPaterno' || 
                dato === 'diaNacimiento' ||
                dato === 'mesNacimiento' ||
                dato === 'anoNacimiento' ||
                dato === 'genero' ||
                dato === 'estado'
            ){
                if(!this.state[dato] || this.state[dato]  === '' || +this.state[dato] === 0){
                    valido = false;
                    break;
                }
            }
        }

        return valido;
    }

    render(){
        let genero = ['Mujer', 'Hombre'];
        let estado = ['Chihuahua', 'CDMX'];

        return(
            <React.Fragment>
                <div className="cont-tracker__modulo">
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
                                    this.state.sinCurp ? 
                                    <React.Fragment>
                                        <div className="input-group u-mt-1">
                                            <label className="input-group__label">Nombre (s)</label>
                                            <div className="input-group__input">
                                                <input 
                                                    name="nombre"
                                                    placeholder=""
                                                    onChange={ (e) => this.onChange(e, false) }
                                                    value={ this.state.nombre }
                                                />
                                                {
                                                    this.state.nombre !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                }
                                            </div>
                                        </div> 
                                        <div className="input-group u-mt-1">
                                            <label className="input-group__label">Apellido paterno</label>
                                            <div className="input-group__input">
                                                <input 
                                                    name="apellidoPaterno"
                                                    placeholder=""
                                                    onChange={ (e) => this.onChange(e, false) }
                                                    value={ this.state.apellidoPaterno }
                                                />
                                                {
                                                    this.state.apellidoPaterno !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                }
                                            </div>
                                        </div> 
                                        <div className="input-group u-mt-1">
                                            <label className="input-group__label">Apellido materno</label>
                                            <div className="input-group__input">
                                                <input 
                                                    name="apellidoMaterno"
                                                    placeholder=""
                                                    onChange={ (e) => this.onChange(e, false) }
                                                    value={ this.state.apellidoMaterno }
                                                />
                                                {
                                                    this.state.apellidoMaterno !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="input-group u-mt-1">
                                            <label className="input-group__label">Fecha de nacimiento</label>
                                            <div className="u-flex">
                                                <div className="input-group__input input-group__input--simple u-mr-1">
                                                    <input 
                                                        name="diaNacimiento"
                                                        className="u-txt-center"
                                                        placeholder="DD"
                                                        onChange={ (e) => this.onChange(e, false) }
                                                        value={ this.state.diaNacimiento }
                                                    />
                                                </div>
                                                <div className="input-group__input input-group__input--simple u-mr-1">
                                                    <input 
                                                        name="mesNacimiento"
                                                        className="u-txt-center"
                                                        placeholder="MM"
                                                        onChange={ (e) => this.onChange(e, false) }
                                                        value={ this.state.mesNacimiento }
                                                    />
                                                </div>
                                                <div className="input-group__input input-group__input--simple">
                                                    <input 
                                                        name="anoNacimiento"
                                                        className="u-txt-center"
                                                        placeholder="AAAA"
                                                        onChange={ (e) => this.onChange(e, false) }
                                                        value={ this.state.anoNacimiento }
                                                    />
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="u-flex">
                                            <div className="input-group u-w-50 u-mr-1 u-mb-0">
                                                <label className="input-group__label">Género</label>
                                                <div className="input-group__input">
                                                    <select 
                                                            name="genero" 
                                                            className="formControl formControlArrow formControl--primary" 
                                                            onChange={ (e) => this.onChange(e, false) }
                                                        >
                                                            <option value="0">Elige una opción</option>
                                                            {
                                                                genero.map((val, index) => {
                                                                    return ( <option value={ index + 1 } key={ index }>{ val }</option>)
                                                                })
                                                            }
                                                    </select>
                                                    {
                                                        this.state.genero !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
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
                                                                estado.map((val, index) => {
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
                                    </React.Fragment> : null
                                }
                                {
                                    this.state.curp !== '' || this.evaluaDatosPersonales() ? 
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
                                        {
                                            this.state.sinCodigo ? 
                                            <React.Fragment>
                                                <div className="input-group u-mt-1">
                                                    <label className="input-group__label">Clave de elector</label>
                                                    <div className="input-group__input">
                                                        <input 
                                                            name="claveElector"
                                                            placeholder=""
                                                            onChange={ (e) => this.onChange(e, false) }
                                                            value={ this.state.claveElector }
                                                        />
                                                        {
                                                            this.state.claveElector !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                        }
                                                    </div>
                                                </div> 
                                                <div className="input-group">
                                                    <label className="input-group__label">Folio (13 dígitos)</label>
                                                    <div className="input-group__input">
                                                        <input 
                                                            name="folio"
                                                            placeholder=""
                                                            onChange={ (e) => this.onChange(e, false) }
                                                            value={ this.state.folio }
                                                        />
                                                        {
                                                            this.state.folio !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                        }
                                                    </div>
                                                </div> 
                                                <div className="input-group">
                                                    <label className="input-group__label">Año de registro</label>
                                                    <div className="input-group__input">
                                                        <input 
                                                            name="anoRegistro"
                                                            placeholder=""
                                                            onChange={ (e) => this.onChange(e, false) }
                                                            value={ this.state.anoRegistro }
                                                        />
                                                        {
                                                            this.state.anoRegistro !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                                        }
                                                    </div>
                                                </div> 
                                            </React.Fragment> : null
                                        }
                                    </div> : null
                                }
                            </div>
                        }
                </div>
                {
                    this.state.inicioTracker ?  <div className="btn-center">
                        <button className="btn btn--primario">Continuar</button>
                    </div> : null
                }
            </React.Fragment>
        )
    }
}

export default withRouter(IdentificateComponent);