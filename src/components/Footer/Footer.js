//Core
import React from 'react';
//Components
import Creator from '../Creator';
import DataSource from '../DataSource';
//Styles
import styles from './Footer.module.css';

const Header = () => (
	<footer className={styles.footer}>
		<DataSource />

		{/* <Creator creator="Vitaliy Derda" /> */}
	</footer>
);

export default Header;
