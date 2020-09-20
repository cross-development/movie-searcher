//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Redux
import { collectionSelectors, collectionOperations } from 'redux/collection';
import { authSelectors } from 'redux/auth';
//Components
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import Notification from 'components/Notification';

class FavoriteMovies extends Component {
	static propTypes = {
		favorites: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
		onFetchFavoritesMovies: PropTypes.func.isRequired,
	};

	componentDidMount() {
		const {
			user: { uid },
			onFetchFavoritesMovies,
		} = this.props;
		onFetchFavoritesMovies(uid);
	}

	render() {
		const { favorites, location, error, isLoading } = this.props;

		return (
			<>
				{error && <Notification message={error.message} />}

				{isLoading && <Loader onLoad={isLoading} />}

				{favorites.length < 1 && <Notification message="We don't have any favorite movie." />}

				{favorites.length > 0 && <MoviesList movies={favorites} location={location} />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	user: authSelectors.existUser(state),
	error: collectionSelectors.getError(state),
	isLoading: collectionSelectors.getLoading(state),
	favorites: collectionSelectors.getFavoriteMovies(state),
});

const mapDispatchToProps = {
	onFetchFavoritesMovies: collectionOperations.fetchFavoriteMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
