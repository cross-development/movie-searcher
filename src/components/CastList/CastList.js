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

const CastList = ({ castData, location }) => (
	<ul className={styles.castsList}>
		{castData.map(
			({ id, name, profile_path }) =>
				profile_path && (
					<li key={id} className={styles.castsListItem}>
						<Link
							className={styles.castsItemLink}
							to={{
								pathname: `${routes.persons}/${id}`,
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
	castData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any).isRequired).isRequired,
};

export default CastList;
