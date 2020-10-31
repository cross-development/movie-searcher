//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Login.module.css';

//Fixed
const Login = ({ email, password, onChangeEmail, onChangePassword, onSubmit }) => (
	<form onSubmit={onSubmit} className={styles.form}>
		<label className={styles.label}>
			Email
			<input
				className={styles.input}
				required
				type="email"
				name="email"
				value={email}
				autoComplete="off"
				onChange={onChangeEmail}
			/>
		</label>

		<label className={styles.label}>
			Password
			<input
				className={styles.input}
				required
				type="password"
				name="password"
				value={password}
				autoComplete="off"
				onChange={onChangePassword}
			/>
		</label>

		<button type="submit" className={styles.button}>
			Login
		</button>
	</form>
);

Login.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	onChangePassword: PropTypes.func.isRequired,
	onChangeEmail: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Login;
