import { createContext, useReducer } from 'react'

import Reducer from './reducer'

export const MoviesContext = createContext()

const initialState = {
	genre: [],
	nowPlaying: [],
	popular: [],
	trending: [],
	trendingTv: [],
}

const MoviesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState)
	return (
		<MoviesContext.Provider value={[state, dispatch]}>
			{children}
		</MoviesContext.Provider>
	)
}
export default MoviesProvider
