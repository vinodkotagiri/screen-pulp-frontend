import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
const PlayerPage = () => {
	const navigate = useNavigate()
	return (
		<Container>
			<div className='player'>
				<div className='back'>
					<BsArrowLeft
						onClick={() => navigate(-1)}
						style={{ fontSize: '3rem', cursor: 'pointer' }}
					/>
				</div>
				<video
					src='https://res.cloudinary.com/vinodkotagiri/video/upload/v1665754127/My%20Websites%20assets/portfolio-projects/screen-pulp/Star_Wars-_The_Last_Jedi_Trailer_Official_cdjsi4.mp4'
					autoPlay
					loop
					controls></video>
			</div>
		</Container>
	)
}

export default PlayerPage

const Container = styled.div`
	.player {
		width: 100vw;
		height: 100vh;
		.back {
			position: absolute;
			padding: 2rem;
			z-index: 1;
		}
		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`
