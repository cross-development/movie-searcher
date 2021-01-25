//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Notification from '../Common/Notification';
//Styles
import styles from './SearchForm.module.css';

//Fixed
const SearchForm = ({ onSubmit, placeholder }) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);

	const handleChange = ({ target: { value } }) => setValue(value);

	const handleSubmit = e => {
		e.preventDefault();

		if (!value || value === ' ') return setError(true);

		onSubmit(value);
		setError(false);
		setValue('');
	};

	return (
		<>
			<form onSubmit={handleSubmit} className={styles.searchForm}>
				<div className={styles.searchbar}>
					<button type="submit" className={styles.searchFormButton}>
						<span className={styles.searchFormButtonLabel}>Search</span>
					</button>

					<input
						className={styles.searchFormInput}
						type="text"
						value={value}
						autoComplete="off"
						placeholder={placeholder}
						onChange={handleChange}
					/>
				</div>
			</form>

			{error && <Notification message="Please enter any movie title" />}
		</>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default SearchForm;
