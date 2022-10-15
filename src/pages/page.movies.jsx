import React, { useContext } from 'react'

import { MoviesContext } from '../context/movies'

const MoviesPage = () => {
	const [state] = useContext(MoviesContext)
	console.log(state)
	return <div>MoviesPage</div>
}

export default MoviesPage
