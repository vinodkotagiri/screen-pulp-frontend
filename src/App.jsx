import React, { Fragment } from 'react'
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
		<Fragment>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/register/password/:email' element={<PasswordPage />} />
				<Route path='/player' element={<PlayerPage />} />
			</Routes>
		</Fragment>
	)
}

export default App
