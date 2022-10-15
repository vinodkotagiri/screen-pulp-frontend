import React from 'react'
import './styles.banner.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { api, requests } from '../../utils'
const Banner = () => {
	const [movie, setMovie] = useState([])
	//function to turncate long description text
	const truncate = (text, n) => {
		return text?.length > n ? text.substring(0, n) + '...' : text
	}

	useEffect(() => {
		;(async () => {
			const response = await api.get(requests.fetchOriginals)
			setMovie(
				response.data.results[
					Math.floor(Math.random() * response.data.results.length - 1)
				]
			)
			return response
		})()
	}, [])

	return (
		<header
			className='banner'
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}>
			<div className='banner-contents'>
				<h1 className='banner-title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className='banner-buttons'>
					<button className='banner-button'>Play</button>
					<button className='banner-button'>My List</button>
				</div>
				<h1 className='banner-description'>
					{truncate(
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores
					asperiores iure. Numquam, ab illum ad dolorum tempore nam aliquam
					adipisci error fugiat porro omnis voluptatem atque a iusto! Aperiam.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores
					asperiores iure. Numquam, ab illum ad dolorum tempore nam aliquam
					adipisci error fugiat porro omnis voluptatem atque a iusto! Aperiam.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolores
					asperiores iure. Numquam, ab illum ad dolorum tempore nam aliquam
					adipisci error fugiat porro omnis voluptatem atque a iusto! Aperiam.`,
						150
					)}
				</h1>
			</div>
			<div className='banner-fadebottom' />
		</header>
	)
}

export default Banner
