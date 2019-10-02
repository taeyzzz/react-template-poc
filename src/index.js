import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as Sentry from '@sentry/browser';

import configureStore from './store/configureStore'
import routes from './routes'

import * as serviceWorker from './serviceWorker';

import './global-style.scss'

// Sentry.init({
//   dsn: "https://57f3acb1c82c42f2ac636e2d2bf899ae@sentry.io/1767667",
//   environment: process.env.NODE_ENV,
// });

document.body.oncontextmenu = (e) => {
	e.preventDefault()
}

let store = configureStore()

ReactDOM.render(
	<Provider store={store}>
    {routes}
  </Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
