import React, { useState } from 'react'
import styled from 'styled-components'
import { BackgroundImage, Header } from '../components'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../components'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
const LoginPage = () => {
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const [loader, setLoader] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const { email, password } = formData
		if (email && password) {
			setLoader(true)
			await signInWithEmailAndPassword(firebaseAuth, email, password)
				.then((response) => {
					setLoader(false)
					navigate('/')
				})
				.catch((error) => {
					console.log(error)
					setLoader(false)
					alert('Invalid Credentials')
					setFormData({ email: '', password: '' })
				})
		}
	}

	return (
		<Container>
			{!loader && (
				<>
					<BackgroundImage />
					<div className='content'>
						<Header title='Register' to='register' />
						<div className='body flex column a-center j-center'>
							<div className='text flex column '>
								<p className='p0'>Login</p>
							</div>
							<div className='form'>
								<input
									type='email'
									placeholder='Enter your email'
									name='email'
									autoComplete='off'
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											[e.target.name]: e.target.value,
										})
									}
								/>
								<input
									type='password'
									placeholder='Enter your password'
									name='password'
									autoComplete='off'
									value={formData.password}
									onChange={(e) =>
										setFormData({
											...formData,
											[e.target.name]: e.target.value,
										})
									}
								/>
								<button onClick={handleSubmit}>Login</button>
							</div>
						</div>
					</div>
				</>
			)}
			{loader && (
				<div className='flex j-center a-center' style={{ height: '100vh' }}>
					<div>
						<Loader />
					</div>
				</div>
			)}
		</Container>
	)
}

export default LoginPage
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
		flex-direction: column;
		background-color: #ffffff40;
		padding: 5rem;
		border-radius: 3rem;
		row-gap: 2rem;
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
