//Core
import React from 'react';
//Components
import Logo from '../Logo';
import AuthMenu from '../AuthMenu';
import AdditionMovies from '../AdditionMovies';
import Navigation from '../Navigation';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styles from './AppBar.module.css';

//Fixed
const AppBar = () => {
	const { user } = useSelector(state => state.auth);

	return (
		<aside className={styles.appBar}>
			<Logo />

			<Navigation />

			<AdditionMovies />

			{user && <AuthMenu />}
		</aside>
	);
};

export default AppBar;
