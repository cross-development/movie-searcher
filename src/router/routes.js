// export default {
// 	home: '/', +++++++++++++++
// 	movies: '/movies', ++++++++++++++++
// 	movieDetails: '/movies/:movieId', ++++++++++++++++
// 	login: '/login', ++++++++++++++
// 	register: '/register', +++++++++++++++++
// 	movieCast: '/movies/:movieId/cast', +++++++++++
// 	movieReview: '/movies/:movieId/reviews',+++++++++++
// 	persons: '/person',+++++++
// 	personDetails: '/person/:personId',+++++++++++++
// 	favoriteMovies: '/favorites',
// 	queueMovies: '/queue',

// };

//Core
import { lazy } from 'react';

export default [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		isNavigation: true,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		isNavigation: false,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		isNavigation: false,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	{
		path: '/movies',
		label: 'Movies',
		exact: true,
		private: false,
		restricted: false,
		isNavigation: true,
		component: lazy(() => import('pages/MoviesPage' /* webpackChunkName: "movies-page"*/)),
	},
	{
		path: '/movies/:movieId',
		label: 'MovieDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() =>
			import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */),
		),
	},
	{
		path: '/movies/:movieId/cast',
		label: 'Cast',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() => import('pages/Cast' /* webpackChunkName: "cast-page" */)),
	},
	{
		path: '/movies/:movieId/reviews',
		label: 'Reviews',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() => import('pages/Reviews' /* webpackChunkName: "reviews-page"*/)),
	},
	{
		path: '/persons',
		label: 'Persons',
		exact: true,
		private: false,
		restricted: false,
		isNavigation: true,
		component: lazy(() => import('pages/PersonsPage' /* webpackChunkName: "persons-page"*/)),
	},
	{
		path: '/persons/:personId',
		label: 'PersonDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() =>
			import('pages/PersonDetailsPage' /* webpackChunkName: "persons-details-page" */),
		),
	},
	{
		path: '/favorites',
		label: 'My Collection',
		exact: true,
		private: true,
		restricted: false,
		isNavigation: true,
		component: lazy(() =>
			import('pages/FavoriteMoviesPage' /* webpackChunkName: "favorite-movies-page" */),
		),
	},
	{
		path: '/queue',
		label: 'Watch Later',
		exact: true,
		private: true,
		restricted: false,
		isNavigation: true,
		component: lazy(() =>
			import('pages/QueueMoviesPage' /* webpackChunkName: "queue-movies-page" */),
		),
	},
];
