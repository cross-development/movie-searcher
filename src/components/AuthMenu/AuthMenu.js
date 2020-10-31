//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Redux
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
//Styles
import styles from './AuthMenu.module.css';

//Fixed
const AuthMenu = () => {
	const dispatch = useDispatch();

	const onLogout = () => dispatch(authOperations.logout());

	return (
		<div className={styles.authMenu}>
			<Link to="/settings" className={styles.settings}>
				Settings
			</Link>
			<Link to="/" onClick={onLogout} className={styles.logout}>
				Log Off
			</Link>
		</div>
	);
};

export default AuthMenu;
