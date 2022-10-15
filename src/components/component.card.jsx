import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi'
import axios from 'axios'
import { APIKEY } from '../utils/api'
const Card = ({ movie, index }) => {
	const navigate = useNavigate()
	const [isHovered, setisHovered] = useState(false)
	const [isLiked, setisLiked] = useState(false)
	const [genres, setGenres] = useState([])

	const getGenres = async () => {
		await axios
			.get(`genre/movie/list?api_key=${APIKEY}`)
			.then((response) => setGenres(response.data.genres))
			.catch((error) => console.log(error))
	}

	useEffect(() => {
		getGenres()
	}, [])

	let genreData = {}
	genres.forEach((g) => {
		genreData[g.id] = g.name
	})

	return (
		<Container
			onMouseEnter={() => setisHovered(true)}
			onMouseLeave={() => setisHovered(false)}>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
				alt='movie-title'
			/>
			{isHovered && (
				<div className='hover'>
					<div className='image-video-container'>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt='movie-title'
							onClick={() => navigate('/player')}
						/>
						<video
							src='https://res.cloudinary.com/vinodkotagiri/video/upload/v1665754127/My%20Websites%20assets/portfolio-projects/screen-pulp/Star_Wars-_The_Last_Jedi_Trailer_Official_cdjsi4.mp4'
							autoPlay
							loop
							muted
							onClick={() => navigate('/player')}
						/>
					</div>
					<div className='info-container flex column'>
						<h3 className='name' onClick={() => navigate('/player')}>
							{movie.title || movie.name}
						</h3>
						<div className='icons flex j-between'>
							<IoPlayCircleSharp
								title='Play'
								onClick={() => navigate('/player')}
							/>
							<RiThumbUpFill title='Like' />
							<RiThumbDownFill title='Dislike' />
							{isLiked ? (
								<BsCheck title='Remove From My List' />
							) : (
								<AiOutlinePlus title='Add to My List' />
							)}
						</div>
						<div className='info'>
							<BiChevronDown title='More Info' />
						</div>
					</div>
					<div className='genres flex'>
						<ul className='flex'>
							{movie.genre_ids.map((id) => (
								<li key={id}>{genreData[id]}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</Container>
	)
}

export default Card

const Container = styled.div`
	max-width: 230px;
	width: 230px;
	height: 100%;
	cursor: pointer;
	position: relative;
	img {
		border-radius: 0.2rem;
		width: 100%;
		height: 100%;
		z-index: 10;
	}
	.hover {
		z-index: 99;
		height: max-content;
		width: 20rem;
		position: absolute;
		top: -18vh;
		left: 0;
		border-radius: 0.3rem;
		box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
		background-color: #181818;
		transition: 0.3s ease-in-out;
		.image-video-container {
			position: relative;
			height: 140px;
			img {
				width: 100%;
				height: 140px;
				object-fit: cover;
				border-radius: 0.3rem;
				top: 0;
				z-index: 4;
				position: absolute;
			}
			video {
				width: 100%;
				height: 140px;
				object-fit: cover;
				border-radius: 0.3rem;
				top: 0;
				z-index: 5;
				position: absolute;
			}
		}
		.info-container {
			padding: 1rem;
			gap: 0.5rem;
		}
		.icons {
			.controls {
				display: flex;
				gap: 1rem;
			}
			svg {
				font-size: 2rem;
				cursor: pointer;
				transition: 0.3s ease-in-out;
				&:hover {
					color: #b8b8b8;
				}
			}
		}
		.genres {
			ul {
				gap: 1rem;
				li {
					padding-right: 0.7rem;
					&:first-of-type {
						list-style-type: none;
					}
				}
			}
		}
	}
`
