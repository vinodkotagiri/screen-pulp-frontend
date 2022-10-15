import React, { useRef, useState } from 'react'
import './styles.signinform.css'
import { firebaseAuth } from '../../firebaseConfig'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
const SigninForm = () => {
	const emailRef = useRef(null)
	const passwordRef = useState(null)

	const signIn = async (e) => {
		e.preventDefault()
		await signInWithEmailAndPassword(
			firebaseAuth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser)
			})
			.catch((error) => alert(error.message))
	}
	const register = async (e) => {
		e.preventDefault()
		await createUserWithEmailAndPassword(
			firebaseAuth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser)
			})
			.catch((error) => alert(error.message))
	}

	return (
		<div className='signin-form'>
			<form>
				<h1>Signin</h1>
				<input ref={emailRef} type='email' placeholder='Email' />
				<input ref={passwordRef} type='password' placeholder='Password' />
				<button type='submit' onClick={signIn}>
					Signin In
				</button>
				<h5>
					<span className='gray-text'>New to Screen Pulp?</span>&nbsp;{' '}
					<span className='link-text' onClick={register}>
						Signup now
					</span>
				</h5>
			</form>
		</div>
	)
}

export default SigninForm
