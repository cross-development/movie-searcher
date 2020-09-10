//Core
import { createAction } from '@reduxjs/toolkit';

const getActorsRequest = createAction('actors/getActorsRequest');
const getActorsSuccess = createAction('actors/getActorsSuccess');
const getActorsFailure = createAction('actors/getActorsFailure');

const searchActorsRequest = createAction('actors/searchActorsRequest');
const searchActorsSuccess = createAction('actors/searchActorsSuccess');
const searchActorsFailure = createAction('actors/searchActorsFailure');

const getActorDetailsRequest = createAction('actors/getActorDetailsRequest');
const getActorDetailsSuccess = createAction('actors/getActorDetailsSuccess');
const getActorDetailsFailure = createAction('actors/getActorDetailsFailure');

export default {
	getActorsRequest,
	getActorsSuccess,
	getActorsFailure,

	searchActorsRequest,
	searchActorsSuccess,
	searchActorsFailure,

	getActorDetailsRequest,
	getActorDetailsSuccess,
	getActorDetailsFailure,
};
