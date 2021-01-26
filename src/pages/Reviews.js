//Core
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Components
import ReviewsList from 'components/Additional/ReviewsList';
import { Notification } from 'components/Common';
//API
import moviesAPI from 'api/movies';

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { movieId } = useParams();

	useEffect(() => {
		setLoading(true);

		moviesAPI
			.fetchMovieReviews(movieId)
			.then(setReviews)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [movieId]);

	return (
		<>
			{error && <Notification message={error.message} />}

			{!loading && !error && reviews.length < 1 && (
				<Notification message="We don't have any reviews for this movie." />
			)}

			{reviews.length > 0 && <ReviewsList reviews={reviews} />}
		</>
	);
};

export default Reviews;
