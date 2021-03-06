//Core
import React from 'react';
import { NavLink } from 'react-router-dom';
//Context
import { useAuthState } from 'context';
//Routes
import routes from 'router';
//Styles
import styles from './Navigation.module.css';

//Fixed
const Navigation = () => {
	const { user } = useAuthState();

	return (
		<ul className={styles.navigationList}>
			{routes.map(
				route =>
					route.isNavigation &&
					!route.private && (
						<li key={route.path} className={`${styles[route.label.toLowerCase()]}`}>
							<NavLink
								to={route.path}
								exact={route.exact}
								className={styles.navigationLink}
								activeClassName={styles.navigationLinkActive}
							>
								{route.label}
							</NavLink>
						</li>
					),
			)}

			{user &&
				routes.map(
					route =>
						route.isNavigation &&
						route.private && (
							<li key={route.path} className={`${styles[route.path.slice(1)]}`}>
								<NavLink
									to={route.path}
									exact={route.exact}
									className={styles.navigationLink}
									activeClassName={styles.navigationLinkActive}
								>
									{route.label}
								</NavLink>
							</li>
						),
				)}
		</ul>
	);
};

export default Navigation;
