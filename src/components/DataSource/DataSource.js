//Core
import React from 'react';
//Assets
import sourceLogoPath from 'assets/logo.svg';
//Styles
import styles from './DataSource.module.css';

const DataSource = () => (
	<div className={styles.sourceWrapper}>
		<a href="https://www.themoviedb.org/" rel="noopener noreferrer" target="_blank">
			<img src={sourceLogoPath} alt="Data source logo" className={styles.sourceLogo} />
		</a>
	</div>
);

export default DataSource;
