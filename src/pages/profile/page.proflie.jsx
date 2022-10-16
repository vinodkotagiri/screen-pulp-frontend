import React from 'react'
import './styles.profile.css'
import { Navbar } from '../../components'
import { avatar } from '../../assets'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
const ProfilePage = () => {
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	return (
		<div className='profile'>
			<Navbar />
			<div className='profile-body'>
				<h1>Edit Profile</h1>
				<div className='profile-info'>
					<img alt='avatar' src={avatar} />
				</div>
				<div className='profile-details'>
					<h2>{user?.email}</h2>
					<div className='profile-plans'>
						<button
							className='logout-btn'
							onClick={() => {
								signOut(firebaseAuth)
								navigate('/auth')
							}}>
							Log Out
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProfilePage
