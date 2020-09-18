//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
// import Error from 'components/Error';
import Register from 'components/Register';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

class RegisterView extends Component {
	static propTypes = {
		onRegister: PropTypes.func.isRequired,
		error: PropTypes.object,
	};

	static defaultProps = {
		error: null,
	};

	state = {
		name: '',
		email: '',
		password: '',
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = e => {
		e.preventDefault();

		this.props.onRegister({ ...this.state });
		this.setState({ name: '', email: '', password: '' });
	};

	// defineErrorType = () => {
	// 	const { error } = this.props;

	// 	if (error.code === 'auth/email-already-in-use') {
	// 		return 'The password is already in use.';
	// 	}

	// 	if (error.code === 'auth/weak-password') {
	// 		return 'The password is too weak.';
	// 	}

	// 	return error.message;
	// };

	render() {
		// const errorMessage = this.defineErrorType();
		// const { error } = this.props;

		return (
			<>
				<Register {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />

				{/* {error && <Error message={errorMessage} />} */}
			</>
		);
	}
}

const mapStateToProps = state => ({
	error: authSelectors.getError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
