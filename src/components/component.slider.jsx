import React from 'react'
import { CardSlider } from './'

const Slider = ({ trendingMovies, trendingTv }) => {
	return (
		<div>
			<CardSlider data={trendingMovies} title='Trending Movies' />
			<CardSlider data={trendingTv} title='Trending TV' />
		</div>
	)
}

export default Slider
