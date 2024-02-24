import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
	
	let navigate = useNavigate()
	
	const initialValues = {
		email: "",
		haslo: ""
	}
	
	const onSubmit = (login_data) => {
		
		axios.post('http://localhost:3001/login', login_data).then((response) => {
			if (!response.data.error) {
				
				sessionStorage.setItem('accessToken', response.data.accessToken)
				
				navigate('/uzytkownik')
			} else {
				alert (response.data.error)
			}
		})
		
	}
	
	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Błędny email lub hasło!").required("Wpisz adres email!"),
		haslo: Yup.string().required("Wpisz hasło!")
	})
	
	return (
		<main>
			<Container className='wrapper-login'>
				<div className='large-button'>
					<p onClick={() => {navigate('/')}}>Wróć do wystawiania ogłoszeń!</p>
				</div>
				<Row>
					<h2>Panel logowania</h2>
				</Row>
				<Row>
					<Formik
						initialValues={ initialValues }
						onSubmit={ onSubmit }
						validationSchema={ validationSchema }
					>
						<Form>
							<label>Email:</label>
							<ErrorMessage name='email' component='span' />
							<Field id='input_email' name='email' placeholder='example@example.com'></Field>
							<label>Hasło:</label>
							<ErrorMessage name='haslo' component='span' />
							<Field id='input_haslo' name='haslo' type='haslo' placeholder='********'></Field>
							<button type='submit' className='button-login-submit'>Zaloguj się</button>
						</Form>
					</Formik>
				</Row>
			</Container>
		</main>
	)
}

export default Login
