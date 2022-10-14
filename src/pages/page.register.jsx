import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BackgroundImage, Header } from '../components'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
	const [email, setEmail] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		if (isEmailValid) {
			e.preventDefault()
			navigate(`/register/password/${email}`)
		}
	}

	useEffect(() => {
		if (
			email.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
			)
		)
			setIsEmailValid(true)
		else setIsEmailValid(false)
	}, [email])

	return (
		<Container>
			<BackgroundImage />
			<div className='content'>
				<Header />
				<div className='body flex column a-center j-center'>
					<div className='text flex column '>
						<p className='p0'>Unlimited movies, Tv shows and more.</p>
						<p className='p1'>Watch anywhere, Cancle anytime.</p>
						<p className='p2'>Ready to watch? Register now!</p>
					</div>
					<div className='form'>
						<input
							type='email'
							placeholder='Enter your email'
							name='email'
							autoComplete='off'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button onClick={handleSubmit}>Get Started</button>
					</div>
					{!isEmailValid && (
						<p
							style={{
								color: 'red',
								fontSize: '1.2rem',
								fontWeight: 300,
							}}>
							Please enter a valid email!
						</p>
					)}
				</div>
			</div>
		</Container>
	)
}

export default RegisterPage
const Container = styled.div`
	position: relative;

	.content {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #ffffff20;
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-rows: 15vh 85vh;
	}

	.body {
		gap: 1rem;
	}
	.text {
		gap: 1rem;
		text-align: center;
		font-size: 2rem;
		font-weight: medium;

		.p0 {
			padding: 0 25rem;
			font-size: 3.5rem;
			line-height: 1;
			font-weight: 700;
		}
		.p1 {
			font-weight: 300;
		}
		.p2 {
			font-weight: 200;
		}
	}
	.form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		row-gap: 0;
		margin-top: 2rem;
		input {
			text-align: center;
			color: #000;
			border: none;
			height: 2.5rem;
			padding: 1.5rem;
			width: 30rem;
		}
		button {
			padding: 0.1rem 2rem;
			background-color: #ee4d2e;
			border: none;
			color: white;
			width: 15rem;
			height: 3rem;
			font-size: 1.05rem;
			font-weight: bolder;
		}
		button:hover {
			cursor: pointer;
			color: #ee4d2e80;
			background-color: rgba(0, 0, 0, 0.5);
		}
	}
`
