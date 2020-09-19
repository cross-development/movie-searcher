//Core
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component: Component, existUser, ...routeProps }) => (
	<Route
		{...routeProps}
		render={props =>
			existUser && routeProps.restricted ? <Redirect to="/home" /> : <Component {...props} />
		}
	/>
);

PublicRoute.propTypes = {
	existUser: PropTypes.objectOf(PropTypes.any),
};

PublicRoute.defaultProps = {
	existUser: null,
};

const mapStateToProps = state => ({
	existUser: authSelectors.existUser(state),
});

export default connect(mapStateToProps)(PublicRoute);
