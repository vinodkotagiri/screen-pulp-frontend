import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { firebaseAuth } from './firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { HomePage, AuthPage, ProfilePage } from './pages'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
const App = () => {
	const user = useSelector(selectUser)

	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(firebaseAuth, (userAuth) => {
			userAuth
				? dispatch(
						login({
							uid: userAuth.uid,
							email: userAuth.email,
						})
				  )
				: dispatch(logout)
		})
		return unsubscribe
	}, [dispatch])
	return (
		<div className='app'>
			{!user ? (
				<AuthPage />
			) : (
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/auth' element={<AuthPage />} />
					<Route path='/profile' element={<ProfilePage />} />
				</Routes>
			)}
		</div>
	)
}

export default App
