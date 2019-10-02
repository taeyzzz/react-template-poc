import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import browserHistory from './history'

import ApplicationPage from '../containers/ApplicationPage/Loadable'
import LoginPage from '../containers/LoginPage/Loadable'

const handleRouteChanged = arg => {
	window.scrollTo(0, 0)
}

browserHistory.listen(arg => {
	handleRouteChanged(arg)
})

export default (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path='/' render={() => <Redirect to='/home' />} />
			<Route path='/home' component={ApplicationPage} />
			<Route path='/login' component={LoginPage} />
		</Switch>
	</Router>
)
