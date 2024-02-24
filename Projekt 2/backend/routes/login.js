const express = require ('express')
const router = express.Router ()
const { uzytkownicy } = require ('../models')
const bcrypt = require ('bcrypt')
const {sign} = require('jsonwebtoken')

router.get('/hash/:haslo', async (req, res) => {
	const haslo = req.params.haslo
	bcrypt.hash (haslo, 10).then ((hash) => {
		res.json ({
			haslo: haslo,
			hash: hash
		}) 
	})
})

router.post('/', async (req, res) => {
	const { email, haslo } = req.body
	
	if (!email || !haslo) {
		res.json ({
			error: 'Brakuje danych'
		})
		return
	}
	
	const uzytkownik = await uzytkownicy.findOne({
		where: {
			email: email
		}
	})
	
	if (!uzytkownik) {
		res.json ({
			error: 'Nie znaleziono uzytkowinka'
		})
		return
	}
	
	bcrypt.compare (haslo, uzytkownik.haslo_hash).then((zgodne) => {
		if (!zgodne) {
			res.json({
				error: 'Złe hasło'
			})
			return
		}
		
		//token creation 
		const accessToken = sign({
			number_id: uzytkownik.id,
			username: uzytkownik.name + " " + uzytkownik.surname
		}, "importantsecre")
		
		res.json({
			message: 'Zalogowano się!',
			accessToken: accessToken
		})
	})
})

module.exports = router