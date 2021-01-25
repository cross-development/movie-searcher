//Core
import React, { useState } from 'react';
//Components
import { Register } from 'components/Auth';
import { Loader, Notification } from 'components/Common';
//Context
import { userSingUp, useAuthState, useAuthDispatch } from 'context';

const initialState = {
	name: '',
	email: '',
	password: '',
};

//Fixed
const RegisterView = () => {
	const [state, setState] = useState(initialState);

	const dispatch = useAuthDispatch();
	const { loading, error } = useAuthState();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		userSingUp(dispatch, { ...state });
		setState(initialState);
	};

	return (
		<>
			{loading && <Loader onLoad={loading} />}

			{error && <Notification message={error.message} />}

			{!loading && <Register {...state} onSubmit={handleSubmit} onChange={handleChangeState} />}
		</>
	);
};

export default RegisterView;
