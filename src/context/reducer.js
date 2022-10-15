const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_GENRE':
			return {
				...state,
				genre: action.payload,
			}
		case 'SET_NOW_PLAYING':
			return {
				...state,
				nowPlaying: action.payload,
			}
		case 'SET_POPULAR':
			return {
				...state,
				popular: action.payload,
			}
		case 'SET_TRENDING_TV':
			return {
				...state,
				trendingTv: action.payload,
			}
		case 'SET_TRENDING':
			return {
				...state,
				trending: action.payload,
			}
		default:
			return state
	}
}
export default Reducer
