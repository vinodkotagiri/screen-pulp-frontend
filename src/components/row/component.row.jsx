import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './styles.row.css'
import { api } from '../../utils/'

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/'
const Row = ({ title, fetchUrl, isLarge = false }) => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		;(async () => {
			const response = await api.get(fetchUrl)
			setMovies(response?.data?.results)
			return response
		})()
	}, [fetchUrl])

	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row-posters'>
				{movies?.map(
					(movie) =>
						((isLarge && movie.poster_path) ||
							(!isLarge && movie.backdrop_path)) && (
							<img
								className={`row-poster ${isLarge && 'row-poster-large'}`}
								src={`${imageBaseUrl}${
									isLarge ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie?.title || movie?.name || movie?.original_name}
								key={movie.id}
							/>
						)
				)}
			</div>
		</div>
	)
}

export default Row
