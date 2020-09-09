//Core
import { createAction } from '@reduxjs/toolkit';

const getActorsRequest = createAction('actors/getActorsRequest');
const getActorsSuccess = createAction('actors/getActorsSuccess');
const getActorsFailure = createAction('actors/getActorsFailure');

const getActorDetailsRequest = createAction('actors/getActorDetailsRequest');
const getActorDetailsSuccess = createAction('actors/getActorDetailsSuccess');
const getActorDetailsFailure = createAction('actors/getActorDetailsFailure');

const getActorsByQueryRequest = createAction('actors/getActorsByQueryRequest');
const getActorsByQuerySuccess = createAction('actors/getActorsByQuerySuccess');
const getActorsByQueryFailure = createAction('actors/getActorsByQueryFailure');

export default {
	getActorsRequest,
	getActorsSuccess,
	getActorsFailure,

	getActorDetailsRequest,
	getActorDetailsSuccess,
	getActorDetailsFailure,

	getActorsByQueryRequest,
	getActorsByQuerySuccess,
	getActorsByQueryFailure,
};
