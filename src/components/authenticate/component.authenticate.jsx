import React, { useRef } from 'react'
import './styles.authenticate.css'
import { firebaseAuth } from '../../firebaseConfig'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Authenticate = () => {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const navigate = useNavigate()
	const login = async (e) => {
		e.preventDefault()
		await signInWithEmailAndPassword(
			firebaseAuth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				navigate('/')
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
		<div className='auth-form'>
			<form>
				<h1>Signin</h1>
				<input ref={emailRef} type='email' placeholder='Email' />
				<input ref={passwordRef} type='password' placeholder='Password' />
				<button type='submit' onClick={login}>
					Login
				</button>
				<h5>
					<span className='gray-text'>New to Screen Pulp?</span>&nbsp;{' '}
					<span className='link-text' onClick={register}>
						Register
					</span>
				</h5>
			</form>
		</div>
	)
}

export default Authenticate
