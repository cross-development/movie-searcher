import { createSelector } from '@reduxjs/toolkit';

const getMovies = state => state.movies.items;

const getLoading = state => state.movies.loading;

const getError = state => state.movies.error;

const getCast = state => state.movies.cast;

const getReviews = state => state.movies.reviews;

const getMovie = state => state.movies.item;

const isFavorite = createSelector([getMovie], movie => movie.isFavorite);

const isQueue = createSelector([getMovie], movie => movie.isQueue);

export default {
	getMovies,
	getLoading,
	getError,
	getCast,
	getReviews,
	getMovie,
	isFavorite,
	isQueue,
};
