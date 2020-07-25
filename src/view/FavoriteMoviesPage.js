//Core
import React, { Component } from 'react';
//Components
import Notification from '../components/Notification/Notification';
import MoviesList from '../components/MoviesList/MoviesList';

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

	// componentDidUpdate(prevState) {
	// 	if (prevState.favorites !== this.state.favorites) {
	// 		localStorage.setItem('favorite_movies', JSON.stringify(this.state.favorites));
	// 	}
	// }

	render() {
		const { favorites } = this.state;
		const { location } = this.props;

		return (
			<>
				{favorites.length < 1 && <Notification message="We don't have any favorite movie." />}

				{favorites.length > 0 && (
					<MoviesList title="My favorite movies" moviesData={favorites} onLocation={location} />
				)}
			</>
		);
	}
}
