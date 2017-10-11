import React, { Component } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { logOutUser } from '../actions'
import { store } from '../store'

class DashBoard extends Component {

	componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('user logged',user)
			} else {
				console.log('no active user')
				store.dispatch(push('/'))
			}
		})
	}

	handleClick() {
		this.props.logOutUser()
	}

	render() {
		return (
			<div className="col-md-12 text-center">
				<div className="page-header">
					<h1>DashBoard</h1>
				</div>
				<button 
					className="btn btn-primary"
					onClick={this.handleClick.bind(this)}
				>
					LogOut
				</button>
			</div>
		)
	}
}

export default connect(null, { logOutUser })(DashBoard)

