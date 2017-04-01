'use strict';

import React, {
	Component
} from 'react';

import {
	WebView,
} from 'react-native';

export default class HomeApp extends Component {
	static navigationOptions = {
		title:'home'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<WebView
	          	source={{uri: 'https://www.baidu.com'}}
	        />
		);
	}
}