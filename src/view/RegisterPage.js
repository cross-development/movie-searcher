//Core
import React, { useState } from 'react';
//Components
import Register from 'components/Register';
//Redux
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const initialState = {
	name: '',
	email: '',
	password: '',
};

//Fixed
const RegisterView = () => {
	const [state, setState] = useState(initialState);

	const dispatch = useDispatch();

	const handleChangeState = ({ target: { name, value } }) =>
		setState(prevState => ({ ...prevState, [name]: value }));

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(authOperations.register({ ...state }));
		setState(initialState);
	};

	return <Register {...state} onSubmit={handleSubmit} onChange={handleChangeState} />;
};

export default RegisterView;
