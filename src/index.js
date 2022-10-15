import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import axios from 'axios'
import { TMDB_BASE_URL } from './utils/api'
import MoviesProvider from './context/movies'
axios.defaults.baseURL = TMDB_BASE_URL
const root = createRoot(document.getElementById('root'))
root.render(
	<MoviesProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MoviesProvider>
)
