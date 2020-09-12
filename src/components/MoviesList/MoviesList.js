//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';
//Routes
import routes from 'router';
//Style
import styles from './MoviesList.module.css';

const MoviesList = ({ moviesData, location }) => (
	<>
		<ul className={styles.movieList}>
			{moviesData.map(({ id, poster_path, name, title, vote_average }) => (
				<li className={styles.movieItem} key={id}>
					<Link
						className={styles.movieItemLink}
						to={{
							pathname: `${routes.movies}/${id}`,
							state: { from: location },
						}}
					>
						<img
							className={styles.movieItemImage}
							src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
							alt={name || title}
						/>
						{/* <span>{name || title}</span> */}
					</Link>
					<span className={styles.movieVote}>{vote_average}</span>
				</li>
			))}
			<li className={styles.pagination}>
				<button type="submit" className={styles.button}>
					&larr;
				</button>
				<button type="submit" className={styles.button}>
					&rarr;
				</button>
			</li>
		</ul>
	</>
);

MoviesList.defaultProps = {
	title: '',
	location: {},
};

MoviesList.propTypes = {
	title: PropTypes.string,
	location: PropTypes.object,
	moviesData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default MoviesList;
