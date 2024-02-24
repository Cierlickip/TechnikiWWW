const express = require ('express')
const router = express.Router ()
const { uzytkownicy, ogloszenia } = require ('../models')
const { validateToken } = require('../middlewares/AuthMiddleware.js')

router.get('/info', validateToken, async (req, res) => {
	
	const uzytkownik = await uzytkownicy.findOne({
		where: {
			id: req.uzytkownik.number_id
		},
		attributes: ['id', 'name', 'surname']
	})
	
	res.json ({
		number_id: uzytkownik.id,
		name: uzytkownik.name,
		surname: uzytkownik.surname
	})
})

router.get('/ogloszenia/accepted', validateToken, async (req, res) => {
	
	const zaakceptowane_ogloszenia = await ogloszenia.findAll ({
		where: {
			number_id: req.uzytkownik.number_id,
			status: "w realizacji"
		}
	});
	
	res.json(zaakceptowane_ogloszenia)
})

router.get('/ogloszenia/completed', validateToken, async (req, res) => {
	
	const zrealizowane_ogloszenia = await ogloszenia.findAll ({
		where: {
			number_id: req.uzytkownik.number_id,
			status: "wykonane"
		}
	});
	
	res.json(zrealizowane_ogloszenia)
})

router.post('/ogloszenia/accept', validateToken, async (req, res) => {
	const { ogloszenie_id } = req.body
	
	await ogloszenia.update(
		{
			status: 'w realizacji',
			number_id: req.uzytkownik.number_id
		},
		{
			where: {
				id: ogloszenie_id,
			}
		}
	)
	
	res.json ({
		message: 'Uzytkownik ' + req.uzytkownik.number_id + ' accepted #' + ogloszenie_id
	})
})

router.post('/ogloszenia/mark-as-completed', validateToken, async (req, res) => {
	const { ogloszenie_id } = req.body
	
	await ogloszenia.update(
		{
			status: 'wykonane'
		},
		{
			where: {
				id: ogloszenie_id,
				number_id: req.uzytkownik.number_id
			}
		}
	)
	
	res.json ({
		message: 'Uzytkownik ' + req.uzytkownik.number_id + ' wykonał #' + ogloszenie_id
	})
})

module.exports = router