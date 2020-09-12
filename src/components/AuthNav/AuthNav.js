//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Styles
import styles from './AuthNav.module.css';

const AuthNav = () => (
	<div className={styles.authMenu}>
		<NavLink to="/register" exact className={styles.register} activeClassName={styles.activeLink}>
			Register
		</NavLink>
		<NavLink to="/login" exact className={styles.login} activeClassName={styles.activeLink}>
			Login
		</NavLink>
	</div>
);

export default AuthNav;
