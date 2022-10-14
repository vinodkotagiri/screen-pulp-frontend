import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	PasswordPage,
	PlayerPage,
} from './pages'
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/register/password/:email' element={<PasswordPage />} />
			<Route path='/player' element={<PlayerPage />} />
		</Routes>
	)
}

export default App
