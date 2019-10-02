import {
	SET_MESSAGE,
} from './actions'

const initialState = {
	message: "hello"
}

const application = (state = initialState, action) => {
	switch (action.type) {
		case SET_MESSAGE: {
			return Object.assign({}, state, {
				message: action.payload.message
			})
		}
		default: {
			return state
		}
	}
}

export default application
