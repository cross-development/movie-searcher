//Core
import React, { useEffect, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import Layout from '../Layout';
import Header from '../Header';
import Loader from '../Loader';
import Footer from '../Footer';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { collectionOperations } from 'redux/collection';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';
//Services
import asyncComponents from 'services/asyncComponents';

//Fixed
const App = () => {
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(collectionOperations.fetchCollectionMovies({ userId: user.uid }));
		}
	}, [user, dispatch]);
	//TODO: check Header
	return (
		<BrowserRouter>
			<Route component={Header} />

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
