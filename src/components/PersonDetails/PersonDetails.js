//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import getPosterUrl from 'utils/getPosterUrl';
import getReversDate from 'utils/getReversDate';
//Assets
import getDefaultAvatar from 'assets/unnamed.jpg';
//Styles
import styles from './PersonDetails.module.css';

const PersonDetails = ({ actor }) => {
	const { profile_path, name, birthday, deathday, biography, place_of_birth } = actor;

	const personPoster = profile_path ? `${getPosterUrl}${profile_path}` : getDefaultAvatar;
	const personBirthday = birthday ? getReversDate(birthday) : 'No data available';
	const personDeathday = deathday ? getReversDate(deathday) : 'Present';
	const personPlaceOfBirth = place_of_birth ? place_of_birth : 'No data available';
	const personBiography = biography ? biography : 'No data available';

	return (
		<div className={styles.personWrapper}>
			<div className={styles.posterWrapper}>
				<img src={personPoster} alt={name} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>{name}</h1>
				<p>
					<span>Birthday:</span> {personBirthday}
				</p>
				<p>
					<span>Deathday:</span> {personDeathday}
				</p>
				<p>
					<span>Place of birth:</span> {personPlaceOfBirth}
				</p>
				<h2>Biography</h2>
				<p>{personBiography}</p>
			</div>
		</div>
	);
};

PersonDetails.propTypes = {
	actor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PersonDetails;
