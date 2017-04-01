'use strict';

import React, {
	Component
} from 'react';

import {
	bindActionCreators,
} from 'redux';

import Login from '../components/Login';

import * as loginActions from '../actions/loginActions';
import {
	connect
} from 'react-redux';

class LoginApp extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			state,
			actions,
			navigation
		} = this.props;

		return (
			<Login
				loginFlag = {state.loginFlag}
				loginMsg = {state.loginMsg}
				isFetching = {state.isFetching}
				{...actions}
				navigate={navigation.navigate}
			/>
		)
	}
}

export default connect(state => ({
		state: {...state.login, ...state.http}
	}),
	(dispatch) => ({
		actions: bindActionCreators(loginActions, dispatch)
	})
)(LoginApp);