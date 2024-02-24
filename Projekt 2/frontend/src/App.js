import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Uzytkownik from './pages/Uzytkownik'
import Thanks from './pages/Thanks'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
	return (
		<div className='root'>
			<Router>
				<div className='first_header'>
					<Container>
						<Row>
							<Col md='4'>
								<img className='logo' src='https://cdn.discordapp.com/attachments/1156286660892434525/1202724251308916856/logo.png?ex=65ce7f3f&is=65bc0a3f&hm=92e6c401036181e65fa8a5cd0c015a48a7d809d04c113a40c13a29478aa27d70&' alt='logo' />
							</Col>
							<Col md='4' className='main_text'>
								<h1>Wynajmij opiekuna dla psa!</h1>
							</Col>
							<Col md='4'></Col>
						</Row>
					</Container>
				</div>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/login' exact element={<Login />} />
					<Route path='/uzytkownik' exact element={<Uzytkownik />} />
					<Route path='/thanks' exact element={<Thanks />} />
				</Routes>
				<div className='footer'>
					<Container>
						<Row>
							<Col md='6'>
								<h2>Zaloguj się</h2>
								<p>
									<Link to='/login'>Login</Link>
								</p>
							</Col>
							<Col md='6'>
								<h2>Kontakt:</h2>
								<p>Adres: Nashville, TN37201, US</p>
								<p>Telefon: +62 71 627 938</p>
								<p>Email: doogiepedia@gmail.com</p>
							</Col>
						</Row>
					</Container>
					<Container fluid>
						<Row>
							<p className='text-center'>Copyright &copy; Doggiepedia - All rights reserved.</p>
						</Row>
					</Container>
				</div>
			</Router>
		</div>
	)
}

export default App;
