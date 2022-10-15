import React from 'react'
import { Card } from './'
import styled from 'styled-components'
const CardSlider = ({ data, title }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<div className='flex wrap j-between a-center gap-1'>
				{data?.slice(0, 12)?.map((movie, i) => (
					<Card movie={movie} index={i} key={movie.id} />
				))}
			</div>
		</Container>
	)
}

export default CardSlider

const Container = styled.div`
	padding: 0.5rem 1rem;
	h1 {
		padding: 1rem;
	}
`
