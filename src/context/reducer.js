let user = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser'))
	: '';

export const initialState = {
	user: '' || user,
	error: null,
	loading: false,
};

export const AuthReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'REQUEST_REGISTER':
			return {
				...initialState,
				loading: true,
			};

		case 'REGISTER_SUCCESS':
			return {
				...initialState,
				user: payload,
				loading: false,
			};

		case 'REGISTER_ERROR':
			return {
				...initialState,
				error: payload,
				loading: false,
			};

		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};

		case 'LOGIN_SUCCESS':
			return {
				...initialState,
				user: payload,
				loading: false,
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				error: payload,
				loading: false,
			};

		case 'REQUEST_LOGOUT':
			return {
				...initialState,
				loading: true,
			};

		case 'LOGOUT_SUCCESS':
			return {
				...initialState,
				user: '',
				loading: false,
			};

		case 'LOGOUT_ERROR':
			return {
				...initialState,
				error: payload,
				loading: false,
			};

		case 'REQUEST_CURRENT_USER':
			return {
				...initialState,
				loading: true,
			};

		case 'CURRENT_USER_SUCCESS':
			return {
				...initialState,
				user: payload,
				loading: false,
			};

		case 'CURRENT_USER_ERROR':
			return {
				...initialState,
				error: payload,
				loading: false,
			};

		default:
			return state;
	}
};
