import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header, Loader } from '../components'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
const PasswordPage = () => {
	const navigate = useNavigate()
	const { email } = useParams()
	const [password, setPassword] = useState('')
	const [registered, setRegistered] = useState(false)
	const [isPasswordValid, setIsPasswordValid] = useState(false)
	const [loader, setLoader] = useState(false)

	const handleRegister = (e) => {
		if (isPasswordValid) {
			e.preventDefault()
			registerUserToFirebase(email, password)
			setRegistered(true)
			setLoader(true)
		}
		setTimeout(() => {
			setLoader(false)
			navigate('/login')
		}, 3000)
	}

	const registerUserToFirebase = async (email, password) => {
		try {
			await createUserWithEmailAndPassword(firebaseAuth, email, password)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (
			password.match(
				/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
			)
		) {
			setIsPasswordValid(true)
		} else {
			setIsPasswordValid(false)
		}
	}, [password])
	return (
		<>
			<Header />
			{!registered && (
				<Container>
					<form>
						<h4>Enter your password and you'll be watching in no time. </h4>
						<label>
							Email:&nbsp;<span>{email}</span>
						</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={handleRegister}>Register</button>
						{!isPasswordValid && (
							<p
								style={{
									color: 'red',
									fontSize: '0.8rem',
									fontWeight: 200,
								}}>
								password must be atleast 8 characters, shoud have a number and a
								special character.
							</p>
						)}
					</form>
				</Container>
			)}
			{registered && (
				<div className='flex column j-center a-center'>
					<h1>Thanks for registering!</h1>
					{loader && <Loader />}
				</div>
			)}
		</>
	)
}

export default PasswordPage

const Container = styled.div`
	background-color: #ffffff10;
	color: #e5e9f0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 3rem;
	border-radius: 3rem;
	box-shadow: 2px 2px 16px 10px #ffffff30;
	height: 50vh;
	width: 100vh;
	form {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 1rem;
		padding:3rem 1.25rem;
	}
	span {
		font-size: 1.2rem;
		font-weight: 200;
	}
	input {
		text-align: center;
		color: #000;
		border: none;
		height: 3.5rem;
		padding: 1.5rem;
		width: 100%;
		outline: none;
		background-color: #ffffff90;
		font-size: 1.2rem;
		
	}

	button {
		padding: 0.1rem 2rem;
		background-color: #ee4d2e;
		border: none;
		color: white;
		width: 100%
		font-size: 1.05rem;
		font-weight: bolder;
		height:3.5rem;
	}
	button:hover {
		cursor: pointer;
		color: #ee4d2e80;
		background-color: rgba(0, 0, 0, 0.5);
	}

`
