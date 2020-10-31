//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component: Component, existUser, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props => (existUser ? <Component {...props} /> : <Redirect to="/login" />)}
	/>
);

PrivateRoute.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

PrivateRoute.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(PrivateRoute);
