import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<Container className='flex a-center j-between'>
			<div className='logo'>
				<img src={logo} alt='logo' />
			</div>
			<Link to='/login'>
				<button>Sign in</button>
			</Link>
		</Container>
	)
}

export default Header

const Container = styled.div`
	z-index: 100;
	padding-right: 2rem;
	.logo {
		img {
			height: 10rem;
		}
	}
	button {
		padding: 0.5rem 2rem;
		background-color: #ee4d2e;
		border: none;
		color: white;
		border-radius: 0.4rem;
		font-size: 1.05rem;
		font-weight: bolder;
	}
	button:hover {
		cursor: pointer;
		color: #ee4d2e80;
		background-color: rgba(0, 0, 0, 0.5);
	}
`