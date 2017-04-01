import React, {
	Component
} from 'react'

import {
	StackNavigator,
} from 'react-navigation'

import CounterApp from './CounterApp';
import ChartApp from './ChartApp';
import LoginApp from './LoginApp'
import HomeApp from './HomeApp';

//頁面路由
const Root = StackNavigator({
	login: {
		screen: LoginApp
	},
	home:{
		screen: HomeApp
	},
	chart:{
		screen: ChartApp
	},
	counter: {
		screen: CounterApp
	}
})

export default Root