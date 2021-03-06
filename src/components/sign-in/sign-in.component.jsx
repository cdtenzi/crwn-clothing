import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SigIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						changeHandler={this.handleChange}
						type='email'
						value={this.state.email}
						label='Name'
						required
					/>

					<FormInput
						changeHandler={this.handleChange}
						type='password'
						value={this.state.password}
						label='Email'
						required
					/>

					<CustomButton type='submit'> Sign In </CustomButton>
					<CustomButton onClick={signInWithGoogle} > Sign In With Google </CustomButton>
				</form>
			</div>
		)
	}
}
export default SigIn;