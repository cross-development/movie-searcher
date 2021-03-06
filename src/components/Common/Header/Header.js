//Core
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//Components
import MainTitle from '../MainTitle';
import { AuthNav } from 'components/Auth';
import UserMenu from 'components/UserMenu';
import SearchForm from 'components/SearchForm';
//Context
import { useAuthState } from 'context';
//Styles
import styles from './Header.module.css';

//Fixed
const Header = () => {
	const { user } = useAuthState();

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
