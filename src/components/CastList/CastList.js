//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
//Routes
import routes from 'router';
//Styles
import styles from './CastList.module.css';

//TODO: откорректировать pathname: `/person/${id}`, на свойство из роутов

const CastList = ({ cast, location }) => (
	<ul className={styles.castsList}>
		{cast.map(
			({ id, name, profile_path }) =>
				profile_path && (
					<li key={id} className={styles.castsListItem}>
						<Link
							className={styles.castsItemLink}
							to={{
								// pathname: `${routes.persons}/${id}`,
								pathname: `/person/${id}`,
								state: { from: location },
							}}
						>
							<span className={styles.actorName}>{name}</span>
							<img
								src={`${getPosterUrl}${profile_path}`}
								alt={name}
								className={styles.actorAvatar}
							/>
						</Link>
					</li>
				),
		)}
	</ul>
);

CastList.defaultProps = {
	location: {},
};

CastList.propTypes = {
	location: PropTypes.object,
	cast: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default CastList;
