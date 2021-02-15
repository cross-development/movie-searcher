//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Components
import { Pagination } from 'components/Common';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';
//Style
import styles from './MoviesList.module.css';

//Fixed
const MoviesList = ({ movies, location, totalPages, onChangePaginate }) => (
	<ul className={styles.movieList}>
		{movies.map(({ id, poster_path, name, title, vote_average }) => (
			<li className={styles.movieItem} key={id}>
				<Link
					className={styles.movieItemLink}
					to={{
						pathname: `/movies/${id}`,
						state: { from: location },
					}}
				>
					<img
						className={styles.movieItemImage}
						src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
						alt={name || title}
					/>
				</Link>
				<span className={styles.movieVote}>{vote_average.toFixed(1)}</span>
			</li>
		))}

		<li className={styles.pagination}>
			<Pagination totalPages={totalPages} onChangePaginate={onChangePaginate} />
		</li>
	</ul>
);

MoviesList.defaultProps = {
	location: {},
};

MoviesList.propTypes = {
	location: PropTypes.object,
	movies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default MoviesList;
