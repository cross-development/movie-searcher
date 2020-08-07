//Core
import React from 'react';
//Components
import DataSource from '../DataSource';
//Styles
import styles from './Footer.module.css';

const Header = () => (
	<footer className={styles.footer}>
		<DataSource />
	</footer>
);

export default Header;
