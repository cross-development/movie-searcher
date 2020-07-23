//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import getPosterUrl from '../../utils/getPosterUrl';
//Assets
import getDefaultPoster from '../../assets/default_poster.jpg';
//Styles
import styles from './PersonDetails.module.css';

//TODO: исправит дату смерти на рендер по условию
const PersonDetails = ({ personData }) => {
	const { profile_path, name, birthday, deathday, biography, place_of_birth } = personData;

	return (
		<div className={styles.personWrapper}>
			<div className={styles.posterWrapper}>
				<img src={profile_path ? `${getPosterUrl}${profile_path}` : getDefaultPoster} alt={name} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>{name}</h1>
				<p>
					<span>Birthday:</span> {birthday.split('-').reverse().join('.')}
				</p>
				<p>
					<span>Deathday:</span> {deathday && deathday.split('-').reverse().join('.')}
				</p>
				<p>
					<span>Place of birth:</span> {place_of_birth}
				</p>
				<h2>Biography</h2>
				<p>{biography}</p>
			</div>
		</div>
	);
};

PersonDetails.propTypes = {
	personData: PropTypes.object.isRequired,
};

export default PersonDetails;
