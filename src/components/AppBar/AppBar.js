//Core
import React from 'react';
//Components
import { Logo } from '../Common';
import AuthMenu from '../AuthMenu';
import AdditionMovies from '../AdditionMovies';
import Navigation from '../Navigation';
//Context
import { useAuthState } from 'context';
//Styles
import styles from './AppBar.module.css';

//Fixed
const AppBar = () => {
	const { user } = useAuthState();

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
