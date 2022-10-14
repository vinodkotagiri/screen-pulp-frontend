import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPage, HomePage } from './pages'
const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</Fragment>
	)
}

export default App
