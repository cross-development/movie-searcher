//Core
import React from 'react';
import PropTypes from 'prop-types';
//Utils
import { getPrettierActorDetails } from 'utils/getPrettierActor';
//Styles
import styles from './PersonDetails.module.css';

//Fixed
const PersonDetails = ({ actor }) => {
	const prettierActorDetails = getPrettierActorDetails(actor);
	const { name, poster, dayOfBirth, dayOfDeath, placeOfBirth, bioInfo } = prettierActorDetails;

	return (
		<div className={styles.personWrapper}>
			<div className={styles.posterWrapper}>
				<img src={poster} alt={name} />
			</div>

			<div className={styles.detailsWrapper}>
				<h1>{name}</h1>
				<p>
					<span>Birthday:</span> {dayOfBirth}
				</p>
				<p>
					<span>Deathday:</span> {dayOfDeath}
				</p>
				<p>
					<span>Place of birth:</span> {placeOfBirth}
				</p>
				<h2>Biography</h2>
				<p>{bioInfo}</p>
			</div>
		</div>
	);
};

PersonDetails.propTypes = {
	actor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PersonDetails;
