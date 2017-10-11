import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	captureEmailChange, 
	capturePasswordChange,
	sendRegistrationToFirebase 
} from '../actions'
import { 
	Button, 
	Form,  
	FormControl,
	FormGroup,
	Col,
	Grid
} from 'react-bootstrap'

class RegistrationForm extends Component {

	handleButtonPress(event) {
		event.preventDefault()
		const { email, password } = this.props
		this.props.sendRegistrationToFirebase({ email, password })
	}

	render() {
		console.log(this.props)
		return (
			<Grid bsClass="container">
			<Form horizontal>
				 <FormGroup controlId="formHorizontalEmail">
			      <Col sm={6} smOffset={3}>
			        <FormControl 
			        	type="email" 
			        	placeholder="Email"
			        	onChange={e => this.props.captureEmailChange(e.target.value)}
								value={this.props.email} 
			        />
			      </Col>
			    </FormGroup>
			     <FormGroup controlId="formHorizontalPassword">
				      <Col sm={6} smOffset={3}>
				        <FormControl 
				        	type="password" 
				        	placeholder="Password"
				        	onChange={e => this.props.capturePasswordChange(e.target.value)}
				        	value={this.props.password} 
				        />
				      </Col>
				    </FormGroup>
				    <p>{this.props.error}</p>
						<FormGroup>
				      <Col smOffset={3} sm={6}>
					      <Button 
				        	type="submit" 
				        	bsStyle="success"
				        	disabled={this.props.loading}
				        	onClick={this.handleButtonPress.bind(this)}
				        >
				          {this.props.loading ? 'Loading...' : 'Register / Login'}
				        </Button>
				      </Col>
				    </FormGroup>
			</Form>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {

	const { 
		email, 
		password, 
		loading,
		error 
	} = state.test  

	return { 
		email, 
		password,
		loading,
		error 
	}
}

export default connect(mapStateToProps, { 
	captureEmailChange, 
	capturePasswordChange,
	sendRegistrationToFirebase 
})(RegistrationForm)




