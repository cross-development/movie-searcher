//Core
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Loader from 'components/Loader';
import ReviewsList from 'components/ReviewsList';
import Notification from 'components/Notification';
//API
import moviesAPI from 'api/movies';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { movieId } = useParams();

	useEffect(() => {
		moviesAPI
			.fetchMovieReviews(movieId)
			.then(reviews => setReviews(reviews))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, [movieId]);

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
