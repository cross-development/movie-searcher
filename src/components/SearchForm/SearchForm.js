//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Notification from '../Notification';
//Styles
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		value: '',
		error: false,
	};

	handleChange = ({ target: { value } }) => this.setState({ value });

	handleSubmit = e => {
		e.preventDefault();
		const { value } = this.state;

		if (!value || value === ' ') {
			return this.setState({ error: true });
		}

		this.props.onSubmit(value);
		this.setState({ value: '', error: false });
	};

	render() {
		const { value, error } = this.state;
		const { placeholder } = this.props;

		return (
			<>
				<form onSubmit={this.handleSubmit} className={styles.searchForm}>
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
							onChange={this.handleChange}
						/>
					</div>
				</form>

				{error && <Notification message="Please enter any movie title" />}
			</>
		);
	}
}
