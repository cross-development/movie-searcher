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

	handleChange = e => {
		this.setState({ value: e.target.value });
	};

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
				<div className={styles.searchbar}>
					<form onSubmit={this.handleSubmit} className={styles.searchForm}>
						<input
							className={styles.searchFormInput}
							autoFocus
							type="text"
							autoComplete="off"
							placeholder={placeholder}
							value={value}
							onChange={this.handleChange}
						/>

						<button type="submit" className={styles.searchFormButton}>
							<span className={styles.searchFormButtonLabel}>Search</span>
						</button>
					</form>
				</div>

				{error && <Notification message="Please enter any movie title" />}
			</>
		);
	}
}
