//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Assets
import getDefaultPoster from 'assets/default_poster.jpg';
//Style
import styles from './PersonsList.module.css';

//Fixed
const PersonsList = ({ actors, location }) => (
	<ul className={styles.personList}>
		{actors.map(({ id, profile_path, name, popularity }) => (
			<li className={styles.personItem} key={id}>
				<Link
					className={styles.personItemLink}
					to={{
						pathname: `/persons/${id}`,
						state: { from: location },
					}}
				>
					<img
						className={styles.personItemImage}
						src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultPoster}
						alt={name}
					/>
				</Link>
				<span className={styles.personVote}>{Math.round(popularity)}</span>
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
);

PersonsList.defaultProps = {
	location: {},
};

PersonsList.propTypes = {
	location: PropTypes.object,
	actors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default PersonsList;
