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
	const { pathname } = useLocation();

	const handleChangeByQuery = query => {
		history.push({
			pathname,
			search: `query=${query}`,
		});
	};

	const targetToSearch = pathname.slice(1);

	return (
		<header className={styles.header}>
			<MainTitle pathname={pathname} />

			<SearchForm onSubmit={handleChangeByQuery} placeholder={`Search ${targetToSearch}...`} />

			{user ? <UserMenu /> : <AuthNav />}
		</header>
	);
};

export default Header;
