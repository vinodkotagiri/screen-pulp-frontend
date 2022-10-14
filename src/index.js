import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { MovieProvider } from './context/movies'
import axios from 'axios'
import { TMDB_BASE_URL } from './utils/api'
axios.defaults.baseURL = TMDB_BASE_URL
const root = createRoot(document.getElementById('root'))
root.render(
	<MovieProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MovieProvider>
)
