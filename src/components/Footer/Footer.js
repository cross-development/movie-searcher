//Core
import React from 'react';
//Components
import DataSource from '../DataSource/DataSource';
//Styles
import styles from './Footer.module.css';

const Header = () => {
	return (
		<footer className={styles.footer}>
			<DataSource />
		</footer>
	);
};

export default Header;
