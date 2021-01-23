//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Context
import { useAuthState } from 'context';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useAuthState();

	return (
		<Route
			{...routeProps}
			render={props =>
				user && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
