//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import ReviewsList from 'components/ReviewsList';
import Notification from 'components/Notification';

class Reviews extends Component {
	componentDidUpdate(prevProps, prevState) {
		const { match, onFetchMovieReviews } = this.props;

		if (prevProps !== this.props) {
			onFetchMovieReviews(match.params.movieId);
		}
	}

	render() {
		const { reviews, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !error && reviews.length < 1 && (
					<Notification message="We don't have any reviews for this movie." />
				)}

				{reviews.length > 0 && <ReviewsList {...this.props} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	error: moviesSelectors.getError(state),
	reviews: moviesSelectors.getReviews(state),
	isLoading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchMovieReviews: moviesOperations.fetchMovieReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
