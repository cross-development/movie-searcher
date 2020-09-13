//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props =>
			isAuthenticated && routeProps.restricted ? <Redirect to="/home" /> : <Component {...props} />
		}
	/>
);

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.string,
};

PublicRoute.defaultProps = {
	isAuthenticated: null,
};

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
