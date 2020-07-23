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
import styles from './PersonsList.module.css';

const PersonsList = ({ personsData, onLocation }) => {
	return (
		<ul className={styles.personList}>
			{personsData.map(({ id, profile_path, name, popularity }) => (
				<li className={styles.personItem} key={id}>
					<Link
						className={styles.personItemLink}
						to={{
							pathname: `${routes.persons}/${id}`,
							state: { from: onLocation },
						}}
					>
						<img
							className={styles.personItemImage}
							src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultPoster}
							alt={name}
						/>
						<span>{name}</span>
					</Link>
					<span className={styles.personVote}>{Math.round(popularity)}</span>
				</li>
			))}
		</ul>
	);
};

PersonsList.defaultProps = {
	onLocation: {},
};

PersonsList.propTypes = {
	personsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onLocation: PropTypes.object,
};

export default PersonsList;
