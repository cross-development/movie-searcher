//Core
import React, { useEffect, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import { Layout, Loader, Header, Footer } from '../Common';
//Context
import { getCurrentUser, useAuthDispatch } from 'context';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';
//Services
import asyncComponents from 'services/asyncComponents';

//Fixed
const App = () => {
	const dispatch = useAuthDispatch();

	useEffect(() => {
		getCurrentUser(dispatch);
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />

			<AppBar />

			<Layout>
				<Suspense fallback={<Loader onLoad={true} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}

						<Route component={asyncComponents.NotFoundPage} />
					</Switch>
				</Suspense>
			</Layout>

			<Footer />
		</BrowserRouter>
	);
};

export default App;
