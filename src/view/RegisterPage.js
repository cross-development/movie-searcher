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
		hasError: PropTypes.object,
	};

	static defaultProps = {
		hasError: null,
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
	// 	const { hasError } = this.props;
	// 	return hasError && hasError.config.url.includes('login');
	// };

	render() {
		// const isErrorTypeRegister = this.defineErrorType();

		return (
			<>
				<Register {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />

				{/* {isErrorTypeRegister && <Error message="User with this email already exists" />} */}
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.getError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);
