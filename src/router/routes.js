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
		component: lazy(() => import('view/HomePage' /* webpackChunkName: "home-view" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		isNavigation: false,
		component: lazy(() => import('view/RegisterPage' /* webpackChunkName: "register-view"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		isNavigation: false,
		component: lazy(() => import('view/LoginPage' /* webpackChunkName: "login-view"*/)),
	},
	{
		path: '/movies',
		label: 'Movies',
		exact: true,
		private: false,
		restricted: false,
		isNavigation: true,
		component: lazy(() => import('view/MoviesPage' /* webpackChunkName: "movies-view"*/)),
	},
	{
		path: '/movies/:movieId',
		label: 'MovieDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() =>
			import('view/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */),
		),
	},
	{
		path: '/movies/:movieId/cast',
		label: 'Cast',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() => import('view/Cast' /* webpackChunkName: "cast-view" */)),
	},
	{
		path: '/movies/:movieId/reviews',
		label: 'Reviews',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() => import('view/Reviews' /* webpackChunkName: "reviews-view"*/)),
	},
	{
		path: '/persons',
		label: 'Persons',
		exact: true,
		private: false,
		restricted: false,
		isNavigation: true,
		component: lazy(() => import('view/PersonsPage' /* webpackChunkName: "persons-view"*/)),
	},
	{
		path: '/persons/:personId',
		label: 'PersonDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigation: false,
		component: lazy(() =>
			import('view/PersonDetailsPage' /* webpackChunkName: "persons-details-view" */),
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
			import('view/FavoriteMoviesPage' /* webpackChunkName: "favorite-movies-view" */),
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
			import('view/QueueMoviesPage' /* webpackChunkName: "queue-movies-view" */),
		),
	},
];
