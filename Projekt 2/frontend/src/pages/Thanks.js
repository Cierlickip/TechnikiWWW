import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Thanks() {
	
	const navigate = useNavigate()
	
	return (
		<main>
			<Container>
				<p>Dziękujemy za wystawienie ogłoszenia!</p>
				<p>gdy ktoś przyjmię zgłoszenie otrzymasz wiadomość </p>
				<p>Twój pies na pewno będzie szczęśliwy!</p>
				<img className='logo' src='https://i0.wp.com/peterquoc.com/blog/wp-content/uploads/2016/05/thank_you_glow.png?w=800&ssl=1' alt='logo' />
			</Container>
		</main>
	)
}

export default Thanks