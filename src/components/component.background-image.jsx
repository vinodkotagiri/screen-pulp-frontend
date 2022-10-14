import React from 'react'
import { backgroundUrl } from '../assets/constants'
import styled from 'styled-components'

const BackgroundImage = () => {
	return (
		<Container>
			<img src={backgroundUrl} alt='cover' />
		</Container>
	)
}

export default BackgroundImage

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	img {
		height: 100vh;
		width: 100vw;
		filter: blur(0.3rem);
	}
`
