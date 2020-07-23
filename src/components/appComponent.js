import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import IndexComponent from './indexComponent';
import SolicitudCreditoComponent from './solicitudCreditoComponent';
import TrackerCreditoComponent from './trackerCreditoComponent';
import CapturaCredencialComponent from './capturaCredencialComponent';

export default class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={ IndexComponent }/>
					<Route path='/solicitud-credito' exact component={ SolicitudCreditoComponent }/>
					<Route path='/tracker-credito' exact component={ TrackerCreditoComponent }/>
					<Route path='/captura-credencial' exact component={ CapturaCredencialComponent }/>
				</Switch>
			</BrowserRouter>
		)
	}
};
