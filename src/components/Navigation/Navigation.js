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

const Navigation = ({ existUser }) => (
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

		{existUser &&
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
	existUser: PropTypes.objectOf(PropTypes.any),
};

Navigation.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(Navigation);
