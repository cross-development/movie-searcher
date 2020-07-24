//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Components
import PersonsSlider from '../PersonsSlider/PersonsSlider';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultAvatar from '../../assets/unnamed.jpg';
//Routes
import routes from '../../routes';
//Styles
import styles from './TrendPersons.module.css';

const TrendPersons = ({ actorsData, onLocation }) => {
	return (
		<PersonsSlider>
			{actorsData.map(({ id, name, profile_path }) => (
				<div key={id} className={styles.actorsListItem}>
					<Link
						className={styles.actorsItemLink}
						to={{
							pathname: `${routes.persons}/${id}`,
							state: { from: onLocation },
						}}
					>
						<img
							src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultAvatar}
							alt={name}
							className={styles.actorAvatar}
						/>
					</Link>
				</div>
			))}
		</PersonsSlider>
	);
};

TrendPersons.defaultProps = {
	onLocation: {},
};

TrendPersons.propTypes = {
	actorsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	onLocation: PropTypes.object,
};

export default TrendPersons;
