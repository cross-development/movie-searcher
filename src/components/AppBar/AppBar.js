//Core
import React from 'react';
//Components
import Logo from '../Logo';
import AuthMenu from '../AuthMenu';
import ChatRooms from '../ChatRooms';
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

			<ChatRooms existUser={user} />

			{user && <AuthMenu />}
		</aside>
	);
};

export default AppBar;
