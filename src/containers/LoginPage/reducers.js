import {
	LOGIN,
} from './actions'

const initialState = {
	currentUser: undefined
}

const loginPage = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return Object.assign({}, state, {
				currentUser: action.payload.data
			})
		}
		default: {
			return state
		}
	}
}

export default loginPage
