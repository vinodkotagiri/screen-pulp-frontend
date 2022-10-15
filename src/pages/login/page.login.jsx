import React, { useState } from 'react'
import './styles.login.css'
import { logo, backdropHome } from '../../assets'
import { SigninForm } from '../../components'
const LoginPage = () => {
	const [signin, setSignin] = useState(false)
	return (
		<div className='login' style={{ backgroundImage: `url(${backdropHome})` }}>
			<div className='background'>
				<img src={logo} alt='logo' className='logo' />
				<button className='login-btn' onClick={() => setSignin(true)}>
					Sign In
				</button>
				<div className='gradient-overlay' />
			</div>
			<div className='login-content'>
				{!signin && (
					<>
						<h1>Unlimited movies,Tv shows and more</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership .
						</h3>
						<div className='login-input'>
							<form className='login-form'>
								<input type='email' placeholder='Email address' />
								<button
									className='getstarted-btn'
									onClick={() => setSignin(true)}>
									Get Started
								</button>
							</form>
						</div>
					</>
				)}
			</div>
			{signin && <SigninForm />}
		</div>
	)
}

export default LoginPage
