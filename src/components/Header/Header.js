//Core
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//Components
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import MainTitle from '../MainTitle';
import SearchForm from '../SearchForm';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styles from './Header.module.css';

//Fixed
const Header = () => {
	const { user } = useSelector(state => state.auth);

	const history = useHistory();
	const location = useLocation();

	const handleChangeByQuery = query => {
		history.push({
			...location,
			pathname: location.pathname,
			search: `query=${query}`,
		});
	};

	const targetToSearch = location.pathname.split('/')[1];

	return (
		<header className={styles.header}>
			<MainTitle pathname={location.pathname} />

			<SearchForm onSubmit={handleChangeByQuery} placeholder={`Search ${targetToSearch}...`} />

			{user ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default Header;
