import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select'
import { layoutGenerator } from 'react-break';

//Images
import icoCamara from '../../assets/img/icoCamara.svg';
import icoCheck from '../../assets/img/icoCheck.svg';
import icoInterrogacion from '../../assets/img/icoInterrogacion.svg';

import imgAnoRegistro from '../../assets/img/tooltips/imgAnoRegistro.png';
import imgClaveElector from '../../assets/img/tooltips/imgClaveElector.png';
import imgCodigo from '../../assets/img/tooltips/imgCodigo.png';
import imgCurp from '../../assets/img/tooltips/imgCurp.png';
import imgFolio from '../../assets/img/tooltips/imgFolio.png';

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
        estado: '0',
        tooltips: {
            curpTooltip: false,
            codigoTooltip: false,
            claveTooltip: false,
            folioTooltip: false,
            anoTooltip: false
        }
    };

    layout = layoutGenerator({
        mobile: 0,
        desktop: 1025
    });
    
    OnDesktop = this.layout.isAtLeast('desktop');
    OnMobile = this.layout.is('mobile');

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

    mostrarTooltip = (nombreCampo) => {
        let datosNuevos = {};

        for(let tooltip of Object.keys(this.state.tooltips)){
            datosNuevos[tooltip] = tooltip === nombreCampo ? !this.state.tooltips[nombreCampo] : false
        }

        this.setState({
            tooltips: datosNuevos
        }, this.sendData);
    }

    conozcoCurp = () => {
        this.setState({
            sinCurp: !this.state.sinCurp,
            curp: '',
            nombre: '',
            apellidoMaterno: '',
            apellidoPaterno: '',
            diaNacimiento: '',
            mesNacimiento: '',
            anoNacimiento: '',
            genero: '0',
            estado: '0',
        }, this.sendData);
    }

    tipoFormulario = () => {
        this.setState({
            tipoFormulario: !this.tipoFormulario,
        });
        this.props.muestraBoton();
    }

    render(){
        let genero = [
            { value: '1', label: 'Mujer' },
            { value: '2', label: 'Hombre' }
        ];

        let estado = [
            { value: '1', label: 'Chihuahua' },
            { value: '2', label: 'CDMX' }
        ];

        return(
            <React.Fragment>
                <div className="cont-tracker__modulo">
                    <this.OnMobile>
                    {
                        this.state.tipoFormulario ? 
                            <div className="u-pt-1">
                                <strong>Necesitamos datos de tu INE/IFE</strong>
                                <div className="u-flex-between u-pt-1">
                                    <label className="u-txt-medium">Tomar foto INE</label>
                                    <img className="u-cursor-pointer" src={ icoCamara } alt="icoCamara" onClick={ () => this.props.actualizaAccion(4) }/>
                                </div>
                                <div className="u-flex-end">
                                    <button name="tipoFormulario" className="btn-link-small" onClick={ this.tipoFormulario }>
                                        Ingresar datos manualmente
                                    </button>
                                </div>                            
                            </div> :
                            <div className="u-pt-1">
                                <div className="input-group u-mb-0">
                                    <label className="input-group__label">Ingresa tu CURP (18 dígitos)</label>
                                    <div className={`input-group__input ${ this.state.sinCurp ? 'input-group__input--desac' : ''}`}>
                                        <input 
                                            name="curp"
                                            placeholder=""
                                            onChange={ (e) => this.onChange(e, false) }
                                            value={ this.state.curp }
                                        />
                                        {
                                            this.state.curp !== '' ? 
                                            <img src={ icoCheck } alt="icoCheck"/> : 
                                            <div className="tooltip">
                                                <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('curpTooltip') } alt="icoInterrogacion"/>
                                                {
                                                    this.state.tooltips.curpTooltip ?  <div className="tooltip__contenido">
                                                        <label className="tooltip__titulo">Ubica tu CURP</label>
                                                        <div className="tooltip__img">
                                                            <img src={ imgCurp } alt="imgIne"/>
                                                        </div>
                                                    </div> : null
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="u-flex u-align-center">
                                    <label className="checkbox checkbox--input">
                                        <input 
                                            name="sinCurp"
                                            type="checkbox"
                                            checked={ this.state.sinCurp }
                                            onChange={ (e) => this.conozcoCurp(e, true) }
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
                                                    <Select 
                                                        name="genero"
                                                        className="select-lista" 
                                                        classNamePrefix="select-lista__select" 
                                                        placeholder="Elige una opción"
                                                        options={ genero }
                                                        onChange={ (e) => this.onChange({target: { name:'genero', value: e.value }}) }
                                                    />
                                                    {
                                                        this.state.genero !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
                                                    }
                                                </div>
                                            </div> 
                                            <div className="input-group u-w-50 u-mb-0">
                                                <label className="input-group__label">Estado</label>
                                                <div className="input-group__input">
                                                    <Select 
                                                        name="estado"
                                                        className="select-lista" 
                                                        classNamePrefix="select-lista__select" 
                                                        placeholder="Elige una opción"
                                                        options={ estado }
                                                        onChange={ (e) => this.onChange({target: { name:'estado', value: e.value }}) }
                                                    />
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
                                    <React.Fragment>
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
                                                    this.state.codigo !== '' ? <img src={ icoCheck } alt="icoCheck"/> : (
                                                        <div className="tooltip">
                                                            <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('codigoTooltip') } alt="icoInterrogacion"/>
                                                            {
                                                                this.state.tooltips.codigoTooltip ? <div className="tooltip__contenido">
                                                                    <label className="tooltip__titulo">Ubica tu código identificador</label>
                                                                    <div className="tooltip__img">
                                                                        <img src={ imgCodigo } alt="imgIne"/>
                                                                    </div>
                                                                </div> : null
                                                            }
                                                        </div>
                                                    )
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
                                    </React.Fragment> : null
                                }
                                {
                                    this.state.sinCodigo && (this.state.curp !== '' || this.evaluaDatosPersonales()) ? 
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
                                                    this.state.claveElector !== '' ? <img src={ icoCheck } alt="icoCheck"/> :
                                                    <div className="tooltip">
                                                        <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('claveTooltip') } alt="icoInterrogacion"/>
                                                        {
                                                            this.state.tooltips.claveTooltip ? <div className="tooltip__contenido">
                                                                <label className="tooltip__titulo">Ubica tu clave de elector</label>
                                                                <div className="tooltip__img">
                                                                    <img src={ imgClaveElector } alt="imgIne"/>
                                                                </div>
                                                            </div> : null
                                                        }     
                                                    </div>
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
                                                    this.state.folio !== '' ? <img src={ icoCheck } alt="icoCheck"/> : 
                                                    <div className="tooltip">
                                                        <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('folioTooltip') } alt="icoInterrogacion"/>
                                                        {
                                                            this.state.tooltips.folioTooltip ? <div className="tooltip__contenido">
                                                                <label className="tooltip__titulo">Ubica tu folio</label>
                                                                <div className="tooltip__img">
                                                                    <img src={ imgFolio } alt="imgIne"/>
                                                                </div>
                                                            </div> : null
                                                        }
                                                    </div>
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
                                                    this.state.anoRegistro !== '' ? <img src={ icoCheck } alt="icoCheck"/> : 
                                                    <div className="tooltip">
                                                        <img src={ icoInterrogacion }  onClick={ (e) => this.mostrarTooltip('anoTooltip') } alt="icoInterrogacion"/>
                                                        {
                                                            this.state.tooltips.anoTooltip ? <div className="tooltip__contenido">
                                                                <label className="tooltip__titulo">Ubica tu año de registro</label>
                                                                <div className="tooltip__img">
                                                                    <img src={ imgAnoRegistro } alt="imgIne"/>
                                                                </div>
                                                            </div> : null
                                                        }
                                                    </div>
                                                }
                                            </div>
                                        </div> 
                                    </React.Fragment> : null
                                }
                            </div>
                        }
                    </this.OnMobile>
                    
                    <this.OnDesktop className="u-flex u-mt-2">
                        <div className="u-w-100 u-mr-2">
                            <div className="input-group u-mb-0">
                                <label className="input-group__label">Ingresa tu CURP (18 dígitos)</label>
                                <div className={`input-group__input ${ this.state.sinCurp ? 'input-group__input--desac' : ''}`}>
                                    <input 
                                        name="curp"
                                        placeholder=""
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.curp }
                                    />
                                    {
                                        this.state.curp !== '' ? 
                                        <img src={ icoCheck } alt="icoCheck"/> : 
                                        <div className="tooltip">
                                            <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('curpTooltip') } alt="icoInterrogacion"/>
                                            {
                                                this.state.tooltips.curpTooltip ?  <div className="tooltip__contenido">
                                                    <label className="tooltip__titulo">Ubica tu CURP</label>
                                                    <div className="tooltip__img">
                                                        <img src={ imgCurp } alt="imgIne"/>
                                                    </div>
                                                </div> : null
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="u-flex u-align-center">
                                <label className="checkbox checkbox--input">
                                    <input 
                                        name="sinCurp"
                                        type="checkbox"
                                        checked={ this.state.sinCurp }
                                        onChange={ (e) => this.conozcoCurp(e, true) }
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
                                                <Select 
                                                    name="genero"
                                                    className="select-lista" 
                                                    classNamePrefix="select-lista__select" 
                                                    placeholder="Elige una opción"
                                                    options={ genero }
                                                    onChange={ (e) => this.onChange({target: { name:'genero', value: e.value }}) }
                                                />
                                                {
                                                    this.state.genero !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
                                                }
                                            </div>
                                        </div> 
                                        <div className="input-group u-w-50 u-mb-0">
                                            <label className="input-group__label">Estado</label>
                                            <div className="input-group__input">
                                                <Select 
                                                    name="estado"
                                                    className="select-lista" 
                                                    classNamePrefix="select-lista__select" 
                                                    placeholder="Elige una opción"
                                                    options={ estado }
                                                    onChange={ (e) => this.onChange({target: { name:'estado', value: e.value }}) }
                                                />
                                                {
                                                    this.state.estado !== '0' ? <img src={ icoCheck } alt="icoCheck"/> : <div className="select__flecha"></div>
                                                }
                                            </div>
                                        </div> 
                                    </div>
                                </React.Fragment> : null
                            }
                        </div>
                        <div className="u-w-100 u-mr-2">
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
                                        this.state.codigo !== '' ? <img src={ icoCheck } alt="icoCheck"/> : (
                                            <div className="tooltip">
                                                <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('codigoTooltip') } alt="icoInterrogacion"/>
                                                {
                                                    this.state.tooltips.codigoTooltip ? <div className="tooltip__contenido">
                                                        <label className="tooltip__titulo">Ubica tu código identificador</label>
                                                        <div className="tooltip__img">
                                                            <img src={ imgCodigo } alt="imgIne"/>
                                                        </div>
                                                    </div> : null
                                                }
                                            </div>
                                        )
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
                                                this.state.claveElector !== '' ? <img src={ icoCheck } alt="icoCheck"/> :
                                                <div className="tooltip">
                                                    <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('claveTooltip') } alt="icoInterrogacion"/>
                                                    {
                                                        this.state.tooltips.claveTooltip ? <div className="tooltip__contenido">
                                                            <label className="tooltip__titulo">Ubica tu clave de elector</label>
                                                            <div className="tooltip__img">
                                                                <img src={ imgClaveElector } alt="imgIne"/>
                                                            </div>
                                                        </div> : null
                                                    }     
                                                </div>
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
                                                this.state.folio !== '' ? <img src={ icoCheck } alt="icoCheck"/> : 
                                                <div className="tooltip">
                                                    <img src={ icoInterrogacion } onClick={ (e) => this.mostrarTooltip('folioTooltip') } alt="icoInterrogacion"/>
                                                    {
                                                        this.state.tooltips.folioTooltip ? <div className="tooltip__contenido">
                                                            <label className="tooltip__titulo">Ubica tu folio</label>
                                                            <div className="tooltip__img">
                                                                <img src={ imgFolio } alt="imgIne"/>
                                                            </div>
                                                        </div> : null
                                                    }
                                                </div>
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
                                                this.state.anoRegistro !== '' ? <img src={ icoCheck } alt="icoCheck"/> : 
                                                <div className="tooltip">
                                                    <img src={ icoInterrogacion }  onClick={ (e) => this.mostrarTooltip('anoTooltip') } alt="icoInterrogacion"/>
                                                    {
                                                        this.state.tooltips.anoTooltip ? <div className="tooltip__contenido">
                                                            <label className="tooltip__titulo">Ubica tu año de registro</label>
                                                            <div className="tooltip__img">
                                                                <img src={ imgAnoRegistro } alt="imgIne"/>
                                                            </div>
                                                        </div> : null
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment> : null
                            }
                        </div>
                    </this.OnDesktop>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(IdentificateComponent);