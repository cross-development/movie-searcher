//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultAvatar from '../../assets/unnamed.jpg';
//Routes
import routes from '../../routes';
//Styles
import styles from './CastList.module.css';

const CastList = ({ castsData, onLocation }) => {
	return (
		<ul className={styles.castsList}>
			{castsData.map(({ cast_id, name, profile_path }) => (
				<li key={cast_id} className={styles.castsListItem}>
					<Link
						className={styles.movieItemLink}
						to={{
							pathname: `${routes.movies}/${cast_id}`,
							state: { from: onLocation },
						}}
					>
						<img
							src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultAvatar}
							alt={name}
							className={styles.actorAvatar}
						/>
						<span className={styles.actorName}>{name}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

CastList.defaultProps = {
	onLocation: {},
};

CastList.propTypes = {
	castsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onLocation: PropTypes.object,
};

export default CastList;
