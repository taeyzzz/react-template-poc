export const SET_MESSAGE = 'SET_MESSAGE'

const setMessageSuccess = (message) => {
	return {
		type: SET_MESSAGE,
		payload: {
			message
		}
	}
}

export const setMessage = (message) => {
	return async dispatch => {
		dispatch(setMessageSuccess(message))
	}
}
