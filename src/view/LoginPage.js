//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
// import Error from 'components/Error';
import Login from 'components/Login';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

class LoginPage extends Component {
	static propTypes = {
		onLogin: PropTypes.func.isRequired,
		error: PropTypes.object,
	};

	static defaultProps = {
		error: null,
	};

	state = {
		email: '',
		password: '',
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onLogin({ ...this.state });
		this.setState({ email: '', password: '' });
	};

	// defineErrorType = () => {
	// 	const { hasError } = this.props;
	// 	return hasError && hasError.config.url.includes('login');
	// };

	render() {
		// const isErrorTypeLogin = this.defineErrorType();

		return (
			<>
				<Login {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />

				{/* {isErrorTypeLogin && <Error message="User with this email address not found" />} */}
			</>
		);
	}
}

const mapStateToProps = state => ({
	error: authSelectors.getError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
