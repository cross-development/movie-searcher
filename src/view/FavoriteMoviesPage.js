//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification';
import MoviesList from '../components/MoviesList';

export default class FavoriteMovies extends Component {
	state = {
		favorites: [],
	};

	componentDidMount() {
		const existFavList = localStorage.getItem('favorite_movies');

		if (existFavList) {
			this.setState({ favorites: JSON.parse(existFavList) });
		}
	}

	render() {
		const { favorites } = this.state;

		return (
			<>
				{favorites.length < 1 && <Notification message="We don't have any favorite movie." />}

				{favorites.length > 0 && (
					<MoviesList {...this.props} title="My favorite movies" moviesData={favorites} />
				)}
			</>
		);
	}
}
