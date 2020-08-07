import { lazy } from 'react';

const HomePage = lazy(() => import('../view/HomePage' /* webpackChunkName: "home-view" */));
const MoviesPage = lazy(() => import('../view/MoviesPage' /* webpackChunkName: "movies-view"*/));
const PersonsPage = lazy(() => import('../view/PersonsPage' /* webpackChunkName: "persons-view"*/));
const Cast = lazy(() => import('../view/Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() => import('../view/Reviews' /* webpackChunkName: "reviews-view"*/));
const MovieDetailsPage = lazy(() =>
	import('../view/MovieDetailsPage' /* webpackChunkName: "movie-details-view" */),
);
const PersonsDetailsPage = lazy(() =>
	import('../view/PersonDetailsPage' /* webpackChunkName: "persons-details-view" */),
);
const FavoriteMoviesPage = lazy(() =>
	import('../view/FavoriteMoviesPage' /* webpackChunkName: "favorite-movies-view" */),
);
const NotFoundPage = lazy(() =>
	import('../view/NotFoundPage' /* webpackChunkName: "not-found-view"*/),
);

export default {
	HomePage,
	MoviesPage,
	MovieDetailsPage,
	PersonsPage,
	PersonsDetailsPage,
	FavoriteMoviesPage,
	NotFoundPage,
	Cast,
	Reviews,
};
