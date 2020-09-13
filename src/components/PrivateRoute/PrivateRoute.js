//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.string,
};

PrivateRoute.defaultProps = {
	isAuthenticated: null,
};

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
