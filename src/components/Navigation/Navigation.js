//Core
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
//Redux
import { authSelectors } from 'redux/auth';
//Routes
import routes from 'router';
//Styles
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
	<ul className={styles.navigationList}>
		{routes.map(
			route =>
				route.isNavigation &&
				!route.private && (
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

		{isAuthenticated &&
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

Navigation.propTypes = {
	isAuthenticated: PropTypes.string,
};

Navigation.defaultProps = {
	isAuthenticated: null,
};

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
