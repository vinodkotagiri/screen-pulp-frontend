const API_KEY = '7c9f853c73290a076c5b85bbeff54b58'

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumenteries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
}
export default requests
