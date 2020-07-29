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

//TODO: добавить css чтобы при ховере на айтем показывалось имя актера

const TrendPersons = ({ title, actorsData, onLocation }) => (
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

TrendPersons.defaultProps = {
	title: '',
	onLocation: {},
};

TrendPersons.propTypes = {
	title: PropTypes.string,
	onLocation: PropTypes.object,
	actorsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrendPersons;
