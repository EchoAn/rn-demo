import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Alert,
	TextInput,
	TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
	},
	submitButton: {
		width: 100,
		height: 30,
		padding: 10,
		backgroundColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3,
	}
});

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password:'',
		}
		this.login = this.login.bind(this);
	}

	login() {
		let {
			userLogin,
			navigate
		} = this.props;
		let username = this.state.username;
		let password = this.state.password;

		userLogin(username, password, navigate);
	}

	render() {
		console.log(this.props);
		let isFetching = this.props.isFetching;
		return (
			<View>
				<View>
					<Text>username:</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(username) => this.setState({username})}
						value={this.state.username}
					>
					</TextInput>
				</View>
				<View>
					<Text>password:</Text>
					<TextInput
						style={styles.textInput}
						password = {true}
						onChangeText={(password) => this.setState({password})}
						value={this.state.password}
					>
					</TextInput>
				</View>
				<View>
					<TouchableHighlight
						style={styles.submitButton}
						onPress={this.login}
					>
						<Text>Login</Text>
					</TouchableHighlight>
				</View>
				<View>
					<Text>{isFetching?'Loading...':''}</Text>
				</View>
			</View>
		)
	}
}