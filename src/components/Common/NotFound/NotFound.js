//Core
import React from 'react';
import { Link } from 'react-router-dom';
//Utils
import imgPath from 'assets/not_found_img.jpg';
//Style
import styles from './NotFound.module.css';

//Fixed
const NotFound = () => (
	<div className={styles.imgWrapper}>
		<img src={imgPath} alt="Page not found" className={styles.pageImg} />
		<h2 className={styles.title}>
			Ooops! Something went wrong. Please go to <Link to="/">homepage</Link>.
		</h2>
	</div>
);

export default NotFound;
