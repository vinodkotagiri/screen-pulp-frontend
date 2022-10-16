import React from 'react'
import './styles.navbar.css'
import { logo, avatar } from '../../assets'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
	const [show, setShow] = useState(false)

	const navigate = useNavigate()

	const transitionNavbar = () => {
		if (window.scrollY > 100) setShow(true)
		else setShow(false)
	}
	useEffect(() => {
		window.addEventListener('scroll', transitionNavbar)
		return () => window.removeEventListener('scroll', transitionNavbar)
	}, [])

	return (
		<div className={`navbar ${show && 'nav-dark'}`}>
			<div className='nav-contents'>
				<img
					className='logo'
					src={logo}
					alt='logo'
					onClick={() => navigate('/')}
				/>
				<img
					className='avatar'
					src={avatar}
					alt='avatar'
					onClick={() => navigate('/profile')}
				/>
			</div>
		</div>
	)
}

export default Navbar
