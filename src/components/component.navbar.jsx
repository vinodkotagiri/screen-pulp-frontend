import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
const links = [
	{ name: 'Home', path: '/' },
	{ name: 'TV Shows', path: '/tv' },
	{ name: 'Movies', path: '/movies' },
	{ name: 'My List', path: '/mylist' },
]

const Navbar = ({ isScrolled }) => {
	const [showSearch, setShowSearch] = useState(false)
	const [inputHover, setInputHover] = useState(false)
	const navigate = useNavigate()
	return (
		<Container>
			<nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
				<div className='left flex a-center'>
					<div className='brand flex a-center j-center'>
						<img src={logo} alt='logo' />
					</div>
					<ul className='links flex'>
						{links.map((link) => (
							<li key={link.name}>
								<Link to={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className='right flex a-center'>
					<div className={`search ${showSearch ? 'show-search' : ''}`}>
						<button
							className='search-btn'
							onFocus={() => setShowSearch(true)}
							onBlur={() => {
								if (!inputHover) setShowSearch(false)
							}}>
							<FaSearch style={{ color: 'white', fontSize: '1.2rem' }} />
						</button>
						<input
							type='text'
							placeholder='Search'
							onMouseEnter={() => setInputHover(true)}
							onMouseLeave={() => setInputHover(false)}
							onBlur={() => {
								setShowSearch(false)
								setInputHover(false)
							}}
						/>
					</div>
					<button
						className='signout-btn'
						onClick={() => {
							signOut(firebaseAuth)
							navigate('/register')
						}}>
						<FaSignOutAlt style={{ color: '#ee4d2e', fontSize: '1.2rem' }} />
					</button>
				</div>
			</nav>
		</Container>
	)
}

export default Navbar

const Container = styled.div`
	.scrolled {
		background-color: #000;
	}

	nav {
		position: fixed;
		top: 0;
		height: 6.5rem;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		padding: 0 4rem;
		transition: 0.3s ease-in-out;
	}

	.left {
		gap: 1rem;
		.brand {
			img {
				height: 10rem;
			}
		}
		.links {
			list-style-type: none;
			gap: 2rem;
			li {
				a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}

	.right {
		gap: 1rem;
		button {
			border: none;
			background-color: transparent;
			cursor: pointer;
			&:focus {
				outline: none;
			}
		}
		.search {
			display: flex;
			padding: 0.4rem;
			align-items: center;
			justify-content: center;
			padding: 0.2rem;
			padding-left: 0.5rem;
		}
	}

	input {
		width: 0;
		opacity: 0;
		visibility: hidden;
		transition: 0.3s ease-in-out;
		background-color: transparent;
		border: none;
		color: white;
		&:focus {
			outline: none;
		}
	}
	.show-search {
		border: 1px solid white;
		background-color: rgba(0, 0, 0, 0.6);
		input {
			width: 100%;
			opacity: 1;
			visibility: visible;
			padding: 0.3rem;
		}
	}
`
