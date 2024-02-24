import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
	
	const navigate = useNavigate()
	
	const initialValues = {
		opis: "",
		rasa_psa: "",
		miasto: "",
		ulica: "",
		numer_domu: "",
		numer_tel: "",
		oplata: "",
	}
	
	const validationSchema = Yup.object().shape({
		opis: Yup.string().required("Pole nie może być puste!"),
		rasa_psa: Yup.string().required("Pole nie może być puste!"),
		miasto: Yup.string().required("Pole nie może być puste!"),
		ulica: Yup.string().required("Pole nie może być puste!"),
		numer_domu: Yup.string(),
		numer_tel: Yup.string(),
		oplata: Yup.string(),
	})
	
	const onSubmit = (data) => {
		
		data.status = "wystawione";
		
		axios.post('http://localhost:3001/ogloszenia/new', data).then((response) => {
			console.log ("Ogłoszenie zostało dodane!");
		})
		
		navigate('/thanks')
	}
	
	return (
		<main>
			<Container>
				
				<Formik
					initialValues={ initialValues }
					onSubmit={ onSubmit }
					validationSchema={ validationSchema }
					>
					<Form>
						<Row>
								<label>Opis ogłoszenia:</label>
								<ErrorMessage name='opis' component='span' />
								<Field as='textarea' id='input_opis' name='opis' placeholder=''></Field>

								<p></p>
								<label>Podaj rasę psa:</label>
								<ErrorMessage name='rasa_psa' component='span' />
								<Field id='input_rasapsa' name='rasa_psa' placeholder=''></Field>

								<label>Miasto:</label>
								<ErrorMessage name='miasto' component='span' />
								<Field id='input_miasto' name='miasto' placeholder=''></Field>

								<label>Ulica:</label>
								<ErrorMessage name='ulica' component='span' />
								<Field id='input_ulica' name='ulica' placeholder=''></Field>

								<label>Numer mieszkania:</label>
								<ErrorMessage name='numer_domu' component='span' />
								<Field id='input_numer_domu' name='numer_domu' placeholder=''></Field>

								<label>Numer telefonu:</label>
								<ErrorMessage name='numer_tel' component='span' />
								<Field id='input_numer_tel' name='numer_tel' placeholder=''></Field>

								<label>Stawka za godzinę:</label>
								<ErrorMessage name='oplata' component='span' />
								<Field id='input_oplata' name='oplata' placeholder=''></Field>
						</Row>
						<hr></hr>
						<Row>
							<div className='large-button'>
								<button type='submit'>Wystaw ogłoszenie!</button>
							</div>
						</Row>
					</Form>
				</Formik>
			</Container>
		</main>
	)
}

export default Home
