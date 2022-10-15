import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage, LoginPage } from './pages'
const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	)
}

export default App
