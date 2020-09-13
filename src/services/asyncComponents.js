import { lazy } from 'react';

const Cast = lazy(() => import('view/Cast' /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() => import('view/Reviews' /* webpackChunkName: "reviews-view"*/));
const NotFoundPage = lazy(() =>
	import('view/NotFoundPage' /* webpackChunkName: "not-found-view"*/),
);

export default {
	NotFoundPage,
	Cast,
	Reviews,
};
