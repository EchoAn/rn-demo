'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	TextInput,
} from 'react-native'

import {
	bindActionCreators
} from 'redux';

import Chart from '../components/chart';
import * as chartActions from '../actions/chartActions';

import {
	connect
} from 'react-redux';


class ChartApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			state,
			actions,
		} = this.props;

		console.log(this.props);

		return (
			<Chart
				chartMsg={state.chartMsg}
				{...actions}
			/>
		);
	}
}

export default connect(state => ({
		state: state.chart
	}),
	(dispatch) => ({
		actions: bindActionCreators(chartActions, dispatch)
	})
)(ChartApp);