import firebase from 'firebase'
import { push } from 'react-router-redux'
import { store } from '../store'

import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_START,
	LOGIN_USER_FAIL,
	LOGIN_USER_SUCCESS 
} from './types'

export const captureEmailChange = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const capturePasswordChange = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const sendRegistrationToFirebase = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER_START })
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))				
			.catch((error) => {
				console.log(error)
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(user => loginUserSuccess(dispatch, user))
				.catch(() => loginUserFail(dispatch))
			})
	}
}

// helper function for loginUser
// no need to export 
const loginUserSuccess = (dispatch, user) => {
	dispatch({ 
		type: LOGIN_USER_SUCCESS, 
		payload: user 
	})

	store.dispatch(push('/dashboard'))
}

// helper function for loginUser
// no need to export 
const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL })
}
