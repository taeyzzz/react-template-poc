export const LOGIN = 'LOGIN'

const loginSuccess = (data) => {
	return {
		type: LOGIN,
		payload: {
			data
		}
	}
}

export const login = (data) => {
	return async dispatch => {
		dispatch(loginSuccess(data))
	}
}
