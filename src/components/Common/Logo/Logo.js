//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Assets
import logoPath from 'assets/svg/video-camera.svg';
//Styles
import styles from './Logo.module.css';

//Fixed
const Logo = () => (
	<div className={styles.logoWrapper}>
		<NavLink exact to="/" className={styles.logoLink}>
			<img src={logoPath} alt="site logo" className={styles.logo} />
			Movies.my
		</NavLink>

		<button className={styles.button} type="button">
			Premium Subscription
		</button>
	</div>
);

export default Logo;
