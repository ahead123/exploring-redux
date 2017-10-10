import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import { store, history } from './store'
import './index.css'
import App from './App'
import DashBoard from './components/DashBoard'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
      	<Route exact path="/" component={App} />
      	<Route path="/dashboard" component={DashBoard} />
      </div>
    </ConnectedRouter>
	</Provider>, document.getElementById('root'))
registerServiceWorker()
