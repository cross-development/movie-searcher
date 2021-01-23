import { lazy } from 'react';

const Cast = lazy(() => import('pages/Cast' /* webpackChunkName: "cast-page" */));
const Reviews = lazy(() => import('pages/Reviews' /* webpackChunkName: "reviews-page"*/));
const NotFoundPage = lazy(() =>
	import('pages/NotFoundPage' /* webpackChunkName: "not-found-page"*/),
);

export default { NotFoundPage, Cast, Reviews };
