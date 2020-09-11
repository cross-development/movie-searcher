//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Redux
import { moviesOperations, moviesSelectors } from 'redux/movies';
//Components
import Loader from 'components/Loader';
import CastList from 'components/CastList';
import Notification from 'components/Notification';

class Cast extends Component {
	componentDidUpdate(prevProps, prevState) {
		const { match, onFetchMovieCast } = this.props;

		if (prevProps !== this.props) {
			onFetchMovieCast(match.params.movieId);
		}
	}

	render() {
		const { cast, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{!isLoading && !error && cast.length < 1 && (
					<Notification message="We don't have any actors for this movie." />
				)}

				{cast.length > 0 && <CastList {...this.props} castData={cast} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	cast: moviesSelectors.getCast(state),
	error: moviesSelectors.getError(state),
	isLoading: moviesSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onFetchMovieCast: moviesOperations.fetchMovieCast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cast);
