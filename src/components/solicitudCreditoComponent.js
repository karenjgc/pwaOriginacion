import  React,  { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import HeaderComponent from './headerComponent';

//Images
import icoCheck from '../assets/img/icoCheck.svg';
import icoRefresh from '../assets/img/icoRefresh.svg';

export default class SolicitudCreditoComponent extends Component {
    headerData = {
		mostrarFlecha: true,
		titulo: 'Solicita tu crédito',
		subtitulo: 'en tan solo ',
		strong: '3 pasos'
    };

    state = {
        numCelular: '',
        codigo: '',
        terminosCondiciones: false    
    };

    onChange = (e, boolean) => {
        let dataNombre = e.target.name;
        let dataValor = e.target.value;

        if(e.target.validity.valid){
            this.setState({
                [dataNombre]: boolean ? !this.state[dataNombre] : dataValor
            }, this.sendData);
        }
    }

    evaluaFormulario = () => {
        let valido = true;

        for(let dato of Object.keys(this.state)){
            if(!this.state[dato] || this.state[dato]  === ''){
                valido = false;
                break;
            }
        }

        return valido;
    }

    render(){
        return(
            <div className="cont-landing">
                <HeaderComponent headerData={ this.headerData }/>
                <div className="cont-form u-flex-auto">
                    <div className="input-group u-mb-1">
                        <label className="input-group__label">Ingresa tu número de celular</label>
                        <div className="input-group__input">
                            <input 
                                name="numCelular"
                                placeholder="Ej. 5524356890" 
                                pattern="[0-9]*"
                                onChange={ (e) => this.onChange(e, false) }
                                value={ this.state.numCelular }
                            />
                            {
                                this.state.numCelular !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                            }
                        </div>
                    </div>
                    {
                        this.state.numCelular !== '' ? 
                        <React.Fragment>
                            <label className="u-txt-medium u-py-1"><strong>Ingresa el código </strong>que enviamos a tu celular.</label>
                            <div className="input-group">
                                <label className="input-group__label">Código de verificación (7 dígitos)</label>
                                <div className="input-group__input">
                                    <input 
                                        name="codigo"
                                        placeholder="Ej. 1234567"
                                        pattern="[0-9]*"
                                        onChange={ (e) => this.onChange(e, false) }
                                        value={ this.state.codigo }
                                    />
                                    {
                                        this.state.codigo !== '' ? <img src={ icoCheck } alt="icoCheck"/> : null
                                    }
                                </div>
                                <small className="input-group__small">
                                    <img src={ icoRefresh } alt="icoRefresh"/>
                                    Reenviar código
                                </small>
                            </div>
                        </React.Fragment> : null
                    }
                </div>
                <div className="u-flex u-align-center u-px-3">
                    <label className="checkbox">
                        <input 
                            name="terminosCondiciones"
                            type="checkbox"
                            checked={ this.state.terminosCondiciones }
                            onChange={ (e) => this.onChange(e, true) }
                        />
                        <span></span>
                    </label>
                    <small>He leído y acepto las <a className="u-color-primario" href="facebook.com">Condiciones del servicio y la Política de privacidad </a> de Banco Azteca</small>
                </div>
                <div className="btn-center">
                    <Link to={{ pathname: '/tracker-credito' }} className={`btn ${ this.evaluaFormulario() ? 'btn--primario' : 'btn--desac'}` }>Continuar</Link>
                </div>
            </div>
        )
    }
}