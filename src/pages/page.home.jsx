import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const HomePage = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const navigate = useNavigate()
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true)
		return () => (window.onscroll = null)
	}

	return (
		<Container>
			<Navbar isScrolled={isScrolled} />
			<div className='hero'>
				<img
					src='https://res.cloudinary.com/vinodkotagiri/image/upload/v1665751627/My%20Websites%20assets/portfolio-projects/screen-pulp/stream-pulp-home-cover_zw06hc.jpg'
					alt='hero-img'
					className='background-image'
				/>
				<div className='container'>
					<div className='logo'>
						<img
							src='https://res.cloudinary.com/vinodkotagiri/image/upload/v1665752403/My%20Websites%20assets/portfolio-projects/screen-pulp/starwars-movie-logo_smy5bm.png'
							alt='movie-logo'
						/>
					</div>
					<div className='buttons flex'>
						<button
							className='flex a-center j-center'
							onClick={() => navigate('/player')}>
							<FaPlay />
							&nbsp;Play
						</button>
						<button className='flex a-center j-center'>
							<AiOutlineInfoCircle style={{ fontSize: '2rem' }} />
							&nbsp;More Info
						</button>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default HomePage

const Container = styled.div`
	background-color: 'black';
	.hero {
		position: relative;
		.background-image {
			filter: brightness(0.6);
		}
		img {
			height: 100vh;
			width: 100vw;
		}
		.container {
			position: absolute;
			bottom: 5rem;
			img {
				width: 30%;
				height: 30%;
				margin-left: 5rem;
			}
		}
		.buttons {
			margin: 5rem;
			gap: 2rem;
			button {
				font-size: 1.4rem;
				gap: 1rem;
				border-radius: 0.2rem;
				padding: 0.5rem 3rem 0.5rem 2.5rem;
				border: none;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				&:hover {
					opacity: 70%;
				}
				&:nth-of-type(2) {
					background-color: #00000080;
					color: #fff;
				}
			}
		}
	}
`
