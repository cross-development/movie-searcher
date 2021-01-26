//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Context
import { userSignOut, useAuthDispatch } from 'context';
//Styles
import styles from './AuthMenu.module.css';

//Fixed
const AuthMenu = () => {
	const dispatch = useAuthDispatch();

	const onLogout = () => userSignOut(dispatch);

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
