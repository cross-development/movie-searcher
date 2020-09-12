//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './Login.module.css';

const Login = ({ email, password, onChange, onSubmit }) => (
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
				onChange={onChange}
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
				onChange={onChange}
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
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Login;
