/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as HomePageActions from './actions'

import HomePageStyled from './styledComponent'

class HomePage extends Component {
	render() {
		return (
			<HomePageStyled>
				this is Home Page
			</HomePageStyled>
		)
	}
}

const mapStateToProps = state => {
	return {
		applicationPage: state.applicationPage
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(Object.assign({},	HomePageActions), dispatch)
}

HomePage.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)
