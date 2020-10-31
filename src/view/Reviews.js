//Core
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import ReviewsList from 'components/ReviewsList';
import Notification from 'components/Notification';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { moviesOperations } from 'redux/movies';

const Reviews = () => {
	const dispatch = useDispatch();
	const { reviews, error, loading } = useSelector(state => state.movies);

	const { movieId } = useParams();

	//TODO: fiiiiiix it - re-render after click to link
	useEffect(() => {
		dispatch(moviesOperations.fetchMovieReviews(movieId));
	}, [movieId, dispatch]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{!loading && !error && reviews.length < 1 && (
				<Notification message="We don't have any reviews for this movie." />
			)}

			{reviews.length > 0 && <ReviewsList reviews={reviews} />}
		</>
	);
};

export default Reviews;
