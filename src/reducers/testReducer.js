import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_START,
	USER_LOGGED_OUT 
} from '../actions/types'

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
}

export default (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload }
		case LOGIN_USER_START:
			return { ...state, loading: true}
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload }
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Sign In Failed', loading: false }
		case USER_LOGGED_OUT:
			return { ...state, ...INITIAL_STATE }
		default:
			return state
	}
}