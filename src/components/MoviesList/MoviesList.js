//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../../assets/default_poster.jpg';
//Routes
import routes from '../../routes';
//Style
import styles from './MoviesList.module.css';

const MoviesList = ({ title, moviesData, onLocation }) => {
	return (
		<>
			{title && <h2 className={styles.title}>{title}</h2>}

			<ul className={styles.movieList}>
				{moviesData.map(({ id, poster_path, name, title, vote_average }) => (
					<li className={styles.movieItem} key={id}>
						<Link
							className={styles.movieItemLink}
							to={{
								pathname: `${routes.movies}/${id}`,
								state: { from: onLocation },
							}}
						>
							<img
								className={styles.movieItemImage}
								src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
								alt={name || title}
							/>
							<span>{name || title}</span>
						</Link>
						<span className={styles.movieVote}>{vote_average}</span>
					</li>
				))}
			</ul>
		</>
	);
};

MoviesList.defaultProps = {
	title: '',
	onLocation: {},
};

MoviesList.propTypes = {
	title: PropTypes.string,
	onLocation: PropTypes.object,
	moviesData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MoviesList;
