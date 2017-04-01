import {
	LOGINSUCESS,
	LOGINFAILURE,
} from './actionTypes.js';

import fetch from 'isomorphic-fetch';
import {
	isFetching,
	isFetched,
	isFetchFail,
} from './httpActions';

import Alert from '../components/Alert/';

function loginSucess() {
	return {
		type: LOGINSUCESS,
	}
}

function loginFailure(msg) {
	return {
		type: LOGINFAILURE,
		msg: msg,
	}
}

export function userLogin(username, password, navigate) {
	return function(dispatch) {
		dispatch(isFetching());
		Alert(`${username}|${password}`);
		return fetch('../mock/login.js')
			.then(response => response.json())
			.then(responseJson => {
				dispatch(isFetched());
				dispatch(loginSucess());
				Alert('登录成功');
			})
			.catch(function(error) {
				dispatch(isFetched());
				dispatch(loginFailure());
				navigate('home');
			});
	}
}