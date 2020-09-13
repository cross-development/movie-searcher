//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Routes
import routes from 'router';
//Styles
import styles from './Navigation.module.css';

const Navigation = () => {
	const { home, movies, persons, favoriteMovies, queueMovies } = routes;

	return (
		<ul className={styles.navigationList}>
			<li className={styles.home}>
				<NavLink
					exact
					to={home}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Home
				</NavLink>
			</li>

			<li className={styles.movies}>
				<NavLink
					to={movies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Movies
				</NavLink>
			</li>

			<li className={styles.actors}>
				<NavLink
					to={persons}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Actors
				</NavLink>
			</li>

			<li className={styles.favorite}>
				<NavLink
					to={favoriteMovies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					My Collection
				</NavLink>
			</li>
			<li className={styles.queue}>
				<NavLink
					to={queueMovies}
					className={styles.navigationLink}
					activeClassName={styles.navigationLinkActive}
				>
					Watch Later
				</NavLink>
			</li>
		</ul>
	);
};

export default Navigation;
