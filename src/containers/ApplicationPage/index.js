/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as ApplicationActions from './actions'
import Button from '../../conponents/Button/Loadable'

import HomePage from '../HomePage/Loadable'

import ApplicationLayoutStyled from './styledComponent'

class ApplicationLayout extends Component {
	gotoLogin = () => {
		this.props.history.push("/login")
	}
	render() {
		return (
			<ApplicationLayoutStyled>
				This is header
				<div>
					<Button text="Goto Login" onClick={this.gotoLogin1}/>
				</div>
				<div>
					<Switch>
						<Route exact path='/home' component={HomePage} />
					</Switch>
				</div>
			</ApplicationLayoutStyled>
		)
	}
}

const mapStateToProps = state => {
	return {
		applicationPage: state.applicationPage
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Object.assign({},	ApplicationActions), dispatch)
}

ApplicationLayout.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ApplicationLayout)
