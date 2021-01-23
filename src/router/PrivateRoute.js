//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Context
import { useAuthState } from 'context';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useAuthState();

	return (
		<Route
			{...routeProps}
			render={props => (user ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	);
};

export default PrivateRoute;
