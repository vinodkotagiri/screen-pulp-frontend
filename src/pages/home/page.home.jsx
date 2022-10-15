import React from 'react'
import './styles.home.css'
import { Banner, Navbar, Row } from '../../components/'
import { requests } from '../../utils/'
const HomePage = () => {
	return (
		<div className='homepage'>
			<Navbar />
			<Banner />
			<Row
				title='SCREEN PULP ORIGINALS'
				fetchUrl={requests.fetchOriginals}
				isLarge
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumenteries} />
		</div>
	)
}

export default HomePage
