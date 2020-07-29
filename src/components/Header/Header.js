//Core
import React from 'react';
//Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
//Styles
import styles from './Header.module.css';

const Header = () => (
	<header className={styles.header}>
		<Logo />
		<Navigation />
	</header>
);

export default Header;
