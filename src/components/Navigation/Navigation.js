//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Routes
import routes from 'router';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => {
	const { home, movies, persons, favoriteMovies } = routes;

	return (
		<ul className={styles.navigationList}>
			<li className={styles.navigationListItem}>
				<NavLink
					exact
					to={home}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Home
				</NavLink>
			</li>

			<li className={styles.navigationListItem}>
				<NavLink
					to={movies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Movies
				</NavLink>
			</li>

			<li className={styles.navigationListItem}>
				<NavLink
					to={persons}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Actors
				</NavLink>
			</li>

			<li className={styles.navigationListItem}>
				<NavLink
					to={favoriteMovies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Favorite Movies
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;
