//Core
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//Views
import NotFoundPage from '../../view/NotFoundPage';
//Components
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
// import Footer from '../Footer/Footer';
//Routes
import routes from '../../routes';
//AsyncComponents
const HomePage = lazy(() => import('../../view/HomePage' /* webpackChunkName: "home-view" */));
const MoviesPage = lazy(() => import('../../view/MoviesPage' /* webpackChunkName: "movies-view"*/));
const MovieDetailsPage = lazy(() =>
	import('../../view/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */),
);
const PersonsPage = lazy(() =>
	import('../../view/PersonsPage' /* webpackChunkName: "persons-view"*/),
);
const PersonsDetailsPage = lazy(() =>
	import('../../view/PersonDetailsPage' /* webpackChunkName: "persons-details-view" */),
);
const FavoriteMoviesPage = lazy(() =>
	import('../../view/FavoriteMoviesPage' /* webpackChunkName: "favorite-movies-view" */),
);

const App = () => (
	<>
		<Layout>
			<Header />

			<Suspense fallback={<Loader onLoad={true} />}>
				<Switch>
					<Route path={routes.home} exact component={HomePage} />
					<Route path={routes.movieDetails} component={MovieDetailsPage} />
					<Route path={routes.movies} component={MoviesPage} />
					<Route path={routes.personDetails} component={PersonsDetailsPage} />
					<Route path={routes.persons} component={PersonsPage} />
					<Route path={routes.favoriteMovies} component={FavoriteMoviesPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Suspense>

			{/* <Footer /> */}
		</Layout>
	</>
);

export default App;
