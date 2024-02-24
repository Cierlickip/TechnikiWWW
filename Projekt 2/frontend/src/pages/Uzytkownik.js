import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Uzytkownik() {
	
	const navigate = useNavigate()
	
	const [temp_time, setTimer] = useState([])
	
	const [uzytkownik, getUzytkownikData] = useState([])
	const [ogloszenia_list, getReportedOgloszenia] = useState([])
	const [taken_reported_ogloszenia, getAcceptedOgloszenia] = useState([])
	const [completed_ogloszenia_list, getCompletedOgloszenia] = useState([])
	
	useEffect (() => {
		
		let interval = null;
		interval = setInterval(() => {
			setTimer(temp_time => temp_time + 1);
		}, 1000);
		
		axios.get(`http://localhost:3001/uzytkownik/info`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getUzytkownikData(response.data)
		})
		
		axios.get(`http://localhost:3001/ogloszenia/get`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getReportedOgloszenia(response.data)
		})
		
		axios.get(`http://localhost:3001/uzytkownik/ogloszenia/accepted`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getAcceptedOgloszenia(response.data)
		})
		
		axios.get(`http://localhost:3001/uzytkownik/ogloszenia/completed`, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {
			getCompletedOgloszenia(response.data)
		})
		
		return () => clearInterval(interval);
	}, [temp_time])
	
	function acceptOgloszenie (id) {
		console.log('Zaznacz ogloszenie ' + id + ' jako zaakceptowane')
		
		const data = {
			ogloszenie_id: id
		}
		
		axios.post(`http://localhost:3001/uzytkownik/ogloszenia/accept`, data, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {console.log(response)})
	}
	
	function markAsCompleted (id) {
		console.log('Zaznacz ogloszenie ' + id + ' jako wykonane')
		
		const data = {
			ogloszenie_id: id
		}
		
		axios.post(`http://localhost:3001/uzytkownik/ogloszenia/mark-as-completed`, data, {headers: { accessToken: sessionStorage.getItem("accessToken") }}).then((response) => {})
	}
	
	return (
		<main>
			<Container>
				<Row>
					<div className='large-button'>
						<p onClick={() => {
							window.sessionStorage.removeItem('accessToken')
							navigate('/')
						}}>Wyloguj się</p>
					</div>
				</Row>
				<Row>
					<h1 className='text-center'>Użytkownik:</h1>
					<p className='text-center'>#{uzytkownik.number_id} {uzytkownik.name} {uzytkownik.surname}</p>
				</Row>
				<hr></hr>
				<Row>
					
					<Col md='12'>
						<h2>Przyjęte ogłoszenia:</h2>
						<div className='ogloszenia'>
							{taken_reported_ogloszenia.map((ogloszenie, key) => {
								return (
									<div key={ key } className='ogloszenie'>
										<div className='ogloszenie-header-in-progress'>
											<Row>
												<Col md='12'>
													<h3>#{ogloszenie.id}</h3>
												</Col>
												
											</Row>
										</div>
										<div key={ key } className='ogloszenie-descript-in-progress report-dostepne'>
											<p>Opis: {ogloszenie.opis}</p>
											<p>Rasa psa: {ogloszenie.rasa_psa}</p>
											<p>Miasto: {ogloszenie.miasto}</p>
											<p>Ulica: {ogloszenie.ulica}</p>
											<p>Numer domu: {ogloszenie.numer_domu}</p>
											<p>Numer telefonu: {ogloszenie.numer_tel}</p>
											<p>Opłata: {ogloszenie.oplata}</p>
											<p>Jeśli puste, brak informacji</p>
											<div className='button_1'>
												<button onClick={ () => {
													markAsCompleted(ogloszenie.id)
												}}>Zaznacz jako wykonane</button>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</Col>
					<Col md='12'>
						<h2>Dostępne ogłoszenia</h2>
						<div className='ogloszenia'>
							{ogloszenia_list.map((ogloszenie, key) => {
								return (
									<div key={ key } className='ogloszenie'>
										<div className='ogloszenie-header'>
											<Row>
												<Col md='6'>
													<h3>#{ogloszenie.id}</h3>
												</Col>
											</Row>
										</div>
										<div className='ogloszenie-descript ogloszenie-dostepne'>
											<p>Opis: {ogloszenie.opis}</p>
											<p>Rasa psa: {ogloszenie.rasa_psa}</p>
											<p>Miasto: {ogloszenie.miasto}</p>
											<p>Ulica: {ogloszenie.ulica}</p>
											<p>Numer domu: {ogloszenie.numer_domu}</p>
											<p>Numer telefonu: {ogloszenie.numer_tel}</p>
											<p>Opłata: {ogloszenie.oplata}</p>
											<p>Jeśli puste, brak informacji</p>
											<div className='button_1'>
												<button onClick={ () => {
													acceptOgloszenie(ogloszenie.id)
												}}>Zaakceptuj</button>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</Col>
				</Row>
				<hr></hr>
				<Row>
					<h2>Wykonane</h2>
					<div className='ogloszenia'>
						{completed_ogloszenia_list.map((ogloszenie, key) => {
							return (
								<div key={ key } className='ogloszenie'>
									<div className='ogloszenie-header-completed'>
										<Row>
											<Col md='12'>
												<h3>#{ogloszenie.id}</h3>
											</Col>
										</Row>
									</div>
									<div key={ key } className='ogloszenie-descript-completed ogloszenie-dostepne'>
										<p>Opis: {ogloszenie.opis}</p>
										<p>Rasa psa: {ogloszenie.rasa_psa}</p>
										<p>Miasto: {ogloszenie.miasto}</p>
										<p>Ulica: {ogloszenie.ulica}</p>
										<p>Numer domu: {ogloszenie.numer_domu}</p>
										<p>Numer telefonu: {ogloszenie.numer_tel}</p>
										<p>Opłata: {ogloszenie.oplata}</p>
										<p>Jeśli puste, brak informacji</p>
									</div>
								</div>
							)
						})}
					</div>
				</Row>
			</Container>
		</main>
	)
}

export default Uzytkownik
