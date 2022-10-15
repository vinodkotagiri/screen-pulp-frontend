import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Slider } from '../components'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import axios from 'axios'
import { APIKEY } from '../utils/api'
import { MoviesContext } from '../context/movies'
const HomePage = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const navigate = useNavigate()
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true)
		return () => (window.onscroll = null)
	}

	// =========================================================================
	// UPDATE GLOBAL STATE
	// =========================================================================
	const [state, dispatch] = useContext(MoviesContext)

	// -----------------------------------------------------------------------------
	// GET GENRE
	// -----------------------------------------------------------------------------
	const getGenres = async () => {
		await axios
			.get(`genre/movie/list?api_key=${APIKEY}`)
			.then((response) => {
				let genreData = {}
				response?.data?.genres?.map(
					(genre) => (genreData[genre.id] = genre.name)
				)
				dispatch({ type: 'SET_GENRE', payload: genreData })
			})
			.catch((error) => console.log(error))
	}
	// -------------------------------------------------------------------------
	// GET TRENDING MOVIES
	// -------------------------------------------------------------------------
	const getTrendingMovies = async () => {
		await axios
			.get(`/trending/movie/week?api_key=${APIKEY}`)
			.then((response) =>
				dispatch({
					type: 'SET_TRENDING',
					payload: response.data.results,
				})
			)
			.catch((error) => console.log(error))
	}
	// -----------------------------------------------------------------------------
	// GET TRENDING TV
	// -----------------------------------------------------------------------------
	const getTrendingTv = async () => {
		await axios
			.get(`/trending/tv/week?api_key=${APIKEY}`)
			.then((response) =>
				dispatch({
					type: 'SET_TRENDING_TV',
					payload: response.data.results,
				})
			)
			.catch((error) => console.log(error))
	}

	// -------------------------------------------------------------------------
	// GET NOW PLAYING MOVIES
	// -------------------------------------------------------------------------
	const getNowPlaying = async () => {
		await axios
			.get(`/movie/now_playing?api_key=${APIKEY}`)
			.then((response) => {
				dispatch({
					type: 'SET_NOW_PLAYING',
					payload: response.data.results,
				})
			})
			.catch((error) => console.log(error))
	}
	// -------------------------------------------------------------------------
	// GET POPULAT MOVIES
	// -------------------------------------------------------------------------
	const getPopularMovies = async () => {
		await axios
			.get(`/movie/popular?api_key=${APIKEY}`)
			.then((response) =>
				dispatch({
					type: 'SET_POPULAR',
					payload: response.data.results,
				})
			)
			.catch((error) => console.log(error))
	}
	useEffect(() => {
		getGenres()
		getTrendingMovies()
		getTrendingTv()
		getNowPlaying()
		getPopularMovies()
	}, [])
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
			<Slider trendingMovies={state.trending} trendingTv={state.trendingTv} />
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
