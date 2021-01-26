//Core
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
//API
import moviesAPI from 'api/movies';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';
//Styles
import styles from './AdditionMovies.module.css';

const AdditionMovies = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	const location = useLocation();

	useEffect(() => {
		moviesAPI.fetchNowPlayingMovies().then(setMovies).catch(setError);
	}, []);

	const memoMoviesList = useMemo(() => movies.filter((movie, idx) => idx < 4 && movie), [movies]);

	return (
		<div className={styles.moviesWrapper}>
			<div className={styles.titleWrapper}>
				<h3 className={styles.title}>Now playing</h3>
			</div>
			{!error && (
				<ul className={styles.moviesList}>
					{memoMoviesList.map(({ id, release_date, poster_path, title, vote_average }) => (
						<li key={poster_path} className={styles.movieItem}>
							<Link
								to={{
									pathname: `/movies/${id}`,
									state: { from: location },
								}}
							>
								<img
									src={poster_path ? `${getPosterUrl}${poster_path}` : getDefaultPoster}
									alt={title}
								/>
							</Link>

							<p className={styles.movieVote}>{vote_average.toFixed(1)}</p>

							<div className={styles.movieInfo}>
								<h4 className={styles.movieTitle}>{title}</h4>
								<p className={styles.movieRelease}>{release_date}</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AdditionMovies;
