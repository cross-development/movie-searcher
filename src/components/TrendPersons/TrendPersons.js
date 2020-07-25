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

const TrendPersons = ({ title, actorsData, onLocation }) => {
	return (
		<>
			{title && <h2 className={styles.title}>{title}</h2>}

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
							{/* <span>{name}</span> */}
						</Link>
					</div>
				))}
			</PersonsSlider>
		</>
	);
};

TrendPersons.defaultProps = {
	onLocation: {},
	title: '',
};

TrendPersons.propTypes = {
	title: PropTypes.string,
	onLocation: PropTypes.object,
	actorsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TrendPersons;
